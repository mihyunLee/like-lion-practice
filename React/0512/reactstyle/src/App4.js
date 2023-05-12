import React from "react";
import styled, { css } from "styled-components";

// -- 컴포넌트 확장
const ContentOne = styled.div`
  margin: 40px;
`;

const ContentTwo = styled.div`
  color: red;
`;

const ContentThree = styled(ContentTwo)`
  border: 1px solid black;
`;

// -- Sass 문법 사용
const UniAfter = styled.div`
  &:after {
    content: "!!";
  }
`;

// -- CSS 확장
// css로 만들면 컴포넌트를 만드는 것은 아님!
const One = css`
  color: red;
`;

const Two = css`
  border: 1px solid black;
`;

const Three = styled.div`
  ${One}
  ${Two}
`;

function App() {
  return (
    <div>
      <Three>Lorem ipsum dolor</Three>
      <UniAfter>good</UniAfter>
      <ContentOne>hello world</ContentOne>
      <ContentTwo>hello world</ContentTwo>
      <ContentThree>hello world</ContentThree>
    </div>
  );
}

export default App;
