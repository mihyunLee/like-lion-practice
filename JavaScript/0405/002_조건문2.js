// ❓ 사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요.

// 1. 나이가 18세 이상이면 "안녕하세요!"를
// 2. 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를
// 3. 10세 미만이면 “부럽다…” 를 출력합니다.

const age = parseInt(window.prompt("나이를 입력해주세요."));
// prompt로 입력 받으면 문자열을 반환하기 때문에 숫자형으로 변환해주는 것이 좋다.

if (age >= 18) {
  console.log("안녕하세요!");
} else if (age >= 10) {
  console.log("안녕! 반가워 꼬마친구!");
} else {
  console.log("부럽다...");
}

// ❓ 사용자로부터 입력받은 성적에 따라 성적을 출력하는 프로그램을 작성하세요.

// 1. 성적이 90점 이상이면 "A",
// 2. 80점 이상이면 "B",
// 3. 70점 이상이면 "C",
// 4. 60점 이상이면 "D",
// 5. 그 외에는 “강해져서 돌아와라”를 출력합니다.

// 내가 추가한 조건
// 1. 취소 버튼을 눌렀을 때 입력창 닫기
// 2. 100점 보다 큰 점수를 입력했을 때 계속 입력 받기

while (true) {
  let input = parseInt(prompt("성적을 입력해주세요."));
  if (input === null) break;

  if (input > 100) {
    continue;
  } else {
    const score = input;

    if (score >= 90) {
      console.log("A");
    } else if (score >= 80) {
      console.log("B");
    } else if (score >= 70) {
      console.log("C");
    } else if (score >= 60) {
      console.log("D");
    } else {
      console.log("강해져서 돌아와라");
    }

    break;
  }
}

// ❓ 삼항 연산자로 점수에 따라 콘솔 창에 메시지 출력하기
const score = parseInt(prompt("성적을 입력해주세요"));

score >= 90
  ? console.log("A")
  : score >= 70
  ? console.log("C")
  : score >= 60
  ? console.log("D")
  : console.log("강해져서 돌아와라");
