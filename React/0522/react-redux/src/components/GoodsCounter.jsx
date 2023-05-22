import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, substractNumber } from "../modules/goodsCounter";

export default function GoodsCounter() {
  // useSelector : store의 상태 조회 Hook
  const { stock, goods } = useSelector((state) => ({
    stock: state.goodsReducer.stock,
    goods: state.goodsReducer.goods,
  }));

  // useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 Hook
  const dispatch = useDispatch();

  const onAddNumber = () => dispatch(addNumber());
  const onSubstractNumber = () => dispatch(substractNumber());

  const minusRef = useRef();
  const plusRef = useRef();

  useEffect(() => {
    if (goods === 0) {
      minusRef.current.disabled = true;
    } else {
      minusRef.current.disabled = false;
    }

    if (stock === 0) {
      plusRef.current.disabled = true;
    } else {
      plusRef.current.disabled = false;
    }
  }, [goods, stock]);

  return (
    <div>
      <h2>딥러닝 개발자 무릎 담요</h2>
      <span>
        <strong>17,500</strong>원
      </span>
      <div>
        <button type="button" ref={minusRef} onClick={onSubstractNumber}>
          MINUS
        </button>
        <span>{goods}</span>
        <button type="button" ref={plusRef} onClick={onAddNumber}>
          PLUS
        </button>
      </div>
      <div>
        총 수량 <strong>{goods}</strong>
      </div>
      <div>
        <strong>{goods * 17500}</strong>원
      </div>
      <div>
        재고 <strong>{stock}</strong>
      </div>
    </div>
  );
}
