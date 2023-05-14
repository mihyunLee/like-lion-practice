import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>홈</h1>
      <Link to="/cart">장바구니</Link>
      <Link to="/users">마이페이지</Link>
      <Link to="/products/1">상품 상세정보</Link>
    </>
  );
}
