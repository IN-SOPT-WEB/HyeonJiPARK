import axios from "axios";
import { User } from "../types";

const client = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

// 명시적으로 적으려면 비동기 함수에서는 async (username: string): Promise<User> 와 같이 작성
export const getUserAPI = async (username: string) => {
  const { data } = await client.get<User>(username);
  return data;
};
