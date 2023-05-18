import React from "react";
import { useMouseLocation } from "../hooks/useMouseLocation";

export default function TestBox() {
  const location = useMouseLocation();

  return (
    <div
      style={{
        height: 100,
        width: 100,
        backgroundColor: location.y > 200 ? "royalblue" : "gold",
      }}
    >
      TestBox
    </div>
  );
}
