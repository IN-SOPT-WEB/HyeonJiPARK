import React from "react";
import AsyncAwaitExample from "./components/AsyncAwaitExample";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="App">
      <AsyncAwaitExample />
      <SearchPage />
    </div>
  );
}

export default App;

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
