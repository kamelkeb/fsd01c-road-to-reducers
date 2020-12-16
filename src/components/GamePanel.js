import React, { useContext } from "react";
import { Description } from "./Description";
import { centralPanelStyle } from "../styles";
import { CasualMoves } from "./CasualMoves";
import { SpecialMoves } from "./SpecialMoves";
import { Board } from "./Board";
import { Context as PositionContext } from "../contexts/DirectionContext";
import { TeleportMoves } from "./TeleportMoves";

export const GamePanel = () => {
  const { gridShape } = useContext(PositionContext);
  return (
    <div style={{ ...centralPanelStyle, margin: "10vh" }}>
      <Description important> THE GAME !!!</Description>
      <Description>
        Vous pouvez ici vous déplacer de cellule en cellule !
      </Description>
      <Board height={gridShape.height} width={gridShape.width}></Board>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <CasualMoves></CasualMoves>
        <SpecialMoves></SpecialMoves>
        <TeleportMoves></TeleportMoves>
      </div>
    </div>
  );
};
