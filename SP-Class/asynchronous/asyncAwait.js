// 💡 기존 코드
async function message() {
  let hello = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello");
    }, 100);
  });

  let world = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("world");
    }, 100);
  });

  console.log(`${hello} ${world}`);
}

// 💡 Promise로 변경해보기
// Promise를 사용하면 then으로 체이닝이 많이 이루어져야 한다.
// function message() {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 100);
//   }).then((result) => {
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(result + " world");
//       }, 100);
//     }).then((message) => {
//       console.log(message);
//     });
//   });
// }

message();

console.log("i am sync!");

// i am sync!
// hello world

// 자바스크립트 엔진은 await를 만나는 순간 이를 비동기로 처리한다.
// async 함수 내에서 await는 resolve가 fulfilled 될 때까지 기다리며 fulfilled된 값을 반환한다.
// 하지만 async 함수는 비동기로 처리되기 때문에 console.log가 먼저 실행 후, async 함수의 결과가 실행된다.
