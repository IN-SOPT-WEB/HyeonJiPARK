import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { User } from "../../types";

interface UserProps {
  user: User;
}

function UserCard({ user }: UserProps) {
  const { avatar_url, name, login, html_url, public_repos, followers, following } = user;
    return (
        <UserContainer>
        <CloseBtn>
          <Link to="/search"> X </Link>
        </CloseBtn>
        <UserImage src={avatar_url} alt="프로필사진" />
        <UserName>{name}</UserName>
        <UserId>{login}</UserId>
        <UserLink
          type="button"
          onClick={() => {
            window.open(html_url);
          }}
        >
          깃허브 구경가기
        </UserLink>
        <UserInfoContainer>
          <UserInfo>
            <h1>{public_repos}</h1>
            <p>Repos</p>
          </UserInfo>
          <UserInfo>
            <h1>{followers}</h1>
            <p>Followers</p>
          </UserInfo>
          <UserInfo>
            <h1>{following}</h1>
            <p>Following</p>
          </UserInfo>
        </UserInfoContainer>
      </UserContainer>
    );
}

export default UserCard;

const UserContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  margin-top: 5%;
  padding: 1rem;
  border-radius: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
`;

const CloseBtn = styled.button`
  font-size: 1.3rem;
  margin-left: auto;
`;

const UserImage = styled.img`
  width: 20rem;
  border-radius: 10rem;
`;

const UserName = styled.h1`
  font-size: 2rem;
`;

const UserId = styled.h2`
  font-size: 1.6rem;
  color: gray;
`;

const UserLink = styled.button`
  padding: 1rem 3rem;
  font-size: 1.4rem;
  background-color: white;
  border: solid 0.1rem #66abfd;
  border-radius: 2rem;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  width: 80%;
  gap: 2rem;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  width: 30%;
  padding: 2rem;
  
  background-color: rgba(152, 215, 255, 0.3);
  border: solid 0.1rem #75c9f8;
  border-radius: 1rem;

  > h1 {
    font-size: 1.8rem;
  }
  > p {
    font-size: 1.4rem;
  }
`;
