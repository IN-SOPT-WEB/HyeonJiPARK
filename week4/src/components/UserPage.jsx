import React from "react";
import styled from "styled-components";

export default function UserPage() {
  return <UserContainer></UserContainer>;
}

const UserContainer = styled.article`
  position: fixed;
  top: 35%;
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
