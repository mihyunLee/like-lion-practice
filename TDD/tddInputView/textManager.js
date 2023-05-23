// 사용자가 입력한 값을 관리

class TextManager {
  constructor() {
    this.value = { data: "hello lions!" };
  }

  getValue() {
    return this.value.data;
  }

  setValue(newValue) {
    this.value = newValue;
  }
}
