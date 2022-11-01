import React, { useEffect } from 'react';
import Score from './Content/Score';
// import Game from './Content/Game';
import Restart from './Content/Restart';
import { useState } from 'react';
import styled from "styled-components";

const names = [
    "김형겸", "류성경", "박현지", "서지수", "장명지", "정재욱", "정현욱", "최은형"
] 

export default function Content() {
    const [score, setScore] = useState(0);
    const [members, setMembers] = useState(names.map((name) => (
        {
            person: name,
            image: `assets/${name}.jpg`
        }
    )));
    const [options, setOptions] = useState(members.slice(0, 5));
    const [answer, setAnswer] = useState(options[parseInt(Math.random()*5)]);

    useEffect(()=>{
        setOptions(members.slice(0, 5));
    }, [members])

    useEffect(()=>{
        setAnswer(options[parseInt(Math.random()*5)]);
    }, [options])

    const onClickOption = (e) => {
        if (e.currentTarget.innerText === answer.person) {
            setScore((prev) => (prev+1));
            console.log("정답!");

        }
        else {
            console.log("땡!");
            setScore((prev) => (prev-1));
            
        }
        setMembers((prev) => [...prev].sort(() => Math.random() - 0.5))
    }

    return (
        <div>
            <Score score={score}/>
            <Container>
                <Image src={answer.image} />

                {options.map((option) => (
                    <Button onClick={onClickOption}>{option.person}</Button>
                ))}

            </Container>
            <Restart />
        </div>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* width: 100vh; */
`

const Image = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin: 20px auto;
    border-radius: 20px;
`

const Button = styled.button`
    margin: 5px auto;
    padding: 6px 12px;
    width: 250px;

    border-radius: 8px;
    border: 1px solid black;
    box-shadow: 0px 5px 0px 0px #009aed;
    background-color : white;
    font-family: 'Galmuri9';

    transition: 0.2s;

    &:hover{  
        color : white;
        background-color : #009aed;
        cursor: pointer;
    }
`