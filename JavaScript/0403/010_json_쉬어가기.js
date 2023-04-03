// https://json-generator.com/

let 회원정보 = [
  {
    _id: "642a61e4b0433d7cc2f19560",
    index: 0,
    age: 24,
    eyeColor: "brown",
    name: "Landry Collier",
    gender: "male",
    company: "COMTREK",
  },
  {
    _id: "642a61e4f2f5d03ace3ed169",
    index: 1,
    age: 22,
    eyeColor: "blue",
    name: "Stewart Kelly",
    gender: "male",
    company: "STRALUM",
  },
  {
    _id: "642a61e46a3b2b50a3a8052d",
    index: 2,
    age: 27,
    eyeColor: "brown",
    name: "Teresa Ingram",
    gender: "female",
    company: "COSMETEX",
  },
  {
    _id: "642a61e48740bec6eecc77a8",
    index: 3,
    age: 36,
    eyeColor: "brown",
    name: "Susie Brady",
    gender: "female",
    company: "DUOFLEX",
  },
  {
    _id: "642a61e48742c5da8e0a774b",
    index: 4,
    age: 27,
    eyeColor: "blue",
    name: "Merle Rosa",
    gender: "female",
    company: "TURNLING",
  },
  {
    _id: "642a61e4f9aa55b5fe7cb566",
    index: 5,
    age: 24,
    eyeColor: "brown",
    name: "Natasha Huff",
    gender: "female",
    company: "TECHADE",
  },
  {
    _id: "642a61e4cac777c1cf3e582b",
    index: 6,
    age: 25,
    eyeColor: "blue",
    name: "Beasley Barlow",
    gender: "male",
    company: "RETROTEX",
  },
];

console.log(회원정보[0]);
console.log(회원정보[0]["name"]);

let sum = 0;

for (let i = 0; i < 회원정보.length; i++) {
  sum += 회원정보[i]["age"];
}

let ageAvg = sum / 회원정보.length;
console.log(ageAvg.toFixed(2));
