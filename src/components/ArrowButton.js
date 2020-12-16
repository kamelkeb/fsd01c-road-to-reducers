import styled from "styled-components";
import { Button } from "./Button";


const styledArrowButton = styled.button`
    width: 100px;
    height: 75px;
    border: 5px solid;
`;

export const ArrowButton = ({clickHandler, direction}) => {
    return <button style={{width: "100px"}} onClick={clickHandler}> {direction} </button>;
}