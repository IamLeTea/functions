// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const checkIsArray = require("../checkIsArray");

const testCases = [
  {
    describe: "should return true",
    it: "if the argument is an array",
    toBe: true,
    cases: [[], [123, 234]]
  },
  {
    describe: "should return false",
    it: "if the argument isn't an array",
    toBe: false,
    cases: [null, undefined, NaN, Infinity, 123, "123", {}]
  }
];

const handler = ({ testCase, item }) => {
  expect(checkIsArray(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
