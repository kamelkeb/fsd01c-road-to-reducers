import React, { useContext } from "react";
import { Description } from "./Description";
import { centralPanelStyle } from "../styles";
import { CasualMoves } from "./CasualMoves";
import { SpecialMoves } from "./SpecialMoves";
import { Board } from "./Board";

export const GamePanel = () => {
    return (
      <div style={{ ...centralPanelStyle, margin: "10vh" }}>
        <Description important> THE GAME !!!</Description>
        <Description>
                Vous pouvez ici vous déplacer de cellule en cellule. Merci Kamel !
        </Description>
        <Board height={8} width={12}></Board>
        <CasualMoves></CasualMoves>
        <SpecialMoves></SpecialMoves>
      </div>
    );
}