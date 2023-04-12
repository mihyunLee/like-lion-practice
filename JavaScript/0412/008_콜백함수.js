// ✅ 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function 가장작은값에두배(a, b) {
  // b에 Math.min이 전달되었으므로
  // Math.min은 현재 콜백함수
  let result = b(...a) * 2;
  console.log(result);
  return result;
}

가장작은값에두배([10, 20, 11, 21, 19, 17], Math.min);

let arr = [10, 20, 11, 21, 19, 17];
arr.map((v, i) => v * 2);

// 아래와 같이 했을 경우에는 함수의 순수성, 순수함수의 장점을 살릴 수 없습니다.
// 외부에서 직접 값을 가져오는 것을 지양해주세요.
// function four(a, b, c) {
//   let z = one(a, b) + one(a, b);
//   return z * 2;
// }

// four(7, 3, one);
