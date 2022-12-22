import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult/index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchInput />}>
          <Route path=":username" element={<SearchResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
