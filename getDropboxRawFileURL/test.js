// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const getDropboxRawFileURL = require("../getDropboxRawFileURL");

const testCases = [
  {
    describe: "should return a raw file url.",
    it: "if argument is a valid path",
    toBe: "https://www.dropbox.com/s/0xp0v2cm3asbk0h/sample.jpg?raw=1",
    cases: ["0xp0v2cm3asbk0h/sample.jpg"]
  },
  {
    describe: "should return an empty string",
    it: "if argument is not string",
    toBe: "",
    cases: [1, {}, []]
  }
];

const handler = ({ testCase, item }) => {
  expect(getDropboxRawFileURL(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
