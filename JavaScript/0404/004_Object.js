// 객체는 키(key)-값(value) 쌍으로 이루어져있다.

const human = {
  name: "John Wick",
  age: 53,
  from: "벨라루스",
  askingHim: function () {
    console.log("Yeah, I'm thinking I'm back!");
  },
  0: "01012345678",
};

// 객체 접근 방법
console.log(human.name); // John Wick
console.log(human.age); // 53
console.log(human["name"]); // John Wick
console.log(human["age"]); // 53
// console.log(human.0); // ERROR, 숫자 프로퍼티는 점(.)으로 접근할 수 없다.
console.log(human[0]); // 01012345678
console.log(human["0"]); // 01012345678

// 유사 배열 객체
// 배열과 같이 동작하는 것 같지만 똑같은 배열처럼 만들어도,
// 유사 배열 객체보다는 배열이 순회할 때 더 속도가 빠르다.
const arr = {
  0: 10,
  1: 20,
  2: 30,
  length: 3,
};

console.log(arr[0]); // 10
console.log(arr.length); // 3

const human2 = {
  name: "John Wick",
  age: 53,
  from: "벨라루스",
  askingHim: function () {
    console.log("Yeah, I'm thinking I'm back!");
  },
  0: "01012345678",
};

human.name = "김멋사";
console.log(human.name); // 김멋사
human.askingHim(); // Yeah, I'm thinking I'm back!
delete human.from; // 명시된 속성 삭제

// in 연산자: 명시된 속성(property)이 명시된 객체에 존재하면 true를 반환한다.
console.log("age" in human); // true
console.log(20 in [10, 20, 30, 40]); // false
console.log("length" in [10, 20, 30, 40]); // true

const aespa = {
  members: ["카리나", "윈터", "지젤", "닝닝"],
  from: "광야",
  sing: function () {
    return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!";
  },
};

console.log(aespa.hasOwnProperty("itzy")); // false
console.log(aespa.hasOwnProperty("sing")); // true

console.log(Object.keys(aespa)); // [ 'members', 'from', 'sing' ]
console.log(Object.values(aespa)); // [ [ '카리나', '윈터', '지젤', '닝닝' ], '광야', [Function: sing] ]
