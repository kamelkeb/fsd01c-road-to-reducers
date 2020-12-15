import React, { useReducer } from "react";
/*
Recette générale afin de mettre en place un context et un reducer pour une ressource
(rq: ressource = un type de donnée complexe à gérer = un state complexe à gérer)
Cela s'articule en trois axe,
Axe I: Les définitions ici bas, dans un même fichier, un fichier par ressource:
*/

// 0- Si tu vois l'utilité de disposer de helpers de manipulation de la donnée (logique métier),
// implémente les au besoin
const affectColor = (color, v) => Math.min(Math.max(color + v, 0), 255);
const complTo255 = (n) => 255 - n;

// 1- Choisir l'état initial (sa forme, sa valeur)
const initialState = {
  r: 120,
  g: 120,
  b: 120,
};

/*
2- Mettre en place un reducer: c'est une fonction, qui prend deux paramètres, le premier
est l'état, le second est un objet action.
L'objet action doit disposer d'un champ 'type' contenant une string, et peut au besoin
avoir un champ 'payload' qui contiendra de la donnée utile pour modifier le state.
Dans le corp de cette fonction on effectue un switch sur le type d'action, chaque case
contiendra la logique de modification du state, et retournera un nouveau state créé pour
répondre à la demande d'action.
Attention: la modification du state devra se faire de façon immutable (ne pas modifier
  sur place l'objet state)
*/
export const colorReducer = (previousState, action) => {
  switch (action.type) {
    case "setR":
      return {
        ...previousState,
        r: affectColor(previousState.r, action.payload),
      };
    case "setB":
      return {
        ...previousState,
        b: affectColor(previousState.b, action.payload),
      };
    case "setG":
      return {
        ...previousState,
        g: affectColor(previousState.g, action.payload),
      };
    case "changeBrightness":
      return {
        r: affectColor(previousState.r, action.payload),
        g: affectColor(previousState.g, action.payload),
        b: affectColor(previousState.b, action.payload),
      };
    case "complementary":
      return {
        r: complTo255(previousState.r),
        g: complTo255(previousState.g),
        b: complTo255(previousState.b),
      };
    default:
      return previousState;
  }
};

/*
3- Pour éviter d'exposer partout les détails d'impléméntation (les strings correspondant
  aux différentes actions par exemple, la fonction dispatch aussi), on définira des fonctions
  avec des noms explicites, une par action, chaque fonction prend 'dispatch' en argument
  et retourne une fonction dont le rôle sera de faire appel à dispatch
  en passant la bonne string (type d'action), et le bon payload.
  Chaque fonction retournée pourra vérifier ce qu'elle reçoit en argument comme données avant de le mettre dans le payload
  et de le passer à dispatch.
  Je définis ces fonction hors du composant plus bas, pour qu'elle ne soient pas recréées à chaque re-render
  de ce composant Provider. Et du fait que la définition se passe hors du composant, je n'ai pas accès à
  la fonction 'dispatch', je décide donc de recevoir 'dispatch' en argument, et de retourner une fonction liée
  à dispatch, voir celle écrite de façon non raccourcie pour mieux comprendre le pattern.
*/

const generateComplementary = (dispatch) => () =>
  dispatch({ type: "complementary" });

// Ecriture non raccourcie:
const affectRed = (dispatch) => {
  // je crée une fonction qui fera appel à dispatch, cette fonction ici créée pourra
  // prendre ou pas des données en argument, et éventuellement effectuer un traitement
  // de modification, de vérification, de validation de la valeur reçue en argument
  // avant de passer quelque chose comme valeur de payload.
  const maFonctionLiéeÀDispatch = (value) => {
    // Ici traitements éventuels sur 'value'
    dispatch({ type: "setR", payload: value });
  };
  return maFonctionLiéeÀDispatch;
};

const affectBlue = (dispatch) => (value) =>
  dispatch({ type: "setB", payload: value });

const affectGreen = (dispatch) => (value) =>
  dispatch({ type: "setG", payload: value });

const affectBrightness = (dispatch) => (value) =>
  dispatch({ type: "changeBrightness", payload: value });
// Les fonctions précédentes ont pour responsabilité d'appeler/exécuter dispatch.

// 4- Créer un contexte vide (sans passer d'argument à createContext)
export const Context = React.createContext();

// 5- Créer un HOC (composant react, qui manipule explicitement ses children. Pour rappel, on reçoit
// children comme props).
/*
Ce composant aura pour responsabilité "d'assembler les pièces":
a- Le reducer, et l'état initial sont passés à useReducer pour générer la fonction dispatch et le state
b- Le JSX retourné par le composant Provider que l'on définit nous même, sera le composant Context.Provider
(Context a été créé un peu plus haut, il dispose d'un champ Provider), auquel on passe les children comme
contenu fils. Et AUSSI une valeur à la props 'value'.

'value' est la props qui permettra de rendre disponible partout (au besoin) la donnée utile du contexte.
Ici, on choisi de rendre disponible:
- Le state
- Une version 'liéée' à 'dispatch' des fonction représentant les actions possibles sur le state.
Remarquer qu'aucune des fonctions exposées ainsi dans 'value' ne nécistera pour être utilisée ailleurs dans l'app
de connaître les string de type d'action, ni de savoir le state est géré via un reducer. Ces fonctions servent
à cacher les détails d'implémentation.
*/
export const Provider = ({ children }) => {
  const [rgb, dispatch] = useReducer(colorReducer, initialState);

  return (
    <Context.Provider
      value={{
        rgb: rgb,
        generateComplementary: generateComplementary(dispatch),
        affectRed: affectRed(dispatch),
        affectBlue: affectBlue(dispatch),
        affectGreen: affectGreen(dispatch),
        affectBrightness: affectBrightness(dispatch),
      }}
    >
      {children}
    </Context.Provider>
  );
};

// Ne pas oublier l'export devant la définition du context et du provider.

/*
Axe II: Fournir le contexte à mon app:
Pour utiliser le Provider, on l'importera dans App.js, puis on le mettra comme composant
père de tous les autres.
*/

/*
Axe III: Consommer le context:
(utiliser les données qui y sont, state et fonctions de modif du state)
Dans n'importe quel composant présent dans la hiérarchie englobée par le provider,
on pourra accéder au context comme suit:
1- Importer là bas le context qui est exporté ici
2- Le passer à useContext en récupérant ce qui nous intéresse du contexte
*/
