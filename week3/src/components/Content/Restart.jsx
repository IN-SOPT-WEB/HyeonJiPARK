import React from 'react';
import styled from "styled-components";

export default function Restart() {
    return (
        <RestartContainer>
            <RestartBtn>다시 하기</RestartBtn>
        </RestartContainer>
    )
}

const RestartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const RestartBtn = styled.button`
    margin: 20px 0px;
    padding: 6px 12px;

    border-radius: 8px;
    border: 1px solid black;
    box-shadow: 0px 5px 0px 0px #194d93;
    color: white;
    background-color: #194d93;

    font-family: 'Galmuri9';
    font-size: 1rem;
    font-weight: 600;

    transition: all 150ms ease-in-out;

    &:hover{  
        color : #194d93;
        background-color : white;
        cursor: pointer;
    }
` 