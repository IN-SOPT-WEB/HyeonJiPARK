import React from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SearchPage() {
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
      setUsername("");
    }
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
            value={username}
            onChange={handleChange}
          />
          <SearchButton type="submit" value="검색" />
        </SearchBar>
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
