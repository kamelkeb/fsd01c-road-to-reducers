import React, { useContext } from "react";
import { ArrowButton } from "./ArrowButton";
import { Context as PositionContext } from "../contexts/DirectionContext";
import { Description } from "./Description";

export const SpecialMoves = () => {
  const { move } = useContext(PositionContext);
  return (
    <div style={{ margin: "18px", width: "300px" }}>
      <Description important>Special moves</Description>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ArrowButton
          direction="H-G"
          clickHandler={() => move(-1, -2)}
        ></ArrowButton>
        <ArrowButton
          direction="H-D"
          clickHandler={() => move(+1, -2)}
        ></ArrowButton>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ArrowButton
          direction="G-H"
          clickHandler={() => move(-2, -1)}
        ></ArrowButton>
        <ArrowButton
          direction="D-H"
          clickHandler={() => move(+2, -1)}
        ></ArrowButton>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ArrowButton
          direction="G-B"
          clickHandler={() => move(-2, +1)}
        ></ArrowButton>

        <ArrowButton
          direction="D-B"
          clickHandler={() => move(+2, +1)}
        ></ArrowButton>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ArrowButton
          direction="B-G"
          clickHandler={() => move(-1, +2)}
        ></ArrowButton>
        <ArrowButton
          direction="B-D"
          clickHandler={() => move(+1, +2)}
        ></ArrowButton>
      </div>
    </div>
  );
};
