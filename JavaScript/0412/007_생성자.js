// ✅ new 연산자를 사용할 경우
// 암묵적으로 this를 초기화하고, this를 리턴한다.
function Book(책이름, 책가격, 저자, 출판일) {
  // this = {};
  this.책이름 = 책이름;
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
  // return this;
}

console.log(Book("JavaScript", 10000, "홍길동", "2023-04-12"));
// undefined

console.log(new Book("JavaScript", 10000, "홍길동", "2023-04-12"));
// Book {
//   '책이름': 'JavaScript',
//   '책가격': 10000,
//   '저자': '홍길동',
//   '출판일': '2023-04-12'
// }
