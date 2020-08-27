// local modules - jest
import runTest from "./jest/runTest";

// local files
import getURLWithoutTrackingParameters from "./getURLWithoutTrackingParameters";

const testCases = [
  {
    describe: "should return an URL without parameters",
    it: "if the argument is valid",
    toBe: "http://google.com/",
    cases: [
      "http://google.com/?utm_source=value&utm_medium=value&utm_campaign=value&utm_term=value&utm_content=value"
    ]
  },
  {
    describe: "should return an URL without parameters",
    it: "if the argument is valid",
    toBe: "http://facebook.com/",
    cases: [
      "http://facebook.com/?ad_id=value&adset_id=value&campaign_id=value&ad_name=value&adset_name=value&campaign_name=value&placement=value&site_source_name=value"
    ]
  },
  {
    describe: "should return an URL without parameters",
    it: "if the argument is valid",
    toBe: "http://google.com/?a=123",
    cases: [
      "http://google.com/?a=123&utm_source=value&utm_medium=value&utm_campaign=value&utm_term=value&utm_content=value"
    ]
  }
];

const handler = ({ testCase, item }) => {
  expect(getURLWithoutTrackingParameters(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });
