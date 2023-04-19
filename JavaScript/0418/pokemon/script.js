const arrPic = [
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/jammanbo.png",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/ev.png?raw=true",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/mazayoung.png?raw=true",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/mobugi.png",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/nyaong.png",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/pulin.png",
  "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/weirdseed.png",
];
const lists = document.querySelector(".list-item");
let curWidth = window.innerWidth;

arrPic.forEach((item) => {
  const elLi = document.createElement("li");
  elLi.innerHTML = `<img src="${item}" alt="">`;
  lists.appendChild(elLi);
});

const items = document.querySelectorAll(".list-item li");
const radius = (items[0].offsetWidth * items.length) / 3.14 / 2;
const angle = 360 / items.length;
let currAngle = 0;

items.forEach((item, index) => {
  item.style.transform = `rotateY(${angle * index}deg) translateZ(${radius}px)`;
});

document.addEventListener("resize", () => {
  curWidth = window.innerWidth;
});

document.addEventListener("click", (e) => {
  e.clientX <= curWidth / 2 ? (currAngle += angle) : (currAngle -= angle);

  lists.style.setProperty(
    "transform",
    `translate(-50%, -50%) rotateY(${currAngle}deg)`
  );
});
