import { BlueTitle } from "./Title";
import { Title } from "./Title";
import { appHeader } from "../styles";

export const Header = (props) => {
  return (
    <header style={{ ...appHeader }}>
      <Title>CSS in JS, différentes approches</Title>
      <BlueTitle>
        (et petit à petit aller vers la gestion d'états complexes...)
      </BlueTitle>
    </header>
  );
};
