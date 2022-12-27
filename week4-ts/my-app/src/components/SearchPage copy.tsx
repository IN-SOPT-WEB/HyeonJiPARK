import React from "react";
import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

interface Props {
  getUser: (username: string) => void;
}

interface History {
  id: number,
  github_id: string,
}

export default function SearchPage({getUser}: Props) {
  const [input, setInput] = useState(""); // input 값
  const [focus, setFocus] = useState(false); // input 포커싱 상태
  let [histories, setHistories] = useState<History[]>([]); // 검색 히스토리를 저장할 배열
  const historyStorage = localStorage.getItem("histories"); // 히스토리 로컬스토리지 저장소
  const nextId = useRef(0);

  useEffect (() => {
    // initHistory();
  },[]);

  // 히스토리 로컬스토리지 저장
  const setLocalStorage = (newHistory: string[]) => {
    localStorage.setItem("history", JSON.stringify([...histories], newHistory));
  };

  const addLocalStorage = (newHistory: string) => {
    const user = {
      id: nextId.current,
      github_id: newHistory,
    };
    localStorage.setItem("history", JSON.stringify([...histories, user]));
  }

  const addHistory = (newHistory: string) => {
    console.log(nextId);
    const user: History = {
      id: nextId.current,
      github_id: newHistory,
    };
    setHistories([...histories, user]);
    nextId.current += 1;
  }

  // input창 텍스트 보여주기
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  // 검색 클릭 시 history 배열에 넣고 로컬스토리지에 저장
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      alert("아이디를 입력하세요");
    } else {
      getUser(input);
      // history 배열에 넣기 (중복 아닐 때)
      if (histories.filter((history) => history.github_id !== input)) {
        addHistory(input);

        // 로컬스토리지 업데이트
        addLocalStorage(input);
      }
      setInput("");
      setFocus(false);
    }
  };

  // 히스토리가 새로고침해도 남아있게 하기 위해서 init
  const initHistory = (): void => {
    if (historyStorage != null) {
      // 객체 형태로 저장
      addHistory(JSON.stringify(historyStorage));
      // setHistories(JSON.parse(historyStorage));
    }
  };

  // 히스토리 삭제
  const onRemove = (targetId: number) => {
    const newHistories = histories.filter((history) => history.id !== targetId);
    setHistories(newHistories);
    // setLocalStorage(newHistories);
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
  const onClickHistory = (github_id: string) => {
    getUser(github_id);
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
              <DropdownList key={history.id}>
                <SearchHistory onClick={() => onClickHistory(history.github_id)}>
                  {history.github_id}
                </SearchHistory>
                <DeleteButton onClick={() => onRemove(history.id)}>
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
