import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getUserAPI } from "../lib/api";
import { User } from "../types";
import SearchPage from "./SearchPage";

export interface UserStateInfo {
  status: "waiting" | "loading" | "success" | "fail";
  user: User | null;
}

function SearchInput() {
  const [userState, setUserState] = useState<UserStateInfo>({
    status: "waiting",
    user: null,
  });
  const usernameRef = useRef("");
  const navigate = useNavigate();
  
  useEffect (() => {
    navigate(`/search/${usernameRef.current}`, {state: userState})
  }, [userState]);

  // 검색 input값 받아와서 해당 유저 정보 불러오기
  const getUser = async (username: string) => {
    usernameRef.current = username;
    setUserState({ ...userState, status: "loading" });
    try {
      const data = await getUserAPI(username);
      setUserState({ status: "success", user: data });
      navigate(`/search/${username}`, {state: userState });
    } catch (error) {
      setUserState({ status: "fail", user: null });
      console.error(error);
    }
  };

  return (
    // <SearchPage getUser={getUser} />
    <SearchPage />
  )
};

export default SearchInput