import { useState, useEffect } from "react";

export function useScrollChecker() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // 30을 더해준 이유?
      // scrollTop과 innerHeight의 덧셈이 사용자의 화면에 따라 offsetHeight보다
      // 작을 수도 있기 때문에 임의의 값인 30을 더해준다.
      // 꼭 끝에 닿아야만 데이터를 로딩하는 것이 아니라 미리 로딩 시켜주기
      setIsBottom(
        Math.ceil(
          document.documentElement.scrollTop + window.innerHeight + 30
        ) >= document.documentElement.offsetHeight
      );
    });
  });

  return isBottom;
}
