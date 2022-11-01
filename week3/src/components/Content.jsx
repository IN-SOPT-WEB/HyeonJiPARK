import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const names = [
    "김형겸",
    "류성경",
    "박현지",
    "서지수",
    "장명지",
    "정재욱",
    "정현욱",
    "최은형",
];

export default function Content() {
    const [score, setScore] = useState(0);
    const [members, setMembers] = useState(
        names.map((name) => ({
            person: name,
            image: `assets/${name}.jpg`,
        }))
    );
    const [options, setOptions] = useState(members.slice(0, 5));
    const [answer, setAnswer] = useState(options[parseInt(Math.random() * 5)]);
    // 모달
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        setOptions(members.slice(0, 5));
    }, [members]);

    useEffect(() => {
        setAnswer(options[parseInt(Math.random() * 5)]);
    }, [options]);

    // 선지 클릭 시
    const onClickOption = (e) => {
        if (e.currentTarget.innerText === answer.person) {
            setScore((prev) => prev + 1);
            // 정답 모달 넣기
            setMessage("정답!!!!😆 +1점!!");
            setIsOpen(true);
            if (score >= 4) {
                // 점수 5점 이상 되면 성공
                // setMessage("😇😇😇 CLEAR !!! 😇😇😇");
                // setIsOpen(true);
            }
        } else {
            if (score <= 0) {
                // 점수 0점 미만 되면 실패
                // setMessage("👿👿👿 GAME OVER 👿👿👿");
                // setIsOpen(true);
            } else {
                // 오답 모달 넣기
                setMessage("실망이야....-1점!!!😡");
                setIsOpen(true);
                setScore((prev) => prev - 1);
            }
        }
        setMembers((prev) => [...prev].sort(() => Math.random() - 0.5));
    };

    // 다시 하기 클릭 시
    const onClickRestart = () => {
        window.location.reload();
    };

    return (
        <div>
            <MyScore>⭐️ 내 점수는 : {score}점 ⭐️</MyScore>
            <Container>
                <QuestionImg src={answer.image} />
                {options.map((option) => (
                    <OptionBtn onClick={onClickOption}>
                        {option.person}
                    </OptionBtn>
                ))}
                <RestartBtn onClick={onClickRestart}>다시 하기</RestartBtn>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    {message}
                </Modal>
            </Container>
        </div>
    );
}

// ----------------------------- style -----------------------------
const MyScore = styled.h2`
    display: flex;
    justify-content: center;
    padding: 5px 0px;
    color: white;
    font-size: 1rem;
    background-image: linear-gradient(
        to right,
        #25aae1,
        #4481eb,
        #04befe,
        #3f86ed
    );
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const QuestionImg = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: 10px 8px 0px rgb(191 219 254);
`;
const OptionBtn = styled.button`
    margin: 5px auto;
    padding: 6px 12px;
    width: 250px;

    border-radius: 8px;
    border: 1px solid black;
    box-shadow: 0px 5px 0px 0px #009aed;
    background-color: white;
    font-family: "Galmuri9";

    transition: 0.2s;

    &:hover {
        color: white;
        background-color: #009aed;
        cursor: pointer;
    }
`;
const RestartBtn = styled.button`
    margin: 20px 0px;
    padding: 6px 12px;

    border-radius: 8px;
    border: 1px solid black;
    box-shadow: 0px 5px 0px 0px #194d93;
    color: white;
    background-color: #194d93;

    font-family: "Galmuri9";
    font-size: 1rem;
    font-weight: 600;

    transition: all 150ms ease-in-out;

    &:hover {
        color: #194d93;
        background-color: white;
        cursor: pointer;
    }
`;
