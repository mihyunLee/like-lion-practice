import React from "react";
import styles from "./Question.module.css"; // module을 가져올 때는 styles로 가져와야한다.

const Question = () => {
  return (
    <div className={styles.box}>
      <h2 className={styles.text}>Q&A</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
    </div>
  );
};

export default Question;
