// local modules - jest
import runTest from "./jest/runTest";

// local files
import getTrulyArray from "./getTrulyArray";

const testCases = [
  {
    describe: "should return an array with truly values",
    it: "if the argument is valid",
    toBe: ["test", 9, true, Infinity, {}, []],
    cases: [[0, "test", "", NaN, 9, true, undefined, false, Infinity, {}, []]]
  },
  {
    describe: "should return an empty array",
    it: "if the argument is not valid",
    toBe: [],
    cases: [1, "", {}]
  }
];

const handler = ({ testCase, item }) => {
  expect(getTrulyArray(item)).toEqual(testCase.toBe);
};

runTest({ testCases, handler });
