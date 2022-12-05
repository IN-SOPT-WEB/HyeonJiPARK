import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function UserPage() {
  const { username } = useParams();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  // 검색 input값 받아와서 해당 유저 정보 불러오기
  const getUser = async (username) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
        },
      }
    );
    setUsers(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getUser(username);
  }, [username]);

  return (
    <UserContainer>
      {loading ? (
        <LoadingImg src="./image/loading.gif" alt="로딩중" />
      ) : (
        <>
          <CloseBtn>
            <Link to="/search"> X </Link>
          </CloseBtn>
          <UserImage src={users.avatar_url} alt="프로필사진" />
          <UserName>{users.name}</UserName>
          <UserId>{users.login}</UserId>
          <UserLink
            type="button"
            onClick={() => {
              window.open(users.html_url);
            }}
          >
            {console.log(users.html_url)}
            깃허브 구경가기
          </UserLink>
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

const LoadingImg = styled.div``;

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

const UserLink = styled.button`
  padding: 10px 30px;
  font-size: 1rem;
  background-color: white;
  border: solid 1px #66abfd;
  border-radius: 20px;
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
  background-color: rgba(152, 215, 255, 0.3);
  border: solid 1px #75c9f8;
  border-radius: 10px;
`;
