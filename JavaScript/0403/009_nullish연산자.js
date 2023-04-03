// reference: https://ko.javascript.info/nullish-coalescing-operator
// [!] 스펙에 추가된 지 얼마 안 된 문법이기 때문에 구식 브라우저는 폴리필이 필요하다.
// [i] 폴리필: 최신 문법을 구식 브라우저에서도 사용할 수 있도록 해주는 것

// nullish 병합 연산자 '??'
// A ?? B
// A가 null이거나 undeinfed라면 B

let firstName = null;
let lastName = null;
let nickName = "김멋사";

console.log(firstName ?? nickName); // 김멋사
console.log(firstname ?? lastName ?? nickName); // 김멋사

nickName = null;
console.log(firstname ?? lastName ?? nickName ?? "익명 사용자"); // 익명 사용자

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c); // 10

// 단락회로평가와 nullish 연산자 차이점
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0

let height2;
console.log(height2 || 100); // 100
console.log(height2 ?? 100); // 100

let height3 = "";
console.log(height3 || "hello"); // hello
console.log(height3 ?? "world"); // 공백

// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined
