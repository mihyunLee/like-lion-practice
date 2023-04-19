const me = {
  name: "웨이드",
  address: "제주도 제주시 인다 1길",
  phoneNum: "010-8001-6536",

  teaching: function (myStudent) {
    myStudent.levelUp();
  },
};

const student = {
  level: 1,
  levelUp: function () {
    this.level++;
    console.log(this.level);
  },
};

const nor = {
  name: "노르",
  isLikeLionStudent: true,
  project: 1,
  rank: "bronze",

  studying: function () {
    this.project++;
    this.rank = this.project >= 10 ? "grand-master" : "bronze";
    console.log(
      `현재 진행한 프로젝트: ${this.project} 현재 랭크: ${this.rank}`
    );
  },
};

me.teaching(student);

nor.studying();
