import { fibs } from "./fibonacci.js";

describe("Iter", () => {
  test("fibonnaci iter 1", () => {
    expect(fibs(1)).toStrictEqual([0]);
  });
  test("fibonnaci iter 2", () => {
    expect(fibs(2)).toStrictEqual([0, 1]);
  });
  test("fibonnaci iter 3", () => {
    expect(fibs(3)).toStrictEqual([0, 1, 1]);
  });
  test("fibonnaci iter 4", () => {
    expect(fibs(4)).toStrictEqual([0, 1, 1, 2]);
  });
  test("fibonnaci iter 5", () => {
    expect(fibs(5)).toStrictEqual([0, 1, 1, 2, 3]);
  });
  test("fibonnaci iter 8", () => {
    expect(fibs(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
