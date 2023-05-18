import React from "react";
import TestBox from "./components/TestBox";
import { useMouseLocation } from "./hooks/useMouseLocation";

// 커스텀 훅 연습
function App() {
  const location = useMouseLocation();
  return (
    <div>
      hello world
      <TestBox />
      <div>
        x축 위치: {location.x}, y축 위치: {location.y}
      </div>
    </div>
  );
}
export default App;
