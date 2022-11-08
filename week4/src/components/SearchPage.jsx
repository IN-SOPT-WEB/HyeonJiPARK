import React from "react";
import styled from "styled-components";

export default function SearchPage() {
  return (
    <SearchContainer>
      <Title>깃헙 프로필 검색창</Title>
      <SearchBar className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          //   value={this.state.text}
          //   onChange={this.onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
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
  gap: 10px;

  width: 50%;
  height: 10%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 0.7;
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const SearchBar = styled.form``;
