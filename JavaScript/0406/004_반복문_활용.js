// 💡 배열의 모든 요소를 출력하는 방법
let arr1 = [10, 20, 30, 40, 50];
let obj1 = { one: 10, two: 20 };

// [1] 기본 문법
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// 💡 airbnb 컨벤션에 권장
// [2] for...in
// 배열, 객체를 순회할 때 사용
// IE에서도 사용 가능

// 배열에서의 i는 인덱스를 가져온다.
for (const i in arr1) {
  console.log(arr1[i]); // 10 20 30 40 50
}

// 객체에서의 i는 key 값을 가져온다.
for (const i in obj1) {
  console.log(obj1[i]); // 10 20
}

// 0부터 100까지 덧셈
let s = 0;
for (const i in ".".repeat(101)) {
  s += parseInt(i);
}
console.log(s); // 5050

// [3] for...of
// IE에서는 사용 불가
// of 뒤에는 iterable한 값이 와야한다.
let arr2 = [10, 20, 30, 40, 50];
let obj2 = { one: 10, two: 20 };

// for...of 에서의 i는 해당 값을 가져온다.
for (const i of arr2) {
  console.log(i); // 10 20 30 40 50
}

for (const item of "hello world") {
  console.log(item);
}

// 💡 문제
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20];

// 에러는 발생하지 않지만, 배열의 범위를 넘어가는 인덱스가 나오기 때문에
// 의도한대로 동작하지 않는다.
for (let i = 0; i < s.length; i++) {
  console.log(s[i], s[i + 1]);
}

// 방법 1) 배열.length - 1
for (let i = 0; i < s.length - 1; i++) {
  console.log(s[i], s[i + 1]);
}

// 방법 2) start 지점과 출력되는 인덱스 수정
for (let i = 1; i < s.length; i++) {
  console.log(s[i - 1], s[i]);
}

// ✅ for..in 문으로도 풀어보자
for (const i in s) {
  // for...in문의 i는 문자열이기 때문에 parseInt를 해주어야 한다.
  console.log(s[i], s[parseInt(i) + 1]);
}

// 💡 문제
// 다음 수학 점수의 평균을 구하세요.
const 수학점수 = [10, 99, 89, 70, 55, 40];
let 합 = 0;

for (const 점수 of 수학점수) {
  합 += 점수;
}

console.log((합 / 수학점수.length).toFixed(2));

// 💡 문제
// 다음 user의 나이 평균을 구하세요

let user = [
  {
    _id: "642e3071c61a23c70ae6076b",
    index: 0,
    age: 31,
    name: "Hicks Garza",
    gender: "male",
  },
  {
    _id: "642e3071ecd6f90a87d64731",
    index: 1,
    age: 32,
    name: "Ayers Harrington",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    age: 39,
    name: "Lamb Adams",
    gender: "male",
  },
];

// 방법1) for문
let sum = 0;

for (let i = 0; i < user.length; i++) {
  sum += user[i].age;
}

console.log((sum / user.length).toFixed(2));

// 방법2) for...in문
sum = 0;
for (const item in user) {
  sum += user[item]["age"];
}

console.log((sum / user.length).toFixed(2));

// 방법3) for...of문
sum = 0;
for (const item of user) {
  sum += item.age;
}

console.log((sum / user.length).toFixed(2));

// 💡 견고한 코드 작성하기
// 1. age가 문자였다면?
// 2. age가 입력되지 않았다면?
// 3. age 필드가 없다면? (MongoDB의 경우)

let user2 = [
  {
    _id: "642e3071c61a23c70ae6076b",
    index: 0,
    age: 31,
    name: "Hicks Garza",
    gender: "male",
  },
  {
    _id: "642e3071ecd6f90a87d64731",
    index: 1,
    age: 32,
    name: "Ayers Harrington",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    age: 39,
    name: "Lamb Adams",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    name: "Lamb Adams",
    gender: "male",
  },
];

// ✅ ??(nullish 병합 연산자) 사용하기
let s2 = 0;
for (const i of user2) {
  console.log(i);
  console.log(i.age);
  console.log(s2);
  console.log("----------");
  s2 += i.age ?? 0; // age가 null이나 undefined라면 0을 넣어주겠다.
}
console.log((s2 / user2.length).toFixed(2));

// ✅ !!(논리 부정 연산자) 사용하기
s2 = 0;
for (const i of user2.map((v) => v.age)) {
  // !!0 , !!'', !!NaN, !!null, !!undefined - false
  if (!!i) {
    s += i;
  }
}

// ✅ 고차함수 사용하기
// user2
//   .map((v) => v.age)
//   .filter((v) => !!v)
//   .reduce((a, v) => a + v, 0);

console.log((s / user.length).toFixed(2));
