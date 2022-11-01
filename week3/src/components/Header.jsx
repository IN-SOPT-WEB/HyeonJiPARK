import React from "react";
import styled from "styled-components";

export default function Header() {
    return <Title>진짜 궁금하다...당신..</Title>;
}

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;

    color: #1384cd;
    font-size: 1.8rem;
    font-weight: 700;
`;
