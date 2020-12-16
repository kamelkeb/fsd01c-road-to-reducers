import styled from "styled-components";

const Failure = (props) => {
    return <div className={props.className}>{props.content}</div>;
}

export const Cell = styled(Failure)`
  width: 50px;
  height: 50px;
  background-color: #a9a9a9;
  border: 5px solid;
  display: flex;
  justify-content: center;
`;