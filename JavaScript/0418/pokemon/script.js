const lists = document.querySelector(".list-item");
let curWidth = window.innerWidth;
let count = 0;

window.addEventListener("resize", () => {
  curWidth = window.innerWidth;
});

window.addEventListener("click", (e) => {
  e.clientX <= curWidth / 2 ? count++ : count--;

  lists.style.setProperty(
    "transform",
    `translate(-50%, -50%) rotateY(calc((360deg / 7) * ${count}))`
  );
});
