import React from "react";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <>
      <h1>마이 페이지</h1>
      <Link to="coupon">쿠폰</Link>
      <Link to="question">Q&A</Link>
      <Link to="notice">공지사항</Link>
      <Link to="/">홈으로 가기</Link>
    </>
  );
}
