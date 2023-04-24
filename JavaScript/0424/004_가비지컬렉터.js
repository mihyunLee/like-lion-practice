// ✅ case 1)
let me = { age: 30 }; // 참조 카운트 : 1;
let you = me; // 참조 카운트 : 2;

// 객체의 메모리 해제, null 대신 undefined도 가능
me = null; // 참조 카운트 : 1;
you = null; // 참조 카운트 : 0; 가비지 컬렉션 대상이 된다.

// ✅ case 2)
let x = {
  y: {
    z: 1,
  },
};

// x가 참조하는 객체를 object1, y가 참조하고 있는 객체를 object2

let a = x; // object1 참조 카운트 : 2 (x, a가 참조중)
x = 1; // object1 참조카운트 : 1 (a만 참조중)

let b = a.y; // object2 참조 카운트: 2 (a.y, b)
a = 2; // object1 참조카운트 : 0, object2 참조카운트 : 1 (b)

// b가 object2를 참조하기 대문에 object1 객체는 제거되지 않는다.
// object1 객체는 사용하진 않지만 불필요하게 남아있는 것
// 이러한 상황을 메모리 누수라고 한다.

// ✅ case 3) 클로져 메모리 누수
function outer() {
  let privateVal = ["test"];

  function getPrivate() {
    return privateVal;
  }

  return getPrivate;
}

const getPrivate = outer();
const secretVal = getPrivate();
console.log(secretVal); // ['test']

// 밖의 outer 함수는 return문을 통해 함수를 종료하고 있긴 하지만
// 현재 반환되는 함수의 내부에서 외부 함수의 값을 반환하고 있기 때문에
// 그 값을 계속해서 참조하는 메모리 누수 현상이 발생한다.
// 이 때 privateVal는 secretVal에 계속 참조되어 있기 때문에
// 메모리 해제를 위해서는 secretVal에 null 값이나 undefined를 할당해주어야 한다.
