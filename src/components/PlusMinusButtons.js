import styled from "styled-components";

// On pourra avoir comme base, autre chose que des divs
const Button = styled.button`
  color: #ff3333;
  margin: 10px;
  width: 120px;
  &:hover {
    color: #0080ff;
  }
`;

export const PlusMinusButtons = ({ name, dispatch, type, payload }) => (
  <div>
    <Button onClick={() => dispatch({ type: type, payload: +payload })}>
      + {name}
    </Button>
    <Button onClick={() => dispatch({ type: type, payload: -payload })}>
      - {name}
    </Button>
  </div>
);
