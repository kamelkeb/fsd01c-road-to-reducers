import styled from "styled-components";

export const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: #e4b95c;
  margin: 5px;
`;

// Exemple: On peut hériter du style d'un autre styled component, et l'étendre ou le modifier
const BlueTitle = styled(Title)`
  color: rgb(57, 180, 211);
`;

// On peut accéder aux props et faire en sorte que le style créé le soit dynamiquement
const Description = styled.div`
  font-size: 0.8em;
  font-weight: ${(props) => (props.important ? "bold" : "normal")};
`;

/*
Créer un styled component à partir d'un composant React pré-existant:
*/
const Sq = ({ className }) => <div className={className} />;

const NewSquare = styled(Sq)`
  background-color: rgb(200, 50, 50);
  color: white;
  width: 10px;
  height: 10px;
  margin: 4px;
`;
