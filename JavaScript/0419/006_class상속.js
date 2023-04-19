class Robot {
  constructor(name) {
    this.name = name;
  }

  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

// 💡 클래스 상속: extends
// ⚠️ super 사용시 주의할 점
// - 만약 파생 클래스에 생성자 함수를 사용하고 싶다면 반드시 생성자 함수안에서 super 함수를 사용해야합니다.
// - 파생클래스에 생성자 함수가 없다면 super 함수가 자동으로 호출되어 부모 클래스의 프로퍼티를 상속 받게 합니다.
// - 생성자 함수에서 this 값을 사용할 경우 super 함수는 반드시 this 보다 먼저 실행되어야 합니다.
// - 파생 클래스가 아닌 클래스에서 사용하면 에러가 발생합니다.
class BabyRobot extends Robot {
  constructor(name) {
    super(name);
    this.ownName = "아이크";
  }

  sayBabyName() {
    // 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다.
    // 때문에 this로 접근 할 수 있습니다.
    this.sayYourName();
    console.log("Suceeding you, Father!");
  }
}

// 💡 소시지를 만드는 클래스 정의하기
// 1. 생성자 함수는 두 가지 매개변수를 전달 받을 수 있으며
//    전달되는 매개변수에 따라 소시지의 맛이 결정됩니다.
// 2. 소시지 객체는 taste 라는 메서드가 존재합니다.
//    생성자함수에서 전달받은 재료에 따라 맛을 나타내는 콘솔로그를 출력하는 역할을 합니다.
//    (예시 : ‘소고기’ 와 ‘파’ 를 매개변수로 전달하였을 경우, ‘소고기와 파 맛이 난다!’ 는 콘솔 메세지를 출력합니다.)
// 3. 소시지 클래스를 상속받는 FiresSausage 파생클래스를 생성해봅니다.
//    파생클래스의 taste 메서드를 실행하면 콘솔 메세지에 불맛이 나기 시작합니다.

class Sausage {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  taste() {
    console.log(`${this.ingredients.join(", ")} 맛이 난다!`);
  }
}

class FiresSausage extends Sausage {
  constructor(ingredients) {
    super(ingredients);
  }

  fireTaste() {
    this.taste();
    console.log("불맛이 나기 시작합니다...");
  }
}

const sausage = new FiresSausage(["소고기", "파"]);
sausage.fireTaste();
