import "./App.css";
import { useReducer } from "react";
import { centralPanelStyle } from "./styles";

import { Square } from "./components/Square";

import { colorReducer } from "./reducers/colorReducer";
import { PlusMinusButtons } from "./components/PlusMinusButtons";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Description } from "./components/Description";

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
      <Header></Header>
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
        <Button onClick={() => dispatch({ type: "complementary" })}>
          Complémentaire RGB
        </Button>

        <Square
          red={rgb.r}
          blue={rgb.b}
          green={rgb.g}
        >{`rgb(${rgb.r},${rgb.g},${rgb.b})`}</Square>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
