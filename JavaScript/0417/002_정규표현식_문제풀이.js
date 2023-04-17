// 💡 1. 특정 문자 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120826

// ⭕ 정답
// split 사용하기
function solution(my_string, letter) {
  return my_string.split(letter).join("");
}

// 정규표현식으로 풀어보기
// ❌ 오답
// 모든 문자가 아닌 한 문자만 찾기 때문
function solution(my_string, letter) {
  return my_string.replace(letter, "");
}

// ❌ 오답
// /g를 플래그가 아닌 문자열로 인식
function solution(my_string, letter) {
  return my_string.replace(`/${letter}/g`, "");
}

// ⭕ 정답
// 정규표현식 생성자 함수를 사용
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
function solution(my_string, letter) {
  // new RegExp(정규 표현식 패턴, 플래그)
  const reg = new RegExp(letter, "g");

  return my_string.replace(reg, "");
}

// 💡 2. 숨어있는 숫자의 덧셈(1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120851
// [1] 숫자만 뽑아내서 더해주기
function solution(my_string) {
  let result = my_string
    .match(/[0-9]/g)
    .reduce((acc, val) => acc + parseInt(val), 0);
  return result;
}

// [2] 문자만 제거하고 더해주기
function solution(my_string) {
  return my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, val) => acc + parseInt(val), 0);
}

// 💡 3. 369게임
// https://school.programmers.co.kr/learn/courses/30/lessons/120891
// optional chaining
function solution(order) {
  return (order + "").match(/[369]/g)?.length || 0;
}

// nullish 병합 연산자
function solution(order) {
  let value = order.toString().match(/[369]/g) ?? [];
  return value.length;
}

// 💡 4. 잘라서 배열로 저장하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120913
function solution(my_str, n) {
  let reg = new RegExp(`[0-9a-zA-Z]{1,${n}}`, "g");
  return my_str.match(reg);
}

function solution(my_str, n) {
  let reg = new RegExp(`.{1,${n}}`, "g");
  return my_str.match(reg);
}

function solution(my_str, n) {
  let reg = new RegExp(`\\w{1,${n}}`, "g");
  return my_str.match(reg);
}

// 💡 5. 숨어있는 숫자의 덧셈(2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120864
function solution(my_string) {
  return (
    my_string.match(/\d+/g)?.reduce((acc, val) => acc + parseInt(val), 0) || 0
  );
}

// 💡 6. 그룹 연습문제
console.log("gogaooogogooo".match(/(go)/g)); // ['go', 'go', 'go']

console.log("gogaooogogooo".match(/[go]/g)); // ['g', 'o', 'g', 'o', 'o', 'o', 'g', 'o', 'g', 'o', 'o', 'o']

//* 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오. 숫자는 항상 2개만 있고, 알파벳은 1개 이상 있을 수 있습니다.
let str = "87a99b00fww89e";

console.log(str.match(/[0-9][0-9][a-zA-Z]/g));
console.log(str.match(/([0-9][0-9])([a-zA-Z])/g)); // 숫자 그룹과 문자 그룹으로
console.log(str.match(/[0-9]{2}[a-zA-Z]/g));
console.log(str.match(/\d{2}[^0-9]/g));

// 💡 7. 암호문
// r, e, v 뒤의 숫자들을 더하고 앞의 숫자를 월로 뒤의 숫자를 일로 만들자.
// 단 r, e, v 뒤의 숫자는 10까지만 인식하고 11 이상은 십의 자리 숫자만 인식한다.
function solution(data) {
  let sum = data
    .match(/[rev](10|[0-9])/g)
    .reduce((acc, val) => acc + parseInt(val.slice(1)), 0);
  return `${parseInt(sum / 10)}월 ${sum % 10}일`;
}

solution("a10b9r1ce33uab8wc918v2cv11v9");
