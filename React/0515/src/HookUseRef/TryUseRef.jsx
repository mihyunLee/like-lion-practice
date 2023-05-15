import React, { useState, useRef } from "react";

function Counter2() {
  const [num, setNum] = useState(0);
  let num2 = 0;
  const num3 = useRef(0);

  return (
    <>
      {/* setState로 상태 변경 */}
      <button onClick={() => setNum(num + 1)}>버튼</button>
      <div>{num}</div>

      {/* 상수 값 */}
      <button
        onClick={() => {
          num2 += 1;
          console.log(num2);
        }}
      >
        버튼
      </button>
      <div>{num2}</div>

      {/* useRef */}
      <button
        onClick={() => {
          num3.current += 1;
          console.log(num3.current);
        }}
      >
        버튼
      </button>
      <div>{num3.current}</div>
    </>
  );
}

export default Counter2;
