import "./App.css";
import List from "./components/list/List";
import Menu from "./components/menu/Menu";
import TextArea from "./components/textarea/TextArea";
import Clock from "./components/clock/Clock";

function App() {
  const someStyle = { backgroundColor: "royalblue", color: "white" };
  const 변수 = "value";
  const 함수 = () => console.log("함수");
  const 값 = false;

  return (
    <div className="App">
      {/** JSX안의 주석 */}

      <h1 style={someStyle}>안녕 라이캣!</h1>

      {/* Boolean 값이 true라면 생략해서 표현할 수 있다. */}
      <input type="checkbox" name="" id="" checked />
      <input type="checkbox" name="" id="" checked={true} />

      <Menu />
      <TextArea />

      {100 + 1}
      {/* 불필요한 문자열 연결에 대한 eslint 경고 발생 */}
      {/* {"hello" + "world"} */}
      {[1, 2, 3].map((x) => x ** 2)}
      {함수()}
      {변수}
      {값 ? "one" : "two"}

      <Clock />
      <List />
    </div>
  );
}

export default App;
