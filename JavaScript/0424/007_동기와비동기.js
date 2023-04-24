// 💡 동기
// 자바스크립트 코드는 기본적으로 순서대로(동기적으로) 실행된다.
console.log(1);
console.log(2);
[3, 4, 5].forEach((i) => console.log(i));
console.log(6);

// 1
// 2
// 3
// 4
// 5
// 6

// 💡 비동기
// setTimeout으로 콜백함수가 일정 시간 뒤에 실행하도록 코드를 작성한다.
// 순서대로 실행되지 않는다 => 비동기적으로 실행
// 비동기 실행코드는 setInterval, addEvenetListener와 같은 함수들이 있다.
console.log(1);
setTimeout(() => console.log(2), 100);
[3, 4, 5].forEach((i) => console.log(i));
console.log(6);

// 1
// 3
// 4
// 5
// 6
// 2
