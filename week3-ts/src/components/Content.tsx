import React, { useEffect, useState, useCallback, } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import confetti from "canvas-confetti";
import { Member } from "../types";
import Ending from "./Ending";

const names = [
    "김남준",
    "김서현",
    "김현수",
    "김형겸",
    "나림",
    "류성경",
    "문서연",
    "박현지",
    "서지수",
    "서혜은",
    "송하윤",
    "유준상",
    "윤지영",
    "이서영",
    "이주함",
    "장명지",
    "정재욱",
    "정현욱",
    "최유진",
    "최은형",
    "한예원",
    "홍명헌",
    "홍서희",
];

export default function Content() {
    // 점수
    const [score, setScore] = useState<number>(0);
    // 문제
    const [members, setMembers] = useState<Member[]>(
        names.map((name) => ({
            person: name,
            image: `assets/${name}.jpg`,
        }))
    );
    // 선지, 정답
    const [options, setOptions] = useState<Member[]>();
    const [answer, setAnswer] = useState<Member>();
    // 모달
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    // 2) member가 섞일 때마다 배열 맨 앞에 있는 5개를 option으로 변경
    useEffect(() => {
        setOptions(members.slice(0, 5));
    }, [members]);

    // 3) option이 바뀔 때마다 정답 선택 (0~4 중 하나)
    useEffect(() => {
        if(options)
        setAnswer(options[Math.floor(Math.random() * 5)]);
    }, [options]);

    // 선지 클릭 시 정답, 오답 모달 생성 및 점수 변경
    const onClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(answer)
        if (e.currentTarget.innerText === answer.person) {
            // 정답 모달
            setMessage("정답!!!!😆 +1점!!");
            setIsOpen(true);
            onClickAnswer();
            setScore((prev) => prev + 1);
        } else {
            // 오답 모달
            setMessage("실망이야....-1점!!!😡");
            setIsOpen(true);
            setScore((prev) => prev - 1);
        }
        // 1) 선지 클릭 후 member 섞기(sort)
        // sort()는 음수, 양수, 0의 결과 값에 따라 정렬을 하는데, Math.random() - 0.5는 무작위로 음수, 양수, 0을 리턴하기 때문에 배열이 무작위로 정렬된다. (Math.random()는 0이상 1미만의 숫자를 리턴함)
        setMembers((prev) => [...prev].sort(() => Math.random() - 0.5));
    };

    // 정답 선택 시 애니메이션
    const onClickAnswer = useCallback(() => {
        confetti({
            particleCount: 150,
            spread: 60,
            zIndex: 1000,
        });
    }, []);

    // 다시 하기 클릭 시 초기화
    const onClickRestart = () => {
        window.location.reload();
    };

    return (
        <div>
            <MyScore>⭐️ 내 점수는 : {score}점 ⭐️</MyScore>
            <Container>
                { score >= 5 || score < 0 ? ( // 점수 5정 이상이면 성공, 0점 미만이면 실패
                    <Ending score={score} />
                ) :  ( 
                    <>                        
                        <QuestionImg src={answer?.image} alt="question image"/>
                        {options?.map((option, idx) => (
                            <OptionBtn key={idx} type="button" onClick={onClickOption}>
                                {option.person}
                            </OptionBtn>
                        ))}
                    </>
                )
                }
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
    width: 300px;
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
