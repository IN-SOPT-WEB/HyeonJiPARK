import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import UserPage from "./components/UserPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:username" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
