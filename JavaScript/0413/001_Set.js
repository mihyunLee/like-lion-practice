// 💡 Set
// 집합, 합집합, 교집합, 차집합

let s = new Set("aabbbccccdd"); // 중복되지 않는 유일한 객체
console.log(s); // Set(4) { 'a', 'b', 'c', 'd' }
s.size;

회사게시판 = [
  "김멋사",
  "김멋사",
  "김멋사",
  "김멋사",
  "김멋사",
  "김멋사",
  "김멋사",
  "김연하",
  "김연하",
  "최흥석",
  "이나영",
];
let 게시자 = new Set(회사게시판);

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야 합니다.)
게시자.size;

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of 게시자) {
  console.log(
    i,
    회사게시판.filter((e) => e === i)
  );
}

for (const i of 게시자) {
  console.log(i, 회사게시판.filter((e) => e === i).length);
}

let map = new Map();
for (const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1);
}

// 1번째 순회 i에 '김멋사'
map.set(i, (map.get(i) || 0) + 1);

let map2 = new Map();
ma2p.get("김멋사"); // undefined

map2.set("김멋사", 1); // 최종

// 2번째 순회 i에 '김멋사'
map2.set(i, (map2.get(i) || 0) + 1);

map2.set("김멋사", 2); // 최종

/// set 연습 ///

let s1 = new Set("aabbbccccdd");
s1.size;
s1.has("a");
s1.has("f");
s1.add("z");
s1;

for (const i of s) {
  console.log(i);
}

let s2 = new Set("aabbbccccdd".split(""));
let s3 = new Set(["a", "a", "b", "b", "b", "c", "c", "c", "c", "d", "d"]);

// 교집합
let a = new Set("abc");
let b = new Set("cde");
let cro = [...a].filter((e) => b.has(e));

// 합집합
let union1 = new Set([...a].concat(...b));
let union2 = new Set([...a, ...b]);

// 차집합
let dif = [...a].filter((e) => !b.has(e));

// 💡 set, map, object, array, string가 이터러블 객체인지? 순서는 보장하는지?
// 이터러블한 객체란? 순회가 가능한 객체다.
// => set, map, array, string

// 순서를 보장하나요? (object는 순서를 보장하지 않습니다.)
// 순서 보장 => set, map, array, string
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://myung-ho.tistory.com/90

// https://school.programmers.co.kr/learn/courses/30/lessons/120903
// 💡 배열의 유사도 -> 교집합의 갯수 구하는 문제
function solution(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

function solution(s1, s2) {
  s1 = new Set(s1);
  s2 = new Set(s2);
  let cro = [...s1].filter((e) => s2.has(e));
  return cro.length;
}
