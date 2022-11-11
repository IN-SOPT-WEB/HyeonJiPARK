import React from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SearchPage() {
  const [username, setUsername] = useState(""); // input 값
  const [focus, setFocus] = useState(false); // input 포커싱 상태
  let [history, setHistory] = useState([]); // 검색 히스토리를 저장할 배열
  const historyStorage = localStorage.getItem("history"); // 히스토리 로컬스토리지 저장소
  const navigate = useNavigate(); // 검색결과 페이지 이동을 위한 navigate

  // 히스토리 로컬스토리지 저장
  const setLocalStorage = () => {
    localStorage.setItem("history", JSON.stringify(history));
  };

  // 검색 시 해당 유저 프로필 페이지로 이동
  const searchUsers = (username) => {
    navigate(`/search/${username}`);
  };

  // input창 텍스트 보여주기
  const handleChange = (e) => setUsername(e.target.value);

  // 검색 클릭 시 history 배열에 넣고 로컬스토리지에 저장
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "") {
      alert("아이디를 입력하세요");
    } else {
      searchUsers(username);
      // history 배열에 넣기 (중복 아닐 때)
      if (!history.includes(username)) {
        history.push(username);
      }
      // 로컬스토리지 업데이트
      setLocalStorage();
      setUsername("");
      setFocus(false);
    }
  };

  // 히스토리가 새로고침해도 남아있게 하기 위해서 init
  const initHistory = () => {
    if (historyStorage != null) {
      history = JSON.parse(historyStorage);
    }
  };

  // 히스토리 삭제
  const onClickDelete = (_history) => {
    const num = history.indexOf(_history);
    setHistory(history.splice(num, 1));
    setLocalStorage();
  };

  // input 포커스 될 때 드롭다운 나타남
  const onFocusInput = () => {
    setFocus(true);
  };

  // 포커스 아웃 시 드롭다운 없어짐 (미완성,,,)
  const onFocusOut = (e) => {
    // if ()
    // setFocus(false);
  };

  // 드롭다운 히스토리 클릭 시 해당 유저 프로필 페이지로 이동, 드롭다운 사라짐
  const onClickHistory = (_history) => {
    navigate(`/search/${_history}`);
    setFocus(false);
  };

  return (
    <Container onClick={onFocusOut}>
      <SearchContainer>
        {initHistory()}
        <Title>깃헙 프로필 검색창</Title>
        <SearchBar onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            name="text"
            placeholder="깃헙 아이디를 입력해주세요"
            value={username}
            onChange={handleChange}
            onFocus={onFocusInput}
            autocomplete="false"
          />
          <SearchButton type="submit" value="검색" />
        </SearchBar>
        {focus && (
          <SearchHistories>
            {history.map((_history) => (
              <DropdownList>
                <SearchHistory onClick={() => onClickHistory(_history)}>
                  {_history}
                </SearchHistory>
                <DeleteButton onClick={() => onClickDelete(_history)}>
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
  gap: 20px;

  margin-top: 10%;
  padding: 20px;
  width: 500px;
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
  width: 450px;
  left: 35%;
  top: 18%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  gap: 10px;
  padding: 5px 10px;
`;

const DropdownList = styled.div`
  width: 70%;
  display: flex;
  > *:hover {
    color: white;
  }
`;

const SearchHistory = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 85%;
  padding: 10px;
  margin: -5px;
  background-color: rgba(181, 203, 255, 0.675);
`;

const DeleteButton = styled.button`
  background-color: rgba(181, 203, 255, 0.675);
  padding: 10px;
  margin: -5px;
  margin-left: 5px;
`;
