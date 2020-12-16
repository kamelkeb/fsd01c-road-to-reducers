import styled from "styled-components";

const PrimitiveCell = (props) => {
  return <div className={props.className}>{props.content}</div>;
};

export const Cell = styled(PrimitiveCell)`
  width: 35px;
  height: 35px;
  background-color: #a9a9a9;
  border: 5px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;
