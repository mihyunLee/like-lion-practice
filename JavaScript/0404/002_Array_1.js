const arr = [10, 20, 30];
arr[0] = 100;

console.log(arr); // [ 100, 20, 30 ]
console.dir(arr); // [ 100, 20, 30 ]

// 💡 대괄호 표기법과 점 표기법의 차이
// 숫자로 입력된 값은 대괄호로 밖에 호출할 수 없고,
// 문자로 입력된 값은 점(.)으로 호출할 수 있다.
console.log(arr[1]); // 20
// console.log(arr.1); // ERROR
console.log(arr["length"]); // 3
console.log(arr.length); // 3

arr.length = 10;
console.log(arr); // [ 100, 20, 30, <7 empty items> ]

// 💡 프로퍼티 추가
arr["김멋사"] = 100;
arr.박멋사 = 1000;
console.log(arr); // [ 100, 20, 30, <7 empty items>, '김멋사': 100, '박멋사': 1000 ]

// 💡 배열의 생성 방법
let arr1 = [];
let arr2 = [1, 2, 3];
let arr3 = new Array(4, 5, 6);
let arr4 = new Array(3);

console.log(arr1); // []
console.log(arr2); // [ 1, 2, 3 ]
console.log(arr3); // [ 4, 5, 6 ]
console.log(arr4); // [ <3 empty items> ]

// 💡 배열의 특징
// [1] 배열은 순서가 있다. 배열의 순서를 index, 이 순서로  호출하는 것을 indexing이라고 한다.
//		 배열 안의 값을 원소(elements)라고 한다.
const arr5 = [10, 20, 30];
arr5[0] = 100;

// [2] 배열에 다른 원시 타입과 객체 타입을 포함할 수 있다.
const arr6 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr6[1]); // [ 4, 5, 6 ]
console.log(arr6[1][2]); // 6

// 💡 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10; // 스칼라
const b = [10, 20, 30]; // 벡터
const c = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 메트릭스
const d = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
]; // 텐서(3차원 이상의 다차원)
// 텐서플로우 - 인공지능 프레임워크
// 인공지능은 행렬의 연산이다.

// 💡 배열의 요소 추가 - push
// 배열의 뒤에 값을 추가한다.
const arr7 = [1, 2, 3];
arr7.push(5);
console.log(arr7); // [ 1, 2, 3, 5 ]

// 💡 배열 요소 추출 - pop
// 배열의 뒤에서 값을 꺼내고, 그 값을 리턴(반환)한다.
const arr8 = [1, 2, 3, 4];
arr8.pop();
console.log(arr8); // [ 1, 2, 3 ]

let val = arr8.pop();
console.log(val); // 3
console.log(arr8); // [ 1, 2 ]

// 💡 배열 요소 추출 - shift
// 배열의 앞에서 값을 꺼내고, 그 값을 리턴(반환)한다.
const arr9 = ["사과", "바나나", "수박"];
arr9.shift();
console.log(arr9); // [ '바나나', '수박' ]

// 💡 배열 요소 추출 - shift
// 배열의 앞에 값을 추가한다.
const arr10 = ["사과", "바나나", "수박"];
arr10.unshift("오이", "배");
console.log(arr10); // [ '오이', '배', '사과', '바나나', '수박' ]

// ✅ 배열 실무 팁
// [Q] 배열의 원본 수정 없이 마지막 요소를 꺼내고 싶다면?
// [A] 전개 구문(spread syntax)를 사용하면 배열이 복사된다.
let tip1 = [1, 2, 3, 4, 5];
console.log([...tip1].pop()); // 5
console.log(tip1); // [ 1, 2, 3, 4, 5 ], 원본 배열의 수정이 없음

// tip2 자체를 pop 하게 되면 마지막 값이 꺼내져 삭제된다.
let tip2 = [...tip1];
console.log(tip2.pop()); // 5
console.log(tip2); // [ 1, 2, 3, 4 ]

// [i] 전개 구문 사용해보기
let tip3 = [1, 2, 3];
let tip4 = [10, 20, 30];
console.log([...tip3, 1000, ...tip4]); // [1, 2, 3, 1000, 10, 20, 30]

// [i] 다차원 배열에서 최솟값, 최댓값 찾기
// flat(): 지정한 깊이(depth)까지 중첩 배열 구조를 평탄화한 새로운 배열을 반환한다.
// 				depth의 기본 값은 1이다.
const tip5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let max = Math.max(...tip5.flat());
console.log(max); // 9

// [i] flat() 예제
const tip6 = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
];

console.log(tip6.flat());
console.log(tip6.flat(1));
console.log(tip6.flat(2));
console.log(tip6.flat(Infinity)); // 다 펼쳐지면 멈춘다.

// [i] 배열 생성
const tip7 = new Array(10).fill(0); // Array(10).fill(0)도 가능
const tip8 = Array.from("hello world");
console.log(tip7); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log(tip8); // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

// '.'.repeat(100).split(".") // 권장되는 방법은 아니다.

// 💡 배열 변경하기 - splice
// arr.splice(start, deleteCount, items)
const myArr = [1, 2, 3];
myArr.splice(1, 0, 4); // myArr에 1번째에, 아무것도 삭제하지 않고, 4를 넣겠다.
console.log(myArr); // [ 1, 4, 2, 3 ]

myArr.splice(1, 0, [10, 20, 30]);
console.log(myArr); // [ 1, [ 10, 20, 30 ], 4, 2, 3 ]

myArr.splice(1, 0, ...[10, 20, 30]);
console.log(myArr); // [ 1, 10, 20, 30, [ 10, 20, 30 ], 4, 2, 3 ]

// 만들고 싶은 값 [10, 1, 2, 3, 20, 30, 1, 2, 3, 40, 50]
const myArr2 = [10, 20, 30, 40, 50];
const x = [1, 2, 3];
myArr2.splice(1, 0, ...x);
myArr2.splice(-2, 0, ...x);
console.log(myArr2);

// ** splice는 제거된 요소를 담은 배열을 반환하기 때문에
// 의도한 메서드 체이닝이 되지 않는다.
console.log(myArr2.splice()); // []

const myArr3 = [10, 20, 30, 40, 50];
myArr3.splice(2, 2); // 2번째 인덱스에서, 값 2개를 삭제한다, 삽입되는 값은 없다.
console.log(myArr3); // [ 10, 20, 50 ]

const myArr4 = [10, 20, 30, 40, 50];
myArr4.splice(1);
console.log(myArr4); // [10]

const myArr5 = [10, 20, 30, 40, 50];
myArr5.splice(2);
console.log(myArr5); // [ 10, 20 ]

// 💡 배열 변경하기 - slice
// arr.slice(start, end)
// start 인덱스부터 (end - 1)인덱스까지 자른 값을 반환한다.
// ** 원본 배열이 변경되지 않음
const myArr6 = ["apple", "banana", "cherry", "durian", "elderberry"];
console.log(myArr6.slice(1, 4)); // [ 'banana', 'cherry', 'durian' ]
console.log(myArr6); // [ 'apple', 'banana', 'cherry', 'durian', 'elderberry' ]
console.log(myArr6.slice(1)); // [ 'banana', 'cherry', 'durian', 'elderberry' ]
console.log(myArr6.slice(0, 10)); // [ 'apple', 'banana', 'cherry', 'durian', 'elderberry' ]

// ✅ 실무 팁
// [i] slice를 사용하여 배열 중간에 값 삽입하기
let tip9 = [1, 2, 3, 4, 5];
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)]);

// [i] splice를 사용하여 배열 중간에 값 삽입하기
let tip10 = [1, 2, 3, 4, 5];
tip10.splice(2, 0, 1000); // 이 때의 반환값은 삭제된 배열이 없기 때문에 빈 배열이라는 것을 유의하자.
console.log(tip10);

// 💡 배열의 반복문 - forEach
// arr.forEach(함수)
// 함수(callbackfn): (value: number, index: number, array: number[]
// 배열의 모든 요소를 순회하며 주어진 함수를 실행한다.
const myArr7 = [1, 2, 3, 4, 5];
myArr7.forEach(function (item, index) {
  console.log(`배열 요소의 값: ${item}, 배열 요소의 인덱스: ${index}`);
});
/* -- 결과값
배열 요소의 값: 1, 배열 요소의 인덱스: 0
배열 요소의 값: 2, 배열 요소의 인덱스: 1
배열 요소의 값: 3, 배열 요소의 인덱스: 2
배열 요소의 값: 4, 배열 요소의 인덱스: 3
배열 요소의 값: 5, 배열 요소의 인덱스: 4
*/

myArr7.forEach(function (item, index, arr) {
  console.log(`배열 요소의 값: ${item}, 배열 요소의 인덱스: ${index}`);
  console.log(arr); // 배열 전체를 반환한다.
});
/* -- 결과값
배열 요소의 값: 1, 배열 요소의 인덱스: 0
[ 1, 2, 3, 4, 5 ]
배열 요소의 값: 2, 배열 요소의 인덱스: 1
[ 1, 2, 3, 4, 5 ]
배열 요소의 값: 3, 배열 요소의 인덱스: 2
[ 1, 2, 3, 4, 5 ]
배열 요소의 값: 4, 배열 요소의 인덱스: 3
[ 1, 2, 3, 4, 5 ]
배열 요소의 값: 5, 배열 요소의 인덱스: 4
[ 1, 2, 3, 4, 5 ]
*/

// 💡 forEach 응용하기
const myArr8 = Array(20).fill(0);
const myArr9 = [];

myArr8.forEach(function (item, index) {
  myArr9.push(index);
});
console.log(myArr9);
/*
[
   0,  1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12, 13,
  14, 15, 16, 17, 18, 19
]
*/

// 💡 실무에서 사용되는 forEach
const myArr10 = Array(20).fill(0);
const myArr11 = [];

// 방법 1)
myArr10.forEach(function (item, index) {
  myArr11.push(index + 1);
});
console.log(myArr11);
myArr11.splice(0, myArr11.length); // 배열 초기화

// 방법 2) function 키워드 생략, arrow function 사용
myArr10.forEach((item, index) => {
  myArr11.push(index + 1);
});
console.log(myArr11);
myArr11.splice(0, myArr11.length);

// 방법 3) 주로 실무에서 사용되는 방법, function 안의 실행 코드가 한 줄이면 중괄호 생략 가능
myArr10.forEach((item, index) => myArr11.push(index + 1));
console.log(myArr11);
myArr11.splice(0, myArr11.length);

// 방법 4) 콜백 함수, 잘 사용되지는 않음
function add(item, index) {
  myArr11.push(index + 1);
}
myArr10.forEach(add);

// 예제
const avengers = ["spiderman", "ironman", "hulk", "thor"];

const newAvengers = [];
avengers.forEach(function (item) {
  newAvengers.push("💖" + item + "💖");
});
console.log(newAvengers); // [ '💖spiderman💖', '💖ironman💖', '💖hulk💖', '💖thor💖' ]

// ⚠️ nodeList에서 forEach와 Array에서 forEach는 다르다.
// 		nodeList에서 forEach는 익스플로러를 지원하지 않는다.

// 💡 (중요!!) map()
// 데이터를 추출하기 위해 많이 사용된다.
// map은 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과를 새로운 배열로 반환한다.
const myArr12 = [1, 2, 3];
const result = myArr12.map(function (x) {
  return x ** 2;
});
console.log(result); // [ 1, 4, 9 ]

// map() 축약형
const result2 = myArr12.map((x) => x ** 2);
console.log(result2); // [ 1, 4, 9 ]

// map() 을 사용하는 여러가지 방법
const myArray1 = Array(100).fill(0);
myArray1.map((v, i) => i);

const myArray2 = Array(100).fill(0);
myArray2.map(function (v, i) {
  return i;
});

const myArray3 = Array(100).fill(0);
function fn(v, i) {
  return i;
}
myArray3.map(fn);

const myArray4 = Array(100).fill(0);
myArray4.map((v, i) => {
  return i;
});

// ✅ map 실무 예제
const tip12 = [
  {
    _id: "642ba3980785cecff3f39a8d",
    index: 0,
    age: 28,
    eyeColor: "green",
    name: "Annette Middleton",
    gender: "female",
    company: "KINETICA",
  },
  {
    _id: "642ba398d0fed6e17f2f50c9",
    index: 1,
    age: 37,
    eyeColor: "green",
    name: "Kidd Roman",
    gender: "male",
    company: "AUSTECH",
  },
  {
    _id: "642ba39827d809511d00dd8d",
    index: 2,
    age: 39,
    eyeColor: "brown",
    name: "Best Ratliff",
    gender: "male",
    company: "PRISMATIC",
  },
];

const ages1 = tip12.map((item) => item.age);
const ages2 = tip12.map((item) => {
  return item.age;
});
console.log(ages1, ages2); // [ 28, 37, 39 ] [ 28, 37, 39 ]
