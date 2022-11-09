import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function UserPage() {
  const { username } = useParams();

  const getUser = async (username) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    console.log("data", response.data);
  };

  useEffect(() => {
    getUser(username);
  }, []);

  console.log(username);
  return <UserContainer>ddsfsfds</UserContainer>;
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
