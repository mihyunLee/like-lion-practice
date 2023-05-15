import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count !== 0) {
      if (count % 2 === 0) {
        alert("홀수입니다");
      } else {
        alert("짝수입니다");
      }
    }

    return () => {
      alert("cleanup 실행!");
    };
  });

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}

export default Counter;
