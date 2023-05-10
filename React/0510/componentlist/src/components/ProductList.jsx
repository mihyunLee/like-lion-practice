import React, { useState } from "react";

export default function ProductList() {
  const productList = {
    products: [
      {
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101,
      },
      {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102,
      },
      {
        title: "우당탕탕 라이켓의 실험실 스티커북",
        price: 29000,
        id: 103,
      },
      {
        title: "버그를 Java라 버그잡는 개리씨 키링",
        price: 29000,
        id: 104,
      },
    ],
  };

  const [items, setItems] = useState(productList.products);

  const handleDeleteItem = (targetId) => {
    setItems(items.filter((el) => el.id !== targetId));
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item, idx) => {
        return (
          <li key={item.id}>
            <h3>
              {idx + 1} {item.title}
            </h3>
            <span>{item.price}원</span>
            <button onClick={() => handleDeleteItem(item.id)}>삭제</button>
            {/* Virtual DOM을 사용하지 않아 리액트의 의도와 맞지 않는 코드 */}
            {/* <button
              onClick={(event) => {
                event.target.closest("li").remove();
              }}
            >
              삭제
            </button> */}
          </li>
        );
      })}
    </ul>
  );
}
