import styled from "styled-components/macro";

// On peut accéder aux props et faire en sorte que le style créé le soit dynamiquement
export const Description = styled.div`
  font-size: 0.8em;
  font-weight: ${(props) => (props.important ? "bold" : "normal")};
`;
