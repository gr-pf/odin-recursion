import { mergeSort } from "./mergeSort.js";

test("Sort empty array", () => {
  expect(mergeSort([])).toStrictEqual([]);
});

test("Sort array with one value", () => {
  expect(mergeSort([1])).toStrictEqual([1]);
});

test("Sort array with two sorted values", () => {
  expect(mergeSort([1, 2])).toStrictEqual([1, 2]);
});

test("Sort array with two unsorted values", () => {
  expect(mergeSort([2, 1])).toStrictEqual([1, 2]);
});

test("Sort array with value 73", () => {
  expect(mergeSort([73])).toStrictEqual([73]);
});

test("Sort array with sorted values", () => {
  expect(mergeSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
});

test("Sort array with unsorted values", () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toStrictEqual([
    0, 1, 1, 2, 3, 5, 8, 13,
  ]);
});

test("Sort array with another set of unsorted values", () => {
  expect(mergeSort([105, 79, 100, 110])).toStrictEqual([79, 100, 105, 110]);
});
