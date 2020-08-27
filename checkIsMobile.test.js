// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import checkIsMobile from "./checkIsMobile";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is mobile",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return !!userAgent.os.match(/android|ios/g);
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not mobile",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return !userAgent.os.match(/android|ios/g);
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsMobile()).toBe(testCase.toBe);
};

runTest({ testCases, handler });