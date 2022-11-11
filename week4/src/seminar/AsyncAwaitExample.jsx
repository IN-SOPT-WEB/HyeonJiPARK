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

// App.jsx
// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SearchPage from "./components/SearchPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <SearchPage />
//         {/* <Route path="/main" element={<SearchPage />} />
//         <Route path="/search" element={<SearchPage />} />
//         <Route path="/*" element={<SearchPage />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }
