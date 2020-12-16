import React, { useReducer } from "react";
/*
Recette générale afin de mettre en place un context et un reducer pour une ressource
(rq: ressource = un type de donnée complexe à gérer = un state complexe à gérer)
Cela s'articule en trois axes,
Axe I: Les définitions ici bas, dans un même fichier, un fichier par ressource:
*/

// 0- Si tu vois l'utilité de disposer de helpers de manipulation de la donnée (logique métier),
// implémente-les au besoin
const affectDirection = (max, value, delta) => {
  /*
  On peut return ceci en une seule expression:
  delta + value > 0 ? (delta + value) % max : ((delta + value) % max) + max
  ou cela:
  */
  const rest = (value + delta) % max;
  return rest >= 0 ? rest : rest + max;
};

const isPositionInsideBoard = (boardShape, position) =>
  position.x < boardShape.width && position.y < boardShape.width;

// 1- Choisir l'état initial (sa forme, sa valeur)
const initialState = {
  x: 0,
  y: 0,
};

const boardShape = {
  width: 12,
  height: 8,
};

/*
2- Mettre en place un reducer: c'est une fonction, qui prend deux paramètres, le premier
est l'état, le second est un objet action.
L'objet action doit disposer d'un champ 'type' contenant une string, et peut au besoin
avoir un champ 'payload' qui contiendra de la donnée utile pour modifier le state.
Dans le corps de cette fonction on effectue un switch sur le type d'action, chaque case
contiendra la logique de modification du state, et retournera un nouveau state créé pour
répondre à la demande d'action.
Attention: la modification du state devra se faire de façon immutable (ne pas modifier
  sur place l'objet state)
*/
/*
** Pour le payload, identifier la forme de la grille, ainsi que le degré de décallage de x & y.
    { gridHeight: 8, gridWidth: 12, deltaX: +1, deltaY: +1 }
*/
export const directionReducer = (
  previousState,
  { type, payload: { boardHeight, boardWidth, deltaX, deltaY } }
) => {
  switch (type) {
    case "casualMoves":
      return {
        ...previousState,
        x: affectDirection(boardWidth, previousState.x, deltaX),
        y: affectDirection(boardHeight, previousState.y, deltaY),
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
  Je définis ces fonctions hors du composant plus bas, pour qu'elle ne soient pas recréées à chaque re-render
  de ce composant Provider. Et du fait que la définition se passe hors du composant, je n'ai pas accès à
  la fonction 'dispatch', je décide donc de recevoir 'dispatch' en argument, et de retourner une fonction liée
  à dispatch, voire celle écrite de façon non raccourcie pour mieux comprendre le pattern.
*/

const move = (dispatch) => (deltaX, deltaY) =>
  // Checker avant de dispatcher, que les vauleurs de delta ne nous feront
  // sortir de la board
  dispatch({
    type: "casualMoves",
    payload: {
      boardHeight: boardShape.height,
      boardWidth: boardShape.width,
      deltaX: deltaX,
      deltaY: deltaY,
    },
  });

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
  const [position, dispatch] = useReducer(directionReducer, initialState);

  return (
    <Context.Provider
      value={{
        gridShape: boardShape,
        position: position,
        move: move(dispatch),
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
