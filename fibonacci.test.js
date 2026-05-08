import { fibs, fibsRec } from "./fibonacci.js";

describe("Iter", () => {
  test("fibonacci iter 1", () => {
    expect(fibs(1)).toStrictEqual([0]);
  });
  test("fibonacci iter 2", () => {
    expect(fibs(2)).toStrictEqual([0, 1]);
  });
  test("fibonacci iter 3", () => {
    expect(fibs(3)).toStrictEqual([0, 1, 1]);
  });
  test("fibonacci iter 4", () => {
    expect(fibs(4)).toStrictEqual([0, 1, 1, 2]);
  });
  test("fibonacci iter 5", () => {
    expect(fibs(5)).toStrictEqual([0, 1, 1, 2, 3]);
  });
  test("fibonacci iter 8", () => {
    expect(fibs(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

describe("Recursion", () => {
  test("fibonacci rec 1", () => {
    expect(fibsRec(1)).toStrictEqual([0]);
  });
  test("fibonacci rec 2", () => {
    expect(fibsRec(2)).toStrictEqual([0, 1]);
  });
  test("fibonacci rec 3", () => {
    expect(fibsRec(3)).toStrictEqual([0, 1, 1]);
  });
  test("fibonacci rec 4", () => {
    expect(fibsRec(4)).toStrictEqual([0, 1, 1, 2]);
  });
  test("fibonacci rec 5", () => {
    expect(fibsRec(5)).toStrictEqual([0, 1, 1, 2, 3]);
  });
  test("fibonacci rec 8", () => {
    expect(fibsRec(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
