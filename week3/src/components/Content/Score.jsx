import React from 'react';
import styled from "styled-components";

export default function Score({score}) {
    return (
        <MyScore>
            내 점수는 : {score}
        </MyScore>
    )
}

const MyScore = styled.h2`
    display: flex;
    justify-content: center;
    background-color: green;
    color: pink;
    padding: 10px 10px;
` 