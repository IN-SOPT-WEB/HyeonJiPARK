import React from 'react'
import styled from "styled-components";

interface EndingProps{ 
    score: number 
}

export default function Ending({score}: EndingProps) {
    let imgsrc, imgalt, message;

    if (score >= 5) {
        imgsrc = "../assets/win.gif";
        imgalt = "win"
        message = "😇😇😇 YOU WIN !!! 😇😇😇"
    } 
    if (score < 0) {
        imgsrc = "../assets/over.gif";
        imgalt = "game over"
        message = "👿👿👿 GAME OVER 👿👿👿"
    }

    return (
        <EndingContainer>
            <img src={imgsrc} alt={imgalt} />
            <p>{message}</p>
        </EndingContainer>
    )
}

const EndingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 500px;

    > img {
        width: 300px;
    }
`;