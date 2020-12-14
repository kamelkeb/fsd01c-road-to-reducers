import styled from "styled-components";

export const Square = styled.div`
  background-color: ${({ red, green, blue }) => `rgb(${red},${green},${blue})`};
  font-size: 12px;
  height: 100px;
  width: 100px;
  margin: 4px;
`;

/*
Equivalent à ceci, où ici c'est du CSS in JS maison, inline:
*/
export const Square2 = ({ red, green, blue }) => (
  <div
    style={{
      backgroundColor: `rgb(${red},${green},${blue})`,
      fontSize: "12px",
      height: "100px",
      width: "100px",
    }}
  ></div>
);
