import { createGlobalStyle } from "styled-components";
import Example from "./Components/Example";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
/* reset.css 사용하기 */
${reset}

span {
  color: red;
  font-size: 12px;
}
`;

function App() {
  // Taged Template Literals
  const name = "이호준";
  const age = 10;

  function 인사(문구, 이름, 나이) {
    // console.log(문구)
    console.log(문구, 이름, 나이); // ['이름은 ', '이고 나이는 ', '입니다.', raw: Array(3)] '이호준' 20

    return `${문구[0]}${이름}${문구[1]}${나이 + 나이}${문구[2]}`;
  }

  // 템플릿 리터럴은 ${}(자바스크립트 표현식)를 기준으로 문자열을 나누기 때문에
  // ${}를 제외한 문자열을 첫 번째 매개변수로, 그 다음 등장하는 ${}를 두 번째 매개변수로, ...
  const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age + age}입니다.`;

  console.log(인사문구);

  return (
    <>
      <GlobalStyle />
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example />
    </>
  );
}

export default App;
