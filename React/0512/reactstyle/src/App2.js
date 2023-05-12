import React from "react";
import styled from "styled-components";
import Hello from "./Components/Hello";

const ContentDiv = styled.div`
  margin: 40px;
`;

// Hello에도 ContentH2가 있지만 styled-components는
// 클래스명에 난수를 생성하여 적용하기 때문에
// 다른 파일에 동일한 이름이 사용되어도 중복되지 않는다.
const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  color: red;
`;

const App = () => {
  return (
    <ContentDiv>
      <ContentH2>Q&A</ContentH2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
      <Hello />
    </ContentDiv>
  );
};

export default App;
