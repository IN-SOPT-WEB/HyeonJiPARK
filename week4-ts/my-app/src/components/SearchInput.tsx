import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserAPI } from "../lib/api";
import { User } from "../types";
import SearchPage from "./SearchPage";

export interface UserStateInterface {
  status: "waiting" | "loading" | "success" | "fail";
  user: User | null;
}

export default function SearchInput() {
  const [userState, setUserState] = useState<UserStateInterface>({
    status: "waiting",
    user: null,
  });
  const navigate = useNavigate();

  // 검색 input값 받아와서 해당 유저 정보 불러오기
  const getUser = async (username: string) => {
    setUserState({ ...userState, status: "loading" });
    try {
      const data = await getUserAPI(username);
      console.log("result: " , data);
      setUserState({ status: "success", user: data });
      navigate(`/search/${username}`, {state: userState});
      // console.log(userState);
    } catch (error) {
      setUserState({ status: "fail", user: null });
      console.error(error);
    }
  };

  return (
      <SearchPage getUser={getUser} />
      )
    };