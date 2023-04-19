// 💡 생성자 함수
// function Robot(name) {
//     this.name = name;
// }

// Robot.prototype.sayYourName = function () {
//     console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
// }

// 💡 클래스
class Robot {
  // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다.
  // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
  constructor(name) {
    this.name = name;
  }

  // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

const robot = new Robot("Nor");
console.log(robot); // Robot { name: 'Nor' }
robot.sayYourName(); // 삐리비리. 제 이름은 Nor입니다. 주인님.

const robot2 = new Robot("Nor2");
console.log(robot.sayYourName === robot2.sayYourName); // true, 클래스는 프로토타입으로 함수를 추가하지 않아도 적용된다.

// 💡 우리가 위에서 만들어본 여러분 자신의 생성자 함수를 class 문법으로 변경해봅시다.
class Project {
  constructor(name, date, isPersonal, skills) {
    this.name = name;
    this.date = new Date(date).toLocaleDateString();
    this.isPersonal = isPersonal ? "개인 프로젝트" : "팀 프로젝트";
    this.skills = skills;
  }

  makeProject() {
    console.log(`
		프로젝트명: ${this.name}
		프로젝트 진행 날짜: ${this.date}
		개인/팀: ${this.isPersonal}
		사용 기술: ${this.skills}
		`);
  }
}

const project1 = new Project("나만의 메모장", "2023-04-19", true, [
  "html",
  "css",
  "javascript",
]);

project1.makeProject();
