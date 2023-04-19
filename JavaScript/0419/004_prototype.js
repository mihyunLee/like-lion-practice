// 💡 우리가 만들었던 음식 로봇객체의 메서드를 프로토타입으로 분리해보세요,
// 그리고 객체의 메서드가 서로 동일한 주소를 참조하는지 확인해보세요.

function FoodPicker(foodNames) {
  this.menus = foodNames;

  this.sayHi = function () {
    console.log("hi");
  };
}

FoodPicker.prototype.sayMenu = function () {
  const menuId = Math.floor(Math.random() * this.menus.length);
  console.log(
    `삐리비리. 오늘의 추천 메뉴는 ${this.menus[menuId]}입니다. 주인님.`
  );
};

const robot1 = new FoodPicker(["짜장면", "청국장", "김치찌개"]);
const robot2 = new FoodPicker(["짜장면", "청국장", "김치찌개"]);
const robot3 = new FoodPicker(["짜장면", "청국장", "김치찌개"]);

console.log(robot1.sayMenu === robot2.sayMenu); // true
console.log(robot1.sayHi === robot2.sayHi); // false, 프로토타입이 아닌 생성자 함수 내에서 생성한 메서드는 서로 다른 주소를 참조한다.

// ----------------------------------------------------------------
// 💡 우리가 객체지향 개념에서 만들었던 ‘나’ 와 ‘대상’ 객체를 생성자를 통해서
//  만들어 볼 수 있도록 코드를 수정해봅시다.

function Project(name = "", date = new Date(), isPersonal = true, skills = []) {
  this.name = name;
  this.date = new Date(date).toLocaleDateString();
  this.isPersonal = isPersonal ? "개인 프로젝트" : "팀 프로젝트";
  this.skills = skills;
}

Project.prototype.username = "Nor";
Project.prototype.makeProject = function () {
  console.log(`
	프로젝트명: ${this.name}
	프로젝트 진행 날짜: ${this.date}
	개인/팀: ${this.isPersonal}
	사용 기술: ${this.skills}
	`);
};

let project1 = new Project("나만의 메모장", "2023-04-19", true, [
  "html",
  "css",
  "javascript",
]);

project1.makeProject();
