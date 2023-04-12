function 함수1(a, b) {
  return a + b;
}

function 함수2(a, b, c) {
  const z = a + b + c;
  return z;
}

function 함수3(a, b, c, d, e, f) {
  return a;
}

// 함수의 length는 파라미터의 수
console.dir(함수1);
console.dir(함수2);
console.dir(함수3);

console.log(typeof 함수1); // function

// 💡 객체처럼 동작하는 함수
// array, object, function은 아래의 코드처럼 값을 추가할 수 있다.
함수1["location"] = "seoul";

함수1["name"] = "새로운함수"; // 에러 발생 X, 변경되지 않는다.
console.dir(함수1);
// console.dir(새로운함수); // 호출 불가

함수1["length"] = 5; // 에러 발생 X, 변경되지 않는다.
console.dir(함수1);

// 💡 아규먼트가 순서대로 들어가는 함수의 특성
function 함수(a = 10, b = 20, c = 30) {
  return a + b + c;
}

함수();
함수(100); // 150
함수(100, 200); // 330
함수(100, 200, 300); // 600
함수((c = 300));
// 반환 값: 350 => c라고 기재해두었어도, 매개변수의 c를 의미하지 않는다.
// c = 300 이라는 선언 값이 a에 들어가는 느낌,,?
// 순서대로 값이 들어간다.

함수((a = 100), (c = 300)); // 430

// 💡 roro 기법의 원리
// * roro 기법: 입력되는 아규먼트가 매우 많은 함수의 경우,
// * 호출하는 쪽에서 어떤 값이 들어가는지 명확하게 알기 힘들고, 읽기도 어렵다.
window.addNewControl("Title", 20, 50, 100, 50, true);

// python 형식
window.addNewControl(
  (title = "Title"),
  (xPosition = 20),
  (yPosition = 50),
  (width = 100),
  (height = 50),
  (drawingNow = true)
);

// * 사용 방법
function 로그인정보({
  회원등급 = "Gold",
  글쓰기 = true,
  글읽기 = true,
  채널관리 = true,
  백업 = "1주일 이내 가능",
  소셜로그인여부 = true,
}) {
  console.log("... 함수 기능 ...");
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
}

// roro 기법이 아니었다면 주어진 매개변수는 순서에 따라 값이 들어갔을 것
// 회원등급 "Sliver" -> 회원등급 "Gold", 소셜로그인여부 false -> 글쓰기 true, 백업 "3일 이내" -> 글읽기 true

로그인정보({
  회원등급: "Sliver",
  소셜로그인여부: false,
  백업: "3일 이내 가능",
});
// Sliver true true true 3일 이내 가능 false

// * 사용 원리
let one;
let two;
let three;

let four = { one, two, three };
// {one: undefined, two: undefined, three: undefined}
// 변수 값을 object 안에 넣으면 변수명 -> key, 변수의 값 -> value가 된다.
// 따라서 할당 연산자의 왼쪽의 first, second, third는 변수라는걸 알 수 있다.

let { first, second, third } = { first: 10, second: 20, third: 30 };
console.log(first, second, third); // 10 20 30

// ERROR, 할당 연산자 왼쪽의 first, second, third는 변수이기 때문에
// `:`이 아닌 `=`으로 값을 할당해주어야 함.
// let { first: 10, second, third } = { second: 20, one: 10 }
let { first2 = 10, second2, third2 } = { second2: 20, one2: 10 };

// * 심화
// 위 코드에서 로그인정보({}) 호출 했을 때에는 error가 안나지만 로그인정보()호출했을 경우에는 error 발생
// 매개변수에 {} = {}를 작성하기
function 함수({ a = 1, b = 2, c = 3 } = {}) {
  console.log(a, b, c);
  return a + b + c;
}

함수();
함수({});
함수({ b: 100 });

// 참고
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined
