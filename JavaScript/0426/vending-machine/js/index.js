import ColaGenerator from "./classes/colaGenerator.js";
import VendingMachineEvents from "./classes/vendingMachineEvents.js";

// 인스턴스 생성
const colaGenerator = new ColaGenerator();
const vendingMachineEvents = new VendingMachineEvents();

// top-level await: 최상위 모듈에서 실행되는 await
await colaGenerator.setup(); // setup 또한 async 함수이므로 await를 해주어야 함
vendingMachineEvents.bindEvent();
