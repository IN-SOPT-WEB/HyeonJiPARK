import React from 'react'
import styled from "styled-components";

function Loading() {
  return (
    <LoadingContainer>
      <img src="/assets/image/loading.gif" alt="로딩중" />
    </LoadingContainer>
  )
}

export default Loading

const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 200px 0px;

  & > img {
    width: 80px;
    margin: 0 auto;
  }
`