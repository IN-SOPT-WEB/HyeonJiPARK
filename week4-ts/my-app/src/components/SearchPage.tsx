import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useGetUser from "../hooks/useGetUser";

// interface SearchPageProps {
//   getUser: (username: string) => void;
// }

// function SearchPage({getUser}: SearchPageProps) {
  
function SearchPage() {
  const [input, setInput] = useState(""); // input 값
  const [historyList, setHistoryList] = useState<string[]>(JSON.parse(localStorage.getItem("history") || '[]')); // 검색 히스토리 저장

  let historyRef = useRef<HTMLDivElement>(null);
  const [isFocus, setIsFocus] = useState(false); // input 포커싱 상태

  const userNameRef = useRef<string>("");
  const currentUserState = useGetUser(userNameRef);

  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void { // 드롭다운 외 영역 클릭 감지
        if (historyRef.current && !historyRef.current.contains(e.target as Node)) {
          setIsFocus(false);
        }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [historyRef]);


  // input창 텍스트 보여주기
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  // 검색 클릭 시 history 배열에 넣고 로컬스토리지에 저장
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      alert("아이디를 입력하세요");
    } else {
      // getUser(input);
      userNameRef.current = input;
      navigate(`/search/${input}`, {state: currentUserState });
      if (!historyList.includes(input)) {
        // history 배열에 넣기 (중복 아닐 때)
        setHistoryList([...historyList, input]);
        // 로컬스토리지 업데이트
        localStorage.setItem("history", JSON.stringify([...historyList, input]));
      }
      setInput("");
      setIsFocus(false);
    }
  };

  // 히스토리 삭제
  const onRemove = (target: string) => {
    const newHistoryList = historyList.filter((history) => history !== target);
    setHistoryList(newHistoryList);
    localStorage.setItem("history", JSON.stringify([...newHistoryList]));
  };

  // 드롭다운 히스토리 클릭 시 해당 유저 프로필 페이지로 이동, 드롭다운 사라짐
  const onClickHistory = (history: string) => {
    // getUser(history);
    userNameRef.current = input;
    navigate(`/search/${input}`, {state: currentUserState });
    setIsFocus(false);
  };

  return (
    <>
      <SearchContainer>
        <Title>깃헙 프로필 검색창</Title>
        <SearchBar onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            name="text"
            placeholder="깃헙 아이디를 입력해주세요"
            value={input}
            onChange={handleChange}
            onFocus={() => (setIsFocus(true))}
            autoComplete="off"
            />
          <SearchButton type="submit" value="검색" />
        </SearchBar>
        {isFocus && (
          <SearchHistories ref={historyRef}>
            {historyList.map((history) => (
              <DropdownList key={history}>
                <DropdownItem onClick={() => onClickHistory(history)}>
                  {history}
                </DropdownItem>
                <DeleteButton onClick={() => onRemove(history)}>
                  X
                </DeleteButton>
              </DropdownList>
            ))}
          </SearchHistories>
        )}
      </SearchContainer>
      <Outlet />
    </>
  );
}

export default SearchPage

// -------------------------- style --------------------------

const SearchContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 2rem;

  width: 50rem;
  margin-top: 10%;
  padding: 2rem;

  border-radius: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;

  width: 90%;
`;

const SearchInput = styled.input`
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  background-color: white;
  width: 70%;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.input`
  border: none;
  border-radius: 1rem;
  padding: 1rem;
`;

const SearchHistories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 2.5%;
  top: 87%;
  gap: 1rem;
  
  width: 45rem;
  padding: 0.5rem 1rem;
`;

const DropdownList = styled.ul`
  display: flex;

  width: 70%;

  > *:hover {
    color: white;
  }
`;

const DropdownItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 85%;
  padding: 1rem;
  margin: -0.5rem;
  
  background-color: rgba(181, 203, 255, 0.675);
  font-size: 1.4rem;
`;

const DeleteButton = styled.button`
  padding: 1rem;
  margin: -0.5rem;
  margin-left: 0.5rem;

  background-color: rgba(181, 203, 255, 0.675);
`;
