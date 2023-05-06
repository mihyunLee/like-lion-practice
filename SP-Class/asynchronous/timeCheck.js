let start = Date.now();

const result = (x) => {
  console.log(`${x}가 실행되는데 걸리는 시간: ${Date.now() - start}`);
};

// 💡 시간이 오래 걸리는 함수
// const blocking = () => {
//   let i = 0;
//   while (i < 99999999) {
//     i++;
//   }

//   return "blocking finished";
// };

// 💡 Promise를 사용하여 비동기 처리하기
const asyncBlocking = () => {
  return new Promise((resolve, reject) => {
    let i = 0;
    while (i < 9999999) {
      i++;
    }
    resolve("blocking finished");
  });
};

result("동기식 코드1");
// result(blocking());

// 프로미스 객체를 만드는 과정은 동기적으로 진행된다.
// result(asyncBlocking());

setTimeout(() => {
  result("setTimeout finished");
}, 0);

// 프로미스 자체가 비동기가 아닌 then()이 비동기적으로 실행된다.
result(
  asyncBlocking().then((txt) => {
    result(txt);
  })
);
result("동기식 코드2");
