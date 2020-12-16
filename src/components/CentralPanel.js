import React, { useContext } from "react";
import { centralPanelStyle } from "../styles";
import { Square } from "./Square";
import { Button } from "./Button";
import { PlusMinusButtons } from "./PlusMinusButtons";
import { Description } from "./Description";
import { Context as ColorContext } from "../contexts/PrimaryColorContext";

export const CentralPanel = (props) => {
  const {
    rgb,
    generateComplementary,
    affectRed,
    affectBlue,
    affectGreen,
    affectBrightness,
  } = useContext(ColorContext);
  const deltaValue = 60;
  const buttonGroups = [
    ["rouge", affectRed],
    ["vert", affectGreen],
    ["bleu", affectBlue],
    ["liminosité", affectBrightness],
  ];

  return (
    <div style={{ ...centralPanelStyle, margin: "10vh" }}>
      <Description important>Personalisation RGB</Description>
      <Description>
        Vous pouvez ici ajuster les valeur RGB de la couleur principale de votre
        thème.
      </Description>
      {buttonGroups.map(([name, affect]) => (
        <PlusMinusButtons
          name={name}
          affect={affect}
          payload={deltaValue}
        ></PlusMinusButtons>
      ))}
      <Button onClick={generateComplementary}>Complémentaire RGB</Button>

      <Square
        red={rgb.r}
        blue={rgb.b}
        green={rgb.g}
      >{`rgb(${rgb.r},${rgb.g},${rgb.b})`}</Square>
    </div>
  );
};
