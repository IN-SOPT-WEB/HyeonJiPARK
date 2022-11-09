import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function SearchPage() {
  const [text, setText] = useState("");

  const searchUsers = async (text) => {
    const response = await axios.get(`https://api.github.com/users/${text}`);
    console.log("data", response.data);
  };

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      console.log("아이디를 입력하세요");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <SearchContainer>
      <Title>깃헙 프로필 검색창</Title>
      <SearchBar onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="text"
          placeholder="깃헙 아이디를 입력해주세요"
          value={text}
          onChange={handleChange}
        />
        <SearchButton type="submit" value="검색" />
      </SearchBar>
    </SearchContainer>
  );
}

const SearchContainer = styled.header`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding: 20px;
  width: 50%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 0.7;
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
