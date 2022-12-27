import React from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";
import UserCard from "./UserCard";
import NoResult from "./NoResult";
import { UserStateInterface } from "../SearchInput";

interface UserStateLocation {
  state: UserStateInterface;
}

function SearchResult() {
  const { state } = useLocation() as UserStateLocation;

  if (state.status === "loading") return <Loading />;
  if (state.status === "fail") return <NoResult />;
  if (state.user) return <UserCard user={state.user} />;
  
  return <div />;
}

export default SearchResult;
