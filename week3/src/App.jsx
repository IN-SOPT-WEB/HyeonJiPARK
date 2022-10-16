// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import Header from './components/Header';
// import Nav from './components/Nav';
import styled from 'styled-components'
// import "./App.css";

function App() {
//   const [count, setCount] = useState(0);

// useEffect(() => {
//   document.title=`${count} 세는 중`;

//   return () => {
//     document.title="원상복구";
//   };

// }, [count])

  return (
    <div className="App">
      {/* <Header data="1"/>
      <Header data="2"/>
      <Header data="3"/>
      <Header data="4"/>
      <Nav /> */}
      {/* <button onClick={() => setCount(count+1)}>
        count is {count}
      </button> */}
      <Title>Hello</Title>
    </div>
  );
}

export default App;

const Title = styled.h1`
  color: red;

`;