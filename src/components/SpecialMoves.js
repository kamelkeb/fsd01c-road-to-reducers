import React from "react";
import { ArrowButton } from "./ArrowButton";

export const SpecialMoves = () => {
  return (
    <div>
      <div>
        <ArrowButton
          direction="H-G"
          clickHandler={() => alert("alerte")}
        ></ArrowButton>
        <ArrowButton
          direction="H-D"
          clickHandler={() => alert("alerte")}
        ></ArrowButton>
      </div>
      <div>
        <ArrowButton
          direction="G-H"
          clickHandler={() => alert("alerte")}
        ></ArrowButton>
        <ArrowButton
          direction="D-H"
          clickHandler={() => alert("alerte")}
        ></ArrowButton>
      </div>
      <div>
        <ArrowButton
          direction="G-B"
          clickHandler={() => alert("alerte")}
        ></ArrowButton>
        <ArrowButton
          direction="D-B"
          clickHandler={() => alert("alerte")}
        ></ArrowButton>
      </div>
      <div>
        <ArrowButton
          direction="B-G"
          clickHandler={() => alert("alerte")}
        ></ArrowButton>
        <ArrowButton
          direction="B-D"
          clickHandler={() => alert("alerte")}
        ></ArrowButton>
      </div>
    </div>
  );
};
