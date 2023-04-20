//* 💡 간단한 투두 리스트 기능 구현해보기
// 1. 해야할 일 Todo 클래스 (내용, 상태 두 가지 프로퍼티를 가집니다.)

// 2. Todo 클래스는 상태를 변경하는 changeState 메서드를 가집니다.

// 3. 할일의 목록을 관리하는 관리자를 추상화한 TodoManager 클래스 (할일 목록을 프로퍼티로 가집니다.)

// 4. 할 일을 저장하고(addItem), 할 일의 목록을 보여주며(getItems), 할 일의 남은 갯수를 반환하는(getLeftTodoCount) 세 가지 메소드를 가집니다.

class Todo {
  constructor(content, isDone = false) {
    this.content = content;
    this.isDone = isDone;
  }

  changeState() {
    this.isDone = !this.isDone;
  }
}

class TodoManager {
  constructor() {
    this.todoList = [];
  }

  addItem(newTodo, isDone = false) {
    const todo = new Todo(newTodo, isDone);
    this.todoList.push(todo);
  }

  getItems() {
    return this.todoList;
  }

  getLeftTodoCount() {
    return this.todoList.filter((el) => el.isDone === false).length;
  }
}

const manager = new TodoManager();
manager.addItem("양치하기");
manager.addItem("알고리즘 문제 풀기");
console.log(manager.getItems());
// [
//   Todo { content: '양치하기', isDone: false },
//   Todo { content: '알고리즘 문제 풀기', isDone: false }
// ]
console.log(manager.getLeftTodoCount()); // 2

manager.getItems()[0].changeState();
// 현재 manager addItem() 메서드로 new Todo() 생성자를 통해
// -- todo 인스턴스를 생성하기 때문에
// -- Todo 생성자의 changeState() 메서드를 사용할 수 있다.

console.log(manager.getItems());
// [
//   Todo { content: '양치하기', isDone: true },
//   Todo { content: '알고리즘 문제 풀기', isDone: false }
// ]
