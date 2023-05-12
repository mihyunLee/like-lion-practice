import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  /* styled-components에 전달된 props를 가져와 사용할 수 있다 */
  color: ${(props) => (props.name === "hello" ? "red" : "black")};
  /* color: ${({ name }) =>
    name === "hello" ? "red" : "black"}; // 구조분해할당도 사용 가능! */
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const App = () => {
  return (
    <ContentDiv>
      <ContentH2 name="hello">Q&A</ContentH2>
      <ContentH2 name="hi">Q&A</ContentH2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
    </ContentDiv>
  );
};

export default App;
