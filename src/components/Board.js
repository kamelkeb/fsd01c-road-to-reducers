import { Cell } from "./Cell";
import { useContext } from "react";
import { Context as PositionContext } from "../contexts/DirectionContext";

const createBoardStructure = (height, width, x, y) => {
  const boardArray = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      const character = i === y && j === x ? "X" : undefined;
      row.push(character);
    }
    boardArray.push(row);
  }
  return boardArray;
};

export const Board = ({ height, width }) => {
  const {
    position: { x, y },
  } = useContext(PositionContext);
  return createBoardStructure(height, width, x, y).map((element) => (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {element.map((character) => (
        <Cell content={character}></Cell>
      ))}
    </div>
  ));
};
