import React, { useState } from "react";

const TryUseRefDom1 = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값

  const inputCheck = (e) => {
    e.preventDefault();
    console.log(document.querySelectorAll("input"));
    setEmailValue(document.querySelectorAll("input")[0].value);
    setPwValue(document.querySelectorAll("input")[1].value);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" />
      </label>
      <label>
        비밀번호 : <input type="password" />
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        로그인
      </button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  );
};

export default TryUseRefDom1;
