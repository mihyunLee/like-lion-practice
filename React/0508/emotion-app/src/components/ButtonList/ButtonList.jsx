import React from "react";
import Button from "../Button/Button";
import "./ButtonList.css";

export default function ButtonList({ emotions, emotion, onClickEmotion }) {
  return (
    <ul>
      {emotions.map((emotionEl, idx) => (
        <li key={idx}>
          <Button
            id={idx}
            isSelected={emotion === emotionEl}
            emotion={emotionEl}
            onClick={onClickEmotion}
          />
        </li>
      ))}
    </ul>
  );
}
