import "./App.css";
import { appHeader, centralPanelStyle } from "./styles";
import styled from "styled-components";
import { Square } from "./components/Square";
import { useReducer } from "react";
import { colorReducer } from "./reducers/colorReducer";
import { PlusMinusButtons } from "./components/PlusMinusButtons";

// Pour rappel: l'attribut 'style' permet en React de faire du style inline
// On lui donne comme valeur un objet JS représentant le style à appliquer

// La modification inline de l'objet de style est ici seulement
// pour illustrer la manière de faire immutable.

// Creation de div stylisée avec styled-components
const Footer = styled.div`
  background-color: #282c34;
  min-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

// Autre exemple de div
const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: #e4b95c;
  margin: 5px;
`;

// On peut hériter du style d'un autre styled component, et l'étendre ou le modifier
const BlueTitle = styled(Title)`
  color: rgb(57, 180, 211);
`;

// On peut accéder aux props et faire en sorte que le style créé le soit dynamiquement
const Description = styled.div`
  font-size: 0.8em;
  font-weight: ${(props) => (props.important ? "bold" : "normal")};
`;

/*
Créer un style pour un composant React pré-existant:
// à checker, ne fonctionne pas!!
const NewSquare = styled.css`
  background-color: rgb(50,50,50)
  width: 100px;
  height: 100px;
`;
*/

function App() {
  const [rgb, dispatch] = useReducer(colorReducer, { r: 120, g: 120, b: 120 });
  const deltaValue = 60;
  const buttonGroups = [
    ["rouge", "setR"],
    ["vert", "setG"],
    ["bleu", "setB"],
    ["liminosité", "changeBrightness"],
  ];
  return (
    <div className="App">
      <header style={appHeader}>
        <Title>CSS in JS, différentes approches</Title>
        <BlueTitle>
          (et petit à petit aller vers la gestion d'états complexes...)
        </BlueTitle>
      </header>
      <div style={{ ...centralPanelStyle, margin: "10vh" }}>
        <Description important>Personalisation RGB</Description>
        <Description>
          Vous pouvez ici ajuster les valeur RGB de la couleur principale de
          votre thème.
        </Description>

        {buttonGroups.map(([name, type]) => (
          <PlusMinusButtons
            name={name}
            dispatch={dispatch}
            type={type}
            payload={deltaValue}
          ></PlusMinusButtons>
        ))}
        <button onClick={() => dispatch({ type: "complementary" })}>
          Complémentaire RGB
        </button>

        <Square red={rgb.r} blue={rgb.b} green={rgb.g}></Square>
        <p>La couleur obtenue: {`rgb(${rgb.r},${rgb.g},${rgb.b})`}</p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
