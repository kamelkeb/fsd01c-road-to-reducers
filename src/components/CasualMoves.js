import React, { useContext } from "react";
import { ArrowButton } from "./ArrowButton";
import { Context as PositionContext } from "../contexts/DirectionContext";

export const CasualMoves = () => {
  const { move } = useContext(PositionContext);
  return (
    <div>
      <div>
        <ArrowButton
          direction="N-O"
          clickHandler={() => move(-1, -1)}
        ></ArrowButton>
        <ArrowButton
          direction="N"
          clickHandler={() => move(-1, 0)}
        ></ArrowButton>
        <ArrowButton
          direction="N-E"
          clickHandler={() => move(-1, +1)}
        ></ArrowButton>
      </div>
      <div>
        <ArrowButton
          direction="O"
          clickHandler={() => move(0, -1)}
        ></ArrowButton>
        <ArrowButton
          direction="E"
          clickHandler={() => move(0, +1)}
        ></ArrowButton>
      </div>
      <div>
        <ArrowButton
          direction="S-O"
          clickHandler={() => move(+1, -1)}
        ></ArrowButton>
        <ArrowButton
          direction="S"
          clickHandler={() => move(+1, 0)}
        ></ArrowButton>
        <ArrowButton
          direction="S-E"
          clickHandler={() => move(+1, +1)}
        ></ArrowButton>
      </div>
    </div>
  );
};
