const value = "two";

switch (value) {
  case "one":
    console.log("hello one");
    break;
  case "two":
    console.log("hello two");
    break;
  case "three":
    console.log("hello three");
    break;
  default:
    console.log("hello default");
    break;
} // hello two

const value2 = "four";

switch (value2) {
  case "one":
    console.log("hello one");
    break;
  case "two":
    console.log("hello two");
    break;
  case "three":
    console.log("hello three");
    break;
  default:
    console.log("hello default");
    break;
} // hello default

switch (new Date().getDay()) {
  case 0:
    console.log("일요일입니다.");
    break;
  case 1:
    console.log("월요일입니다.");
    break;
  case 2:
    console.log("화요일입니다.");
    break;
  case 3:
    console.log("수요일입니다.");
    break;
  case 4:
    console.log("목요일입니다.");
    break;
  case 5:
    console.log("금요일입니다.");
    break;
  case 6:
    console.log("토요일입니다.");
    break;
  default:
    console.log("금금요일입니다. 주말이 뭐죠?");
    break; // default의 break 문은 생략 가능
}

// 💡 다른 언어에서 switch문을 사용하는 방법
const 요일 = new Date().getDay();
const 요일객체 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};

console.log(요일객체[요일]); // 목요일

// 💡 객체를 사용할 때 default 처리하는 방법
const 요일2 = 10;
const 요일객체2 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};

// (1) nullish 연산자 사용
console.log(요일객체2[요일2] ?? "hello"); // hello
// (2) 단락 평가 사용
console.log(요일객체2[요일2] || "hello"); // hello
