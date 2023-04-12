// 재귀함수의 중요도(*)
// 다이나믹 프로그래밍, 메모라이징 기법 등을 사용하는 순간이 오게 되면 재귀함수의 중요도가 (**)

// 재귀함수 => 내가 나를 호출하는 것
// 반복문으로 반복할 수 있는 것은 재귀함수로 만들 수 있다.
// 재귀함수로 만들 수 있는 것은 반복문으로도 만들 수 있다.

// ✅ 1. factorial
// 5! == 5 * 4 * 3 * 2 * 1
result = 1;
for (let i = 2; i < 6; i++) {
  result *= i;
}
result;

function factorial(n) {
  if (n <= 1) {
    // 종료조건이 없으면 무한반복
    return n;
  }
  return n * factorial(n - 1);
}

// 💡 누적합
// 일일히 순회하지 않아도 되는 문제이기 떄문에
// for, 재귀함수 둘 다 비효율적
result = 0;
for (let i = 1; i < 1001; i++) {
  result += i;
}
result;

function sigma(n) {
  if (n <= 1) {
    // 종료조건 없으면 무한반복
    return n;
  }
  return n + sigma(n - 1);
}
sigma(1000);

// 아래처럼 수학 수식 사용하기
const n = 1000;
console.log((n * (n + 1)) / 2);

// ✅ 2. 문자열 뒤집기

function reverse(str) {
  if (str.length <= 1) {
    // 종료 조건, 무조건 체크하기!
    return str;
  }

  return reverse(str.slice(1)) + str[0];
}

reverse("hello world");
