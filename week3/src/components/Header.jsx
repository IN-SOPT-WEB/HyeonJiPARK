import React from 'react';
import styled from "styled-components";

export default function Header() {
    return (
        <Title>당신누구야!!!</Title>
    )
}

const Title = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    color: blue;
    width: 100%;
`