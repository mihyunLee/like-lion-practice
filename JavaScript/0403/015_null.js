let val1; // undefined

var val2 = null;
console.log(val2); // null

let 반점수 = [10, 20, 30, null, 40, 50];
let 반평균 = 0;

for (const i of 반점수) {
  console.log(i);
  반평균 += i;
}

반평균 /= 5; // null은 포함되지 않기 때문에 5로 나눠주어야함
