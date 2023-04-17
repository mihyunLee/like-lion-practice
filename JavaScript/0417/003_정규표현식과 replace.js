// 💡 replace에서 group 사용하기
let string = `mutsa, kim
gildong, hong
`;

// ⚠️ 한글은 적용되지 않음
// \w의 경우 아스키 코드표에 포함된 문자에만 일치하기 때문
let result1 = string.replace(/(\w+), (\w+)/gm, "$2 $1");
console.log(result1);
// kim mutsa
// hong gildong

let result2 = string.replace(/(\w+), (\w+)/gm, "$2_$1");
console.log(result2);
// kim_mutsa
// hong_gildong

let result3 = string.replace(/(\w+), (\w+)/gm, "$2 $1!!$1!!$1");
console.log(result3);
// kim mutsa!!mutsa!!mutsa
// hong gildong!!gildong!!gildong

// 한글은 아스키 코드가 아닌 유니코드로 표현된다.
let str = `멋사, 김
라이언, 박
`;

// let result = str.replace(
//   /([ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+), ([ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+)/gm,
//   "$2 $1"
// );

// 한글은 U+1100~U+11FF 사이에 한글 자모 영역,
// U+AC00~U+D7AF 사이의 한글 소리 마디 영역에 포함된다
let result = str.replace(/([\uAC00-\uD7AF]+), ([\uAC00-\uD7AF]+)/gm, "$2 $1");
console.log(result);
