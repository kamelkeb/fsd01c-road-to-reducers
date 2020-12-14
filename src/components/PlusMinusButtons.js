import { Button } from "./Button";

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
