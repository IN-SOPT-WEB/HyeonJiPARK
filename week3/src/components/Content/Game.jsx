import React from 'react';
import styled from "styled-components";

export default function Game({image, name}) {
console.log(name)
    return (
        <Container>
            <Image src={image} />
            {name && <Button>{name}</Button>}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const Image = styled.img`
    width: 300px;
    border-radius: 20px;
`

const Button = styled.button`
    color: red
`