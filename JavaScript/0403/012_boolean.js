let x = 5;
let y = 10;

console.log(x > y); // false

// true, false 값을 and, or 연산했을 경우
// 반환 값은 true, false
let a = true;
let b = false;

console.log(a && b); // false

// true, false가 아닌 값을 and, or 연산했을 경우
// 단락회로평가를 하게 된다.
let a2 = "hello";
let b2 = "";

console.log(a2 && b2); // ""

console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean([1, 2, 3])); // true
console.log(Boolean([])); // true
console.log(Boolean({ one: 10, two: 20 })); // true
console.log(Boolean({})); // true
console.log(Boolean(0)); // false
console.log(Boolean(-1)); //true
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

if (undefined) {
  console.log("hello");
}

let aa;
if (aa) {
  console.log("hello");
}

let aaa;
if (aaa > 100) {
  console.log("hello");
}
