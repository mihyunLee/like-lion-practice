// **엄격 모드의 특징**
// 1. 선언하지 않은 변수에 값을 할당할 수 없습니다.
// 2. 읽기 전용 객체에 값을 할당하면 에러가 발생합니다. (일반 모드에서는 조용한 에러 —> 무시 처리)
// 3. 지울수 없는 값을 지우려고 하면 에러가 발생합니다. (일반 모드에서는 조용한 에러 —> 무시 처리)
// 4. 함수 파라메터에 중복된 이름을 사용할 수 없습니다.

// 엄격 모드 실행, 코드의 최상단에 위치해야 한다.
"use strict";

// 1. 선언하지 않은 변수에 값을 할당할 수 없다.

// 2. 읽기 전용 객체: undefined, Infinity
undefined = 10; // 일반 모드에서는 에러가 발생하지 않지만, 엄격 모드에서는 에러 발생

// 3. 엄격모드에서는 지울 수 없는 값을 지우려하면 에러가 발생한다.
const obj = {
  firstName: "mutsa",
  lastName: "kim",
};

delete obj.lastName;
console.log(obj); // { firstName: 'mutsa' }

delete Object.prototype; // !ERROR

// 4. 함수 파라미터에 중복된 이름 사용 불가
function myFunc(a, a, b) {
  console.log(a + a + b);
}

myFunc(1, 2, 3); // !일반 모드에서는 7, 엄격 모드에서는 에러
