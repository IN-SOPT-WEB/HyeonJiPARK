import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import SearchResult from "./components/SearchResult/index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchPage />}>
          <Route path=":username" element={<SearchResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
