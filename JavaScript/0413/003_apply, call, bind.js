// apply, call, bind

// 💡 -- call
// 메서드의 인수에 this로 사용할 값 전달
let peter = {
  name: "Peter Parker",
  sayName: function () {
    console.log(this.name);
  },
};

let bruce = {
  name: "Bruce Wayne",
};

peter.sayName(); // Peter Parker
peter.sayName.call(bruce); // Bruce Wayne

// ✅ 아규먼트를 전달할 수도 있다.
let peter2 = {
  name: "Peter Parker",
  sayName: function (감탄사) {
    console.log(this.name + 감탄사);
  },
};

let bruce2 = {
  name: "Bruce Wayne",
};

peter2.sayName(); // Peter Parkerundefined
peter2.sayName("!"); // Peter Parker!
peter2.sayName.call(bruce2, "!"); // Bruce Wayne!

// --💡 apply
// 메서드의 인수에 this로 사용할 값을 전달할 수 있고, 배열의 형태로도 전달할 수 있다.
let peter3 = {
  name: "Peter Parker",
  sayName: function (is, is2) {
    console.log(this.name + " is " + is + " or " + is2);
  },
};

let bruce3 = {
  name: "Bruce Wayne",
};

peter3.sayName.apply(bruce3, ["batman", "richman"]); // Bruce Wayne is batman or richman

// ✅ call vs. apply
peter3.sayName.call(bruce3, ["batman", "richman"]); // Bruce Wayne is batman,richman or undefined

// -- 💡 bind
// this가 고정된 새로운 함수를 반환한다.
function sayHello() {
  console.log(this.name);
}

let peter4 = {
  name: "Peter Parker",
  sayName: sayHello,
};

let bruce4 = {
  sayName: sayHello.bind(peter4),
};

peter4.sayName(); // Peter Parker
bruce4.sayName(); // Peter Parker
