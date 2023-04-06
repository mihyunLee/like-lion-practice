let x = 0;

while (x < 10) {
  console.log(x);
  x += 1;
}

let input;

do {
  input = prompt("숫자를 입력하세요");
} while (Number.isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");

let input2;

do {
  input2 = confirm("다음에도 저희와 함께 하시겠습니까?");
} while (!input2);

console.log("감사합니다.");

// 💡 문제: 구구단 구현하기
// for문
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// while문
let i = 2;
while (i < 10) {
  let j = 1;
  while (j < 10) {
    console.log(`${i} x ${j} = ${i * j}`);
    j++;
  }
  i++;
}

// 주의!!
// j를 초기화해주지 않으면 2단만 출력된다.
let i = 2;
let j = 1;
while (i < 10) {
  // let j = 1;
  // 여기서 j는 밑의 while문을 탈출한 이후, 계속 10으로 고정됨
  while (j < 10) {
    console.log(`${i} x ${j} = ${i * j}`);
    j++;
  }
  i++;
}

// 💡 문자열 뒤집기
// for문
let str = "hello world";
let result = "";

for (let i = 0; i < str.length; i++) {
  result = str[i] + result;
}

console.log(result);

// while문
result = "";
let count = 0;
while (count < str.length) {
  result = str[count] + result;
  count++;
}

console.log(result);

// 💡 팩토리얼
// for문
let s = 1;
let n = 5;

for (let i = 1; i < n; i++) {
  s *= i;
}

console.log(s);

// while문
let s2 = 1;
let i2 = 1;

while (i2 < 5) {
  s2 *= i2;
  i2++;
}

console.log(s2);
