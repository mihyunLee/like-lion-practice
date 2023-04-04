// 💡 배열 메서드 - filter()
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 매개 변수로 자주 쓰이는 것 - v: value, i: index, el: elements, item

// arr에서 짝수만 반환
arr.filter(function (el) {
  return el % 2 === 0;
});

// arr에서 홀수만 반환
arr.filter(function (el) {
  return el % 2 === 1;
});

// 예시
// 프로그래머스 - 짝수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/120831

// 방법 1)
function solution(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

// 방법 2)
function solution2(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.filter(function (el) {
  return el % 2 !== 0;
});

// 모음 제거하기
Array.from("hello world").filter((v) => !["a", "e", "i", "o", "u"].includes(v));

// 💡 배열 메서드 - reduce()
// 두 번째 매개변수인 initial value를 꼭 명시해주자.
const arr3 = [1, 2, 3, 4, 5];
arr3.reduce((a, c) => a + c, 0);

// 💡 배열 메서드 - includes()
const arr4 = ["hello", "world", "kimmutsa"];
console.log(arr4.includes("world")); // true
console.log(arr4.includes("mutsa")); // false

// 💡 배열 메서드 - join()
const arr5 = ["hello", "world", "kimmutsa"];
console.log(arr5.join("!")); // hello!world!kimmutsa

const arr6 = ["010", "1234", "5678"];
console.log(arr6.join("-")); // 010-1234-5678

const arr7 = [010, 1234, 5678];
console.log(arr7.join("-")); // 8-1234-5678, 문자열로 받아야 의도한대로 동작한다.

// 0b100 // b: binary
// 0o100 // o: okta
// 0x100 // x: hex

// 💡 배열 메서드 - sort()
let avengers = ["아이언맨", "스파이더맨", "헐크", "토르"];
console.log(avengers.sort()); // [ '스파이더맨', '아이언맨', '토르', '헐크' ]

// ⚠️ 사전식 정렬이기 때문에 숫자를 정렬하게 되면
// 의도와는 다르게 정렬이 된다.
let nums = [3, 1, 8, 6];
console.log(nums.sort()); // [ 1, 3, 6, 8 ]

let nums2 = [23, 5, 1000, 42];
console.log(nums2.sort()); // [ 1000, 23, 42, 5 ]

// ✨ 해결 방법 - compareFunction 사용

// 오름차순
console.log(nums2.sort((a, b) => a - b)); // [ 5, 23, 42, 1000 ]

// 내림차순
console.log(nums2.sort((a, b) => b - a)); // [ 1000, 42, 23, 5 ]

// ✅ 실무 사용 코드
// https://www.notion.so/paullabworkspace/JavaScript-sort-compare-function-ff38f176e79e4c5d9ade9c4734620ffd
function sort(key) {
  if (click) {
    click = false;
    var sortedData = jsonData.sort((a, b) =>
      a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
    );
  } else {
    click = true;
    var sortedData = jsonData.sort((a, b) =>
      a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0
    );
  }
}

// sort 깊이 탐색하기
const numbers = [3, 1, 11, 8, 6];
console.log(
  numbers.sort((a, b) => {
    console.log(a, b);
  })
);
/* -- 결과값
1 3
11 1
8 11
6 8
[ 3, 1, 11, 8, 6 ]
*/
