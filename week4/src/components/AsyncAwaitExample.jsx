import axios from "axios";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    getGithubProfile();
  }, []);
  return <div></div>;
}

async function getGithubProfile() {
  const response = await axios.get("https://api.github.com/users/iamphj3");
  console.log("data", response.data);
}
