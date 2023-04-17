let str = "like-lion frontend school 5th DEV-NOR FE-DEV";

// 문자열 1개만 매칭되어 변경
console.log(str.replace("FE-DEV", "CEO")); // like-lion frontend school 5th DEV-NOR CEO

// flag로 global을 주어서 전체 변경 (m - 다중 라인, i - 대소문자 구분)
console.log(str.replace(/FE-DEV/g, "CEO")); // like-lion frontend school 5th DEV-NOR CEO

// 패턴을 찾아 Array로 반환
console.log(str.match(/FE-DEV/g)); // [ 'FE-DEV' ]

// split으로 정규 표현식을 기준으로 분리한 Array 반환
console.log(str.split(/FE-DEV/g)); // [ 'like-lion frontend school 5th DEV-NOR ', '' ]

// 패턴이 들어가 있으면 true 없으면 false
console.log(/FE-DEV/g.test(str)); // true

// ⚠️ split 사용시 주의 사항
// 느낌표 개수 구하기
console.log("!!!".split("!")); // [ '', '', '', '' ]
console.log("!a!a!a".split("!")); // [ '', 'a', 'a', 'a' ]
console.log("a!a!a!".split("!")); // [ 'a', 'a', 'a', '' ]

// split으로 나눠진 배열 길이에서 하나 더 추가되어 나오기 때문에 -1을 해주어야 한다.
console.log("!a!a!a".split("!").length - 1); // 3

/*
/[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
/[0-9]{2,3}[-.* ]?[0-9]{3,5}[-.* ]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm
*/
