import React from "react";
import { Link } from "react-router-dom";

export default function ProductDetail() {
  return (
    <>
      <h1>상품 상세정보</h1>
      <Link to="notice">상품 공지사항</Link>
      <Link to="/">홈으로 가기</Link>
    </>
  );
}
