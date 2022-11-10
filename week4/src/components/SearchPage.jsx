import React from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SearchPage() {
  let [history, setHistory] = useState([]); // 검색 히스토리를 저장할 객체
  const historyStorage = localStorage.getItem("history"); // 히스토리 로컬스토리지 저장소

  // 히스토리 로컬스토리지 저장
  const setLocalStorage = () => {
    localStorage.setItem("history", JSON.stringify(history));
  };

  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const searchUsers = (username) => {
    navigate(`/search/${username}`);
  };

  const handleChange = (e) => setUsername(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "") {
      console.log("아이디를 입력하세요");
    } else {
      searchUsers(username);
      // history 배열에 넣기 (중복 아닐 때)
      if (!history.includes(username)) {
        history.push(username);
      }
      // 로컬스토리지 업데이트
      setLocalStorage();
      setUsername("");
    }
  };

  // 히스토리가 새로고침해도 남아있게 하기 위해서 init
  const initHistory = () => {
    if (historyStorage != null) {
      history = JSON.parse(historyStorage);
    }
  };

  const setDropdown = () => {
    const curHistory = JSON.parse(historyStorage);
    curHistory.forEach((_curhistory) => {});
  };

  const onClickDelete = (_history) => {
    const num = history.indexOf(_history);

    setHistory(history.splice(num, 1));
    setLocalStorage();
  };
  return (
    <>
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
          />
          <SearchButton type="submit" value="검색" />
        </SearchBar>
        <SearchHistories>
          {history.map((_history) => (
            <SearchHistory>
              {_history}
              <DeleteButton onClick={() => onClickDelete(_history)}>
                X
              </DeleteButton>
            </SearchHistory>
          ))}
        </SearchHistories>
      </SearchContainer>
      <Outlet />
    </>
  );
}

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
`;

const SearchButton = styled.input`
  border: none;
  border-radius: 10px;
  padding: 10px;
`;

const SearchHistories = styled.div`
  /* width: 100px;
  height: 30px; */
  width: 70%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  gap: 10px;

  padding: 5px 10px;

  background-color: blue;
`;

const SearchHistory = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 0, 255, 0.8);
`;

const DeleteButton = styled.button``;
