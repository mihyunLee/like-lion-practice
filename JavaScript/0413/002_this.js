//💡 this 사용 예제 1
function sayName() {
  console.log(this.name);
}

// sayName();

let perter = {
  name: "Peter Parker",
  say: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  say: sayName,
};

// 💡 this 사용 예제 2
function attackBeam() {
  // 레이저 공격
  this.hp -= 20;
}

function attackKnife() {
  // 칼 공격
  this.hp -= 5;
}

let zombi = {
  name: "busan zombi",
  damaged: [attackBeam, attackKnife],
  // 아래와 같이 구현하면 bind 메서드가 필요 없지만
  // 코드가 깔끔해보이진 않는다.
  // damaged1: attackBeam,
  // damaged2: attackKnife,
  hp: 10000,
  power: 2,
};

let thanos = {
  name: "thanos",
  damaged: attackBeam,
  hp: 1000,
  power: 100,
};

zombi.damaged[0](); // 레이저 공격
zombi.damaged[1](); // 칼 공격
console.log(zombi); // 변화가 없다, 왜?
// 현재 this가 가리키는 건 함수를 호출한 zombi가 아닌
// damaged 배열 자체이기 때문
// bind() 메서드로 this가 가리켜야하는 걸 지정해줄 수 있다.

// 💡 this 사용 예시 3
let 호텔 = [
  {
    이름: "하나호텔",
    위치: "제주도 제주시 001",
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "둘호텔",
    위치: "제주도 제주시 002",
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "셋호텔",
    위치: "제주도 제주시 003",
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
];
console.log(호텔[0].남은방의개수()); // 25
console.log(호텔[1].남은방의개수()); // 70
console.log(호텔[2].남은방의개수()); // 40

/////////

function a() {
  console.log(this);
  function b() {
    console.log(this);
    function c() {
      console.log(this);
    }
    c();
  }
  b();
}

a();

// a, b, c 모두 window
// a.b.c() 같이 호출한 객체를 타고 올라가는 형태가 아니다.
