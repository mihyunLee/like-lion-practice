function message() {
  // 생성자를 만들지 않고 바로 사용하는 메서드 - static method
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
  Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("hello");
      }, 100);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("world");
      }, 100);
    }),
  ]).then((resultArr) => {
    console.log(resultArr.join(" "));
  });
}

message();

// async await로 바꾸기
async function asyncMessage() {
  const resultArr = await Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("hello");
      }, 100);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("world");
      }, 100);
    }),
  ]);

  console.log(resultArr.join(" "));
}

asyncMessage();
