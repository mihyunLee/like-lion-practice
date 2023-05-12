import React from "react";
import styled from "styled-components";

export default function App5() {
  // -- Button 커스텀하기
  const Button = styled.button`
    @font-face {
      font-family: "Pretendard-Regular";
      src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
        format("woff");
      font-weight: 400;
      font-style: normal;
    }

    border: none;
    background-color: #2c3e50;
    border-radius: 20px;
    padding: 10px 20px;
    margin: 0 5px;
    color: white;
    box-shadow: 1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15);
    font-family: "Pretendard-Regular";
    cursor: pointer;

    &:after {
      content: "🍜";
    }
    &:active {
      box-shadow: inset 2px 2px 5px 0 rgba(0, 0, 0, 0.3);
    }
  `;

  const Button2 = styled(Button)`
    background-color: #f39c12;

    &:after {
      content: "🍛";
    }
  `;

  const Button3 = styled(Button)`
    background-color: #e74c3c;

    &:after {
      content: "🍲";
    }
  `;
  return (
    <div>
      <Button>짜장면</Button>
      <Button2>카레라이스</Button2>
      <Button3>마라탕</Button3>
    </div>
  );
}
