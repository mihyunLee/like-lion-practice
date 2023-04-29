const surveyForm = document.querySelector("#mainForm");
const progressBar = surveyForm.querySelector(".bar-progress");
const inp = surveyForm.querySelectorAll("input");
const message = surveyForm.querySelector(".msg-notice");

surveyForm.addEventListener("input", () => {
  let count = 0;

  inp.forEach((el) => el.value.length > 0 && count++);

  progressBar.value = 100 * (count / inp.length);

  if (progressBar.value === 100) {
    message.textContent = "모든 질문에 응답하셨습니다. 제출해주세요.";
  } else {
    message.textContent = "설문지를 작성하세요!";
  }
});

surveyForm.addEventListener("click", (e) => {
  if (e.target.type === "reset") {
    progressBar.value = 0;
  }

  if (e.target.type === "submit" && progressBar.value === 100) {
    alert("설문에 참여해주셔서 감사합니다🎉");
  }
});

// * 강사님 코드
// const mainForm = document.querySelector("#mainForm");
// const progressBar = mainForm.querySelector(".bar-progress");
// const message = mainForm.querySelector(".msg-notice");
// const inputs = mainForm.querySelectorAll("input");
// const btnReset = mainForm.querySelector('button[type="reset"]');

// mainForm.addEventListener("keyup", () => {
//   let validCounter = 0;

//   inputs.forEach((item) => {
//     if (item.validity.valid) {
//       validCounter++;
//     }
//   });

//   switch (validCounter) {
//     case 1:
//       message.textContent = "시작했습니다!";
//       progressBar.setAttribute("value", "20");
//       break;
//     case 2:
//       message.textContent = "다음으로 가볼까요!";
//       progressBar.setAttribute("value", "40");
//       break;
//     case 3:
//       message.textContent = "절반지났습니다!!";
//       progressBar.setAttribute("value", "60");
//       break;
//     case 4:
//       message.textContent = "거의 끝났어요!";
//       progressBar.setAttribute("value", "80");
//       break;
//     case 5:
//       message.textContent = "고생하셨습니다!";
//       progressBar.setAttribute("value", "100");
//       break;
//     default:
//       message.textContent = "설문지를 작성하세요";
//       progressBar.setAttribute("value", "0");
//       break;
//   }

//   btnReset.addEventListener("click", () => {
//     message.textContent = "설문지를 작성하세요!";
//     progressBar.setAttribute("value", "0");
//   });
// });
