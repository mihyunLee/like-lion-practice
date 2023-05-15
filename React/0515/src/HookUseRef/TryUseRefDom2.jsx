import React, { useState, useRef } from "react";

const TryUseRefDom2 = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값

  const emailInput = useRef(null);
  const pwInput = useRef(null);

  const inputCheck = (e) => {
    e.preventDefault();
    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} />
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        로그인
      </button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  );
};

export default TryUseRefDom2;
