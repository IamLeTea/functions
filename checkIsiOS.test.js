// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("./jest/runTest");

// local files
const checkIsiOS = require("./checkIsiOS");
const setUserAgent = require("./setUserAgent");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is iOS",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.os === "ios";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not iOS",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.os !== "ios";
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsiOS()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
