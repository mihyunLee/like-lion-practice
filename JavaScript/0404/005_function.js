// 파선아실
// 파라미터 선언 아규먼트 실제 사용
// 함수의 일반적인 형태
// 1. 재사용성 증가
// 2. 유지보수 용이
// 3. 구조 파악 용이

function one(a, b) {
  // a, b는 파라미터
  let z = a + b;
  return z ** 2;
}

console.log(one(7, 3)); // 7,3 은 아규먼트
console.log(one(7, 3)); // 함수는 재사용 할 수 있다.

// 화살표 함수(arrow function)
const two = (a, b) => (a + b) ** 2;
console.log(two(7, 3));

// 이름 없이 선언하는 함수
const three = function (a, b) {
  let z = a + b;
  return z ** 2;
};

console.log(three(7, 3));

// 콜백 함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function four(a, b, c) {
  let z = c(a, b) + c(a, b);
  return z * 2;
}

four(7, 3, one); // 7, 3, one은 아규먼트

// 아래와 같이 외부에서 직접 값을 가져오는 경우
// 함수의 순수성, 순수함수의 장점을 살릴 수 없기 때문에 지양하자.
function five(a, b, c) {
  let z = one(a, b) + one(a, b);
  return z * 2;
}

five(7, 3, one);

// 💡 return, console.log 비교하기

function hello(para) {
  console.log(para);
  console.log("hello");
  return 100;
}

console.log(hello(10));
// 10
// hello
// 100

// 💡 함수 vs. 메서드
// 메서드 - 클래스 안에 들어가 있는 함수
// .을 찍어 접근할 수 있는 함수 => 메서드

// 함수를 호출할 수 있는 이름은 결국 변수이다.
let x = console.log;
x("hello"); // hello

// 💡 함수에서 return이 없다면 return undefined가 생략되어 있는 것
// 아래의 코드는 모두 같은 코드이다.
function hello1() {
  console.log("hi");
}

function hello2() {
  console.log("hi");
  return;
}

function hello3() {
  console.log("hi");
  return undefined;
}

let a = hello1();
let b = hello2();
let c = hello3();
console.log(a, b, c); // undefined undefined undefined

// 💡 함수의 return
// return 문 이후의 코드는 실행되지 않는다.
function hello4() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  return;
  console.log("hello");
  console.log("hello");
  console.log("hello");
}
hello4();
/*
hello
hello
hello
*/

function hello5() {
  if (true) {
    if (false) {
      if (true) {
        return;
      }
    }
  }
  console.log("hello");
}

hello5(); // hello

// ⚠️ forEach 같은 반복문은 return 이후에 바로 중단되지 않는다.
// return을 하더라도 안의 callback 함수의 1회 반복만 종료되고, 전체 반복(forEach)이 종료되지는 않는다.
const y = [10, 20, 30, 40];
y.forEach((el) => {
  console.log(el);
  return;
  console.log("world");
});

// 💡 함수의 초깃값
function 함수(a = 10, b = 20, c = 30) {
  return a + b + c;
}
console.log(함수(1, 1)); // 32, a와 b에 1이 들어간다.

// ⚠️ 아래와 같이 작성할 경우, 함수의 위치를 모른다면 매개변수가 무엇인지
// 알기 어려운 식별 이슈가 발생할 수 있다.
function runPython(user, time, code, lv) {}

runPython("김멋사", 100, "function...", 3);

// ✨ JS 디자인 패턴 - roro 기법
// object를 아규먼트로 넘긴다.
// 기본값을 설정할 수도 있다.
function runPython({ user = "", time = 0, code = "", lv = 0 }) {}

runPython({
  user: "김멋사",
  time: 100,
  code: "function...",
  lv: 3,
});

// 💡 화살표 함수(arrow function)
// reference: https://ko.javascript.info/arrow-functions-basics

function 함수1(x, y) {
  return x + y;
}
// 위 함수를 화살표 함수로 작성하기
let 함수2 = (x, y) => x + y;

// 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있다.
let 함수3 = (x) => x + 10;

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략할 수 있다.
let 함수4 = (x) => x + 10;

let 결과 = 함수4(2);

console.log(결과);
