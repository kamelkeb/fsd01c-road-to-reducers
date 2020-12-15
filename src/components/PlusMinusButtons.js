import { Button } from "./Button";

export const PlusMinusButtons = ({ name, affect, payload }) => (
  <div>
    <Button onClick={() => affect(+payload)}>+ {name}</Button>
    <Button onClick={() => affect(-payload)}>- {name}</Button>
  </div>
);
