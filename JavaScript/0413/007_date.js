// Date 객체
let d = new Date();

console.log(d); // 2023-04-13T06:38:13.998Z
d.getDate(); // 1부터 시작. 날짜 출력
d.getMonth(); // 0부터 시작 (0 - 1월)
d.getDay(); // 0부터 시작 (0 - 일요일

switch (d.getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  default:
    console.log("날짜의 양식이 잘못되었습니다.");
    break;
}

d.getHours();
d.getMinutes();
d.getSeconds();

d.getFullYear();
// d.getYear() // 1900년도부터 연도 계산, 잘 사용되지는 않는다.
