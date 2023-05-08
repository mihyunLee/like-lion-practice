import React from "react";
import "./Button.css";

export default function Button({ id, isSelected, emotion, onClick }) {
  return (
    <button className={isSelected ? "active" : ""} onClick={() => onClick(id)}>
      기분이: {emotion}
    </button>
  );
}
