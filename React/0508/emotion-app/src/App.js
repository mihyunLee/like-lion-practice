import { React, useState } from "react";
import ButtonList from "./components/ButtonList/ButtonList";
import Display from "./components/Display/Display";

function App() {
  const emotions = [
    "좋아요! 😀",
    "정말 좋아요! 🤭",
    "최고에요! 😄",
    "미쳤어요!! 🤪",
  ];

  const [selectedEmotion, setSelectedEmotion] = useState("");

  const handleClickBtns = (clickedId) => {
    setSelectedEmotion(emotions[clickedId]);
  };

  return (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <h1>오늘의 기분을 선택해주세요 😄</h1>
      <ButtonList
        emotions={emotions}
        emotion={selectedEmotion}
        onClickEmotion={handleClickBtns}
      />
      <Display message={selectedEmotion} />
    </div>
  );
}
export default App;
