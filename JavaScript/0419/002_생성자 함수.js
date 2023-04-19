function Project(name = "", date = new Date(), isPersonal = true, skills = []) {
  this.name = name;
  this.date = new Date(date).toLocaleDateString();
  this.isPersonal = isPersonal ? "개인 프로젝트" : "팀 프로젝트";
  this.skills = skills;

  this.makeProject = function () {
    console.log(`
		프로젝트명: ${this.name}
		프로젝트 진행 날짜: ${this.date}
		개인/팀: ${this.isPersonal}
		사용 기술: ${this.skills}
		`);
  };
}

let project1 = new Project("나만의 메모장", "2023-04-19", true, [
  "html",
  "css",
  "javascript",
]);

project1.makeProject();
