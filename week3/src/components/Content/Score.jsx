import React from 'react';
import styled from "styled-components";

export default function Score({score}) {
    return (
        <MyScore>
            ⭐️ 내 점수는 : {score}점 ⭐️
        </MyScore>
    )
}

const MyScore = styled.h2`
    display: flex;
    justify-content: center;
    padding: 5px 0px;
    font-size: 1rem;
    background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
` 