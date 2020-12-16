import React, { useContext } from "react";
import { ArrowButton } from "./ArrowButton";
import { Context as PositionContext } from "../contexts/DirectionContext";
import { Description } from "./Description";

export const TeleportMoves = () => {
  const { goto, gridShape } = useContext(PositionContext);
  return (
    <div style={{ margin: "18px", width: "300px" }}>
      <Description important>Teleportation moves</Description>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ArrowButton
          direction="Coin HG"
          clickHandler={() => goto(0, 0)}
        ></ArrowButton>
        <ArrowButton
          direction="Coin HD"
          clickHandler={() => goto(gridShape.width - 1, 0)}
        ></ArrowButton>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ArrowButton
          direction="Coin BG"
          clickHandler={() => goto(0, gridShape.height - 1)}
        ></ArrowButton>
        <ArrowButton
          direction="Coin BG"
          clickHandler={() => goto(gridShape.width - 1, gridShape.height - 1)}
        ></ArrowButton>
      </div>
    </div>
  );
};
