// 💡 1번 - 함수 선언식
// 이름이 있는 함수 안에서 정의된 함수의 경우 this는 전역을 바라보게 된다.
// a 함수는 object 안의 함수이다.

const person = {
  name: "kimmutsa",
  age: 25,
  a() {
    console.log(this);
    console.log(this.name);
    function b() {
      console.log(this);
      console.log(this.name);
      function c() {
        console.log(this);
        console.log(this.name);
      }
      c();
    }
    b();
  },
};

person.a();
// 출력
// {name: 'kimmutsa', age: 25, a: ƒ}
// kimmutsa

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// ''

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// ''

// 💡 2번 - 화살표 함수
// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// c에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person

const person = {
  name: "kimmutsa",
  age: 25,
  a() {
    console.log(this);
    console.log(this.name);
    let b = () => {
      console.log(this);
      console.log(this.name);
      let c = () => {
        console.log(this);
        console.log(this.name);
      };
      c();
    };
    b();
  },
};
person.a();

//출력
// {name: 'kimmutsa', age: 25, a: ƒ}
// kimmutsa

// {name: 'kimmutsa', age: 25, a: ƒ}
// kimmutsa

// {name: 'kimmutsa', age: 25, a: ƒ}
// kimmutsa

// 💡 3번
// forEach의 두 번쨰 매개변수인 thisArg는 this로 사용할 배열을 지정할 수 있다.
[1, 2, 3].forEach(function () {
  console.log(this);
});
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

[1, 2, 3].forEach(
  function () {
    console.log(this);
  },
  [10, 20, 30]
);
// (3) [10, 20, 30]
// (3) [10, 20, 30]
// (3) [10, 20, 30]
