import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClickUp = () => {
    setCount((prev) => ++prev);
  };

  const handleClickDown = () => {
    setCount((prev) => --prev);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleClickUp}>
        +1
      </button>
      <button type="button" onClick={handleClickDown}>
        -1
      </button>
    </div>
  );
}
