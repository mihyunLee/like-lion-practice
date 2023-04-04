const x = 10;
const y = 20;

console.log("x 값은 10이고, y값은 20이고 두 개를 곱한 값은 200입니다.");
console.log(
  "x 값은 ",
  x,
  "이고, y값은 ",
  y,
  "이고 두 개를 곱한 값은 ",
  x * y,
  "입니다."
);

// [!] 템플릿 리터럴 중괄호 안에 연산을 넣는 것은 권장되지 않는다.
console.log(
  `x 값은 ${x}이고, y값은 ${y}이고 두 개를 곱한 값은 ${x * y}입니다.`
);

// [i] 연산 결과를 변수에 저장하여 사용하자.
let x2 = 10;
let y2 = 20;
let result = 200;
console.log(
  `x 값은 ${x2}이고, y값은 ${y2}이고 두 개를 곱한 값은 ${result}입니다.`
);

const s = "hello";
const ss = "world";
const result2 = s + "\n" + ss;
console.log(result2);
console.log(`hello
world`);

// 템플릿 리터럴의 단점
// 템플릿 리터럴 내에서 개행을 맞추게 되면 원치 않은 결과값이 나온다.
if (true) {
  if (true) {
    if (true) {
      console.log(`h
			e
			l
			l
			o`);
    }
  }
}
/*
h
			e
			l
			l
			o
*/
