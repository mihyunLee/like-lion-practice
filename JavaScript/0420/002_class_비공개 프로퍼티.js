class Robot {
  // # 키워드: 프로퍼티를 비공개로 전환 가능
  // 2021년에 나온 기능이라 그런지 아직 제대로 동작하지 않는 것 같다 ..
  #password;

  constructor(name, pw) {
    this.name = name;
    this.#password = pw;
  }

  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }

  getPassword() {
    return this.#password;
  }

  setPassword(pw) {
    this.#password = pw;
  }
}

const robot = new Robot("로봇", "1234");
robot.sayYourName(); // 삐리비리. 제 이름은 로봇입니다. 주인님.
robot.password = "0000"; // #없이 사용하면 값 변경도 가능하다...?

console.log(robot.#password); // #password에는 접근이 불가능하지만,
console.log(robot.password); // #이 없는 password로는 접근이 가능하다.
