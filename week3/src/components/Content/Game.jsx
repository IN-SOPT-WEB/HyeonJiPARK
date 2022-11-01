import React from 'react';
import styled from "styled-components";

export default function Game({image, name}) {
console.log(name)
    return (
        <Container>
            <Image src={image} />
            {/* {name && <MultipleButton>{name}</MultipleButton>}

             */}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const Image = styled.img`
    /* width: 300px; */
    height: 300px;
    /* object-fit: cover; */
    border-radius: 20px;
`

const MultipleButton = styled.button`
    font-family: 'Galmuri9';
    /* margin: 20px 0px;
    padding: 6px 12px;

    border-radius: 8px;
    border: 1px solid black;
    box-shadow: 0px 5px 0px 0px #194d93;
    color: #194d93;
    background-color: white;

    width : 30px; */
    /* box-shadow: 0px 5px 0px 0px #1E8185; */
`