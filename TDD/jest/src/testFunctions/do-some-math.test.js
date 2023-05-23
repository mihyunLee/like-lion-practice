import {
  sum,
  substract,
  multiply,
  divide,
} from "../myFunctions/do-some-functions";

// test할 함수들을 묶어줄 때는 test() 가 아닌 describe()로 묶어준다.
describe("Math functions test", () => {
  it("두 가지 값을 더합니다.", () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum()).toBe(0);
    expect(sum(0, 0)).toBe(0);
    // expect(sum(0.1, 0.2)).toBe(0.3); // fail
  });

  it("두 가지 값을 뺍니다.", () => {
    expect(substract(3, 2)).toBe(1);
    expect(substract(3, 5)).toBe(-2);
  });

  it("두 가지 값을 곱합니다.", () => {
    expect(multiply(2, 5)).toBe(10);
  });

  it("두 가지 값을 나눕니다.", () => {
    expect(divide(4, 2)).toBe(2);
    expect(() => divide()).toThrowError("0으로 나눌 수 없습니다!");
    expect(divide(-2, 0.1)).toBe(-20);
  });
});
