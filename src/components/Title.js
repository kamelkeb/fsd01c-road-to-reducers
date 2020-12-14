import styled from "styled-components/macro";

export const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: #e4b95c;
  margin: 5px;
`;

// Exemple: On peut hériter du style d'un autre styled component, et l'étendre ou le modifier
export const BlueTitle = styled(Title)`
  color: rgb(57, 180, 211);
`;
