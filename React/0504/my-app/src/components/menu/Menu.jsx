import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    // 문자열 값의 경우 {}를 생략할 수 있다.
    // 인라인 스타일의 우선 순위가 더 우선적
    <ul className="newClass" style={{ backgroundColor: "yellow" }}>
      <li>짜장면</li>
      <li>짬뽕</li>
    </ul>
  );
}
