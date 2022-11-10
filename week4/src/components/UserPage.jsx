import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function UserPage({ name, avatar_url, followers, following }) {
  const { username } = useParams();

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUser = async (username) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
      //   `https://api.github.com/users/iamphj3`
    );
    console.log("data", response.data);
    setUsers(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getUser(username);
  }, []);

  return (
    <UserContainer>
      {loading ? (
        <>로딩중..</>
      ) : (
        <>
          <CloseBtn>X</CloseBtn>
          <UserImage src={users.avatar_url} alt={avatar_url} />
          <UserName>{users.name}</UserName>
          <UserId>{users.login}</UserId>
          <UserInfoContainer>
            <UserInfo>
              <h1>{users.public_repos}</h1>
              <p>Repos</p>
            </UserInfo>
            <UserInfo>
              <h1>{users.followers}</h1>
              <p>Followers</p>
            </UserInfo>
            <UserInfo>
              <h1>{users.following}</h1>
              <p>Following</p>
            </UserInfo>
          </UserInfoContainer>
        </>
      )}
    </UserContainer>
  );
}

const UserContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin-top: 5%;
  padding: 10px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.9);
`;

const CloseBtn = styled.button`
  font-size: 1.3rem;
  margin-left: auto;
`;

const UserImage = styled.img`
  width: 200px;
  border-radius: 100px;
`;

const UserName = styled.h1`
  font-size: 1.8rem;
`;

const UserId = styled.h2`
  font-size: 1.2rem;
  color: gray;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 80%;
  gap: 20px;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  width: 30%;
  background-color: rgba(130, 130, 130, 0.3);
  border: solid 1px darkgray;
  border-radius: 10px;
`;
