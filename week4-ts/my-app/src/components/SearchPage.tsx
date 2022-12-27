import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

interface Props {
  getUser: (username: string) => void;
}

export default function SearchPage({getUser}: Props) {
  const [input, setInput] = useState(""); // input 값
  const [focus, setFocus] = useState(false); // input 포커싱 상태
  const [histories, setHistories] = useState<string[]>(JSON.parse(localStorage.getItem("history") || '[]')); // 검색 히스토리 저장

  // input창 텍스트 보여주기
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  // 검색 클릭 시 history 배열에 넣고 로컬스토리지에 저장
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      alert("아이디를 입력하세요");
    } else {
      const userData = getUser(input);
      if (!histories.includes(input)) {
        // history 배열에 넣기 (중복 아닐 때)
        setHistories([...histories, input]);
        // 로컬스토리지 업데이트
        localStorage.setItem("history", JSON.stringify([...histories, input]));
      }
      setInput("");
      setFocus(false);
    }
  };


  // 히스토리 삭제
  const onRemove = (target: string) => {
    const newHistories = histories.filter((history) => history !== target);
    setHistories(newHistories);
    localStorage.setItem("history", JSON.stringify([...newHistories]));
  };

  // input 포커스 될 때 드롭다운 나타남
  const onFocusInput = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);
  };

  // 포커스 아웃 시 드롭다운 없어짐 (미완성,,,)
  const onFocusOut = (e: React.MouseEvent<HTMLDivElement>) => {
    // if ()
    // setFocus(false);
  };

  // 드롭다운 히스토리 클릭 시 해당 유저 프로필 페이지로 이동, 드롭다운 사라짐
  const onClickHistory = (history: string) => {
    getUser(history);
  };

  return (
    <Container onClick={onFocusOut}>
      <SearchContainer>
        <Title>깃헙 프로필 검색창</Title>
        <SearchBar onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            name="text"
            placeholder="깃헙 아이디를 입력해주세요"
            value={input}
            onChange={handleChange}
            onFocus={onFocusInput}
            autoComplete="off"
            />
          <SearchButton type="submit" value="검색" />
        </SearchBar>
        {focus && (
          <SearchHistories>
            {histories.map((history) => (
              <DropdownList key={history}>
                <SearchHistory onClick={() => onClickHistory(history)}>
                  {history}
                </SearchHistory>
                <DeleteButton onClick={() => onRemove(history)}>
                  X
                </DeleteButton>
              </DropdownList>
            ))}
          </SearchHistories>
        )}
      </SearchContainer>
      <Outlet />
    </Container>
  );
}

// -------------------------- style --------------------------

const Container = styled.div``;

const SearchContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 20px;

  width: 500px;
  margin-top: 10%;
  padding: 20px;

  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.9);
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;

  width: 90%;
`;

const SearchInput = styled.input`
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  width: 70%;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.input`
  border: none;
  border-radius: 10px;
  padding: 10px;
`;

const SearchHistories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 2.5%;
  top: 87%;
  gap: 10px;
  
  width: 450px;
  padding: 5px 10px;
`;

const DropdownList = styled.div`
  display: flex;

  width: 70%;

  > *:hover {
    color: white;
  }
`;

const SearchHistory = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 85%;
  padding: 10px;
  margin: -5px;
  
  background-color: rgba(181, 203, 255, 0.675);
`;

const DeleteButton = styled.button`
  padding: 10px;
  margin: -5px;
  margin-left: 5px;

  background-color: rgba(181, 203, 255, 0.675);
`;
