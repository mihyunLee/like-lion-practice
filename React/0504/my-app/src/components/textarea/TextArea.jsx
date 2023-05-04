// 아래 코드의 문제점
// 1. class -> className
// 2. maxlength=3 -> maxlength={3}
// 3. readonly -> readOnly
// 4. maxlength -> maxLength
// 5. style={{backgroundColor: "blue"}}와 같이 객체 형태로 작성
// function TextArea() {
//   return (
//     <div class="wrapper">
//       <textarea
//         readonly
//         maxlength=3
//         style={"background-color: blue;"}
//       />
//     </div>
//   );
// }

export default function TextArea() {
  return (
    <div className="wrapper">
      <textarea readOnly maxLength={3} style={{ backgroundColor: "blue" }} />
    </div>
  );
}
