import React, { useState } from "react";

export default function Resume(props) {
  const textColor = { color: props.color };

  // let like = 0;
  const [like, setLike] = useState(0);

  function clickLike() {
    // like += 1;
    setLike((el) => el + 1);
    console.log(like);
  }

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>{props.name} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <h2>취미 : {props.hobby}</h2>
      <h2>좋아하는 음식 : {props.food}</h2>
      <h2>
        좋아하는 색 : <span style={textColor}>{props.color}</span>
      </h2>
      <button onClick={clickLike}>
        like <span>{like}</span>
      </button>
    </div>
  );
}
