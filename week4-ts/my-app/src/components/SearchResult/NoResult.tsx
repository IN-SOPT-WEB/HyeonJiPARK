import React from 'react'
import styled from "styled-components";

function NoResult() {
  return (
    <NoResultContainer>
      <p>앗! 없는 유저에요!</p>
    </NoResultContainer>
  )
}

export default NoResult

const NoResultContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 200px 0px;

  & > p {
    margin: 0 auto;
  }
`