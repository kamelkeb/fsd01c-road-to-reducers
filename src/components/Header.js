import { BlueTitle } from "./Title";
import { Title } from "./Title";
import { appHeader } from "../styles";
import { Context as ColorContext } from "../contexts/PrimaryColorContext";
import { useContext } from "react";

export const Header = (props) => {
  const {
    rgb: { r, g, b },
  } = useContext(ColorContext);
  return (
    <header style={{ ...appHeader, backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <Title>CSS in JS, différentes approches</Title>
      <BlueTitle>
        (et petit à petit aller vers la gestion d'états complexes...)
      </BlueTitle>
    </header>
  );
};
