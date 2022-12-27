import React from 'react';
// import Header from './components/Header';
// import Content from './components/Content';
import styled from "styled-components";

function App() {
  return (
    <Container>
      {/* <Header />
      <Content /> */}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Galmuri9';
  background-color: #EFF6FF;
`