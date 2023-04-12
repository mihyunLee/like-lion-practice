let m = new Map();

// 💡 Map에 값을 넣기
// set(key, value)
m.set("하나", 1);
m.set(1, "하나");
m.set(true, 1);
m.set(false, 0);

// 💡 Map의 값에 접근
m.get("하나"); // 1

// 💡 Object vs. Map
// {[1, 2, 3]: 100, {"하나": 1}: 10} // error

// Map에서는 배열을 키 값으로 설정할 수 있다.
// ⚠️ 단, 참조형을 키 값으로 할 때 주의할 것
m.set([1, 2, 3], "리얼리?");
m.get([1, 2, 3]); // undefined

// 위에서 왜 undefined가 나올까?
// 같은 요소를 가진 배열을 비교해도 가지고 있는 주소 값이 다르기 때문에
// 둘은 서로 다른 요소이다.
// 따라서 Map에서 위와 같이 값을 가져오면 undefined가 됨에 주의하자.
console.log([1, 2, 3] == [1, 2, 3]); // false

// ✅ undefined 해결하기
// 변수에 키 값을 할당하여 같은 주소를 참조하게 하자!
let x = [1, 2, 3, 4];
m.set(x, "리얼리?");
m.get(x); // 리얼리?

// 💡 Map의 값이 있는지 확인하기
m.has("하나");

// 💡 Map의 값을 제거하기
m.delete("하나");

// Map의 크기 확인
m.size;

//////////////////////////////////

//////////////////////////////////

let data1 = new Map([
  ["one", 1],
  ["two", 2],
]); // O

// Object.entries(): [key, value] 쌍의 배열로 반환한다.
let data2 = new Map(Object.entries({ one: 1, two: 2 })); // O

let data3 = new Map({ one: 1, two: 2 }); // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X

//////////////////////////////////
// ✅ Object의 경우 직접 순회하려면 Object.entries를 사용해야 했다.
let data4 = { one: 1, two: 2 };
for (const i of data4) {
  // X 작동되지 않습니다!
  console.log(i);
}

let data5 = { one: 1, two: 2 };
for (const i of Object.entries(data5)) {
  console.log(i);
}

// ✅ Map은 직접 순회가 가능하다.
let m1 = new Map();

m1.set("하나", 1) // 메서드 체이닝
  .set("둘", 2)
  .set("셋", 3)
  .set("넷", 4);

for (const i of m1) {
  console.log(i);

  // ['하나', 1]
  // ['둘', 2]
  // ['셋', 3]
  // ['넷', 4]
}

for (const [key, value] of m1) {
  console.log(key, value);

  // 하나 1
  // 둘 2
  // 셋 3
  // 넷 4
}

// Object의 단점
let test = { one: 1, two: 2 };
Object.keys(test);

// Map은 메서드로 모두 호출 가능!
m.keys();
m.values();
m.entries();

// Map <-> Object 형변환
let 맵 = new Map(Object.entries({ one: 1, two: 2 }));
let 오브젝트 = Object.fromEntries(맵);

// 키 값의 중복 안됨
let map = new Map();
map.set("이호준", 1);
map.set("이호준", 2);
map.set("이호준", 3);
