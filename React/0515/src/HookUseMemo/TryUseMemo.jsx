import { useState, useMemo } from "react";

function 부하() {
  // 실행이 오래걸리는 함수
  console.log("계산중");
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  console.log("계산끝");
  return s;
}

function TryUseMemo() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  // 부하 함수의 리턴값은 고정값이므로 useMemo를 통해 저장해두었다가 사용한다.
  // 부하 함수의 계산중, 계산끝 콘솔 출력이 처음에 한번만 발생한다.
  // 만약 defendency array에 count를 넣으면 count 값이 변경될 때마다 계산(부하 함수)이 다시 실행된다.
  let result = useMemo(부하, []);

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  console.log("랜더링!!");

  // 평소에는 memo 되어있는 걸 가져다 쓰고
  // countTwo가 바뀌었을 때 부하 함수를 실행시키는 메모
  const result2 = useMemo(() => {
    return 부하();
  }, [countTwo]);

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
      <h1>계산 결과 : {result2}</h1>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
    </div>
  );
}
export default TryUseMemo;
