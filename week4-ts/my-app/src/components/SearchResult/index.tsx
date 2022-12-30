import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import UserCard from "./UserCard";
import NoResult from "./NoResult";
import useGetUser from "../../hooks/useGetUser";

function SearchResult() {
  const currentUserName = useParams().username || "";
  const currentUserState = useGetUser(currentUserName);
  console.log(currentUserName)
  console.log(currentUserState.user)

  // useEffect

  if (currentUserState.status === "loading") return <Loading />;
  if (currentUserState.status === "fail") return <NoResult />;
  if (currentUserState.user) return <UserCard user={currentUserState.user} />;
  return null;
}

export default SearchResult;
