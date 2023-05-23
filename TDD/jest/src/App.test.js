import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   // render : 인자로 받는 JSX의 가상돔을 생성
//   // '인자로 받는 컴포넌트를 렌더링했다면~'
//   render(<App />);
//   // getByText: 인자로 전달된 텍스트를 가지는 돔 안의 요소를 찾는다.
//   const linkElement = screen.getByText(/learn react/i);
//   // expect : 기대한 결과가 성공인지 실패인지 판단
//   // toBeInTheDocument : matcher 함수, 제스민의 toBe와 같은 동작
//   expect(linkElement).toBeInTheDocument();
// });

test("버튼이 제대로 동작하고 있습니까?", () => {
  render(<App />);

  // screen : 컴포넌트에 접근할 수 있음, 여기서는 App 컴포넌트를 렌더했으므로 App에 접근한다.
  // getByRole : aria에서 사용하는 요소의 역할을 의미하는 속성을 찾는다.
  // 특정 요소는 role을 명시하지 않아도 암묵적으로 가지고 있다.
  // 두 번째 인자로는 해당 요소 안의 어떤 값을 찾아서 가져올지 명시한다.
  const button = screen.getByRole("button", { name: "change to blue" });

  // toHaveStyle : 요소가 특정한 CSS 스타일을 가지고 있는지 체크
  // 객체를 인자로 전달한다.
  expect(button).toHaveStyle({ backgroundColor: "red" });

  // fireEvent : 가상돔과의 상호작용이 가능하도록 하는 객체
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });

  // toBe : 앞에 있는 대상이 반환하는 값과 인자의 값이 같아야 한다.
  // toBeInTheDocument : 인자의 컴포넌트 안에 해당 요소가 있어야 한다.
  expect(button.textContent).toBe("change to red");
});
