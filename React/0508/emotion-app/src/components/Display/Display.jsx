import React from "react";
import "./Display.css";

export default function Display({ message }) {
  return (
    <div className="display">
      <h2>{"기분이" + message || "기분을 선택해주세요 :D"}</h2>
    </div>
  );
}
