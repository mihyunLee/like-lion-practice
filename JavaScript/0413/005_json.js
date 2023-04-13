// https://www.jeju.go.kr/news/bodo/list.htm?act=rss

// *- JSON.parse(): JSON문자열을 자바스크립트 객체로 변환
// *- JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환
let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l));
console.log(a); // [ 10, 20, 30 ]
console.log(l === a); // false, 완전히 서로 다른 값이 된다. => 깊은 복사가 되었다고 표현

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj); // { result: true, count: 42 }

const json2 = "[1, 2, 3]";
const obj2 = JSON.parse(json2);
console.log(obj2); // [ 1, 2, 3 ]

// error
// let l = [10, 20, 30];
// let a = JSON.parse(`${l}`);
// a[0] = 1000;

// console.log(l);
