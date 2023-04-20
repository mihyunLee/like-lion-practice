// 💡 비공개 프로퍼티 만들기
// 방법1. 클로저
function PersonGenerator() {
  let age = 25;

  // (1) age에 접근하지 못하게 하기 위해
  // PersonGenerator 대신 생성자 함수 역할을 할 함수를 생성
  function InnerPersonType() {}

  // (2) InnerPersonType에 prototype을 추가함으로써 age에 접근할 수 있음
  InnerPersonType.prototype.getAge = function () {
    return age;
  };

  return InnerPersonType;
}

const person = new PersonGenerator(); // InnerPersonType을 리턴해주었기 때문에 PersonGenerator를 생성자로 사용할 수 없다.
const Person = PersonGenerator(); // PersonGenerator(): 생성자 함수
const myPerson = new Person(); // Person(): InnerPersonType

console.log(person.age); // undefined
console.log(myPerson.age); // undefined
console.log(myPerson.getAge()); // 25

// 방법2. IIFE(Immediately Invoked Function Expression, 즉시 실행 함수 표현식)
// 				방법1과 달리 함수의 반환값을 어딘가에 담아서 사용하지 않아도 된다.
const PersonGenerator2 = (function () {
  let age = 25;

  function InnerPersonType() {}

  InnerPersonType.prototype.getAge = function () {
    return age;
  };

  return InnerPersonType;
})();

const myPerson2 = new PersonGenerator2();

console.log(myPerson2.age); // undefined
console.log(myPerson2.getAge()); // 25

// 방벙3. get, set 키워드를 이용
