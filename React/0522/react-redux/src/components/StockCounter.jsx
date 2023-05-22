import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sale, soldout } from "../modules/stockCounter";

export default function StockCounter() {
  // useSelector : store의 상태 조회 Hook
  const { stock, message } = useSelector((state) => ({
    stock: state.goodsReducer.stock,
    message: state.stockReducer.message,
  }));

  // useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 Hook
  const dispatch = useDispatch();

  const onSale = () => dispatch(sale());
  const onSoldout = () => dispatch(soldout());

  useEffect(() => {
    if (stock < 1) {
      onSoldout();
    } else {
      onSale();
    }
  }, [stock]);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
