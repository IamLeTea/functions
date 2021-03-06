// node modules
const checkIsArray = require("../checkIsArray");
const checkIsObject = require("../checkIsObject");
const checkIsString = require("../checkIsString");
const checkIsFunction = require("../checkIsFunction");

function getStringifyFromObject(parameter = {}) {
  let result = "";

  Object.keys(parameter).forEach((key, index, array) => {
    if (checkIsString(parameter[key])) {
      result += `${key}: "${getStringify(parameter[key])}"`;
    } else {
      result += `${key}: ${getStringify(parameter[key])}`;
    }

    if (index + 1 < array.length) {
      result += ", ";
    }
  });

  return `{${result}}`;
}

function getStringifyFromArray(parameter = []) {
  let result = "";

  parameter.forEach((item, index, array) => {
    if (checkIsString(item)) {
      result += `"${getStringify(item)}"`;
    } else {
      result += getStringify(item);
    }

    if (index + 1 < array.length) {
      result += ", ";
    }
  });

  return `[${result}]`;
}

function getStringify(parameter) {
  try {
    let result = "";

    if (checkIsArray(parameter)) {
      // array to string
      result += getStringifyFromArray(parameter);
    } else if (checkIsObject(parameter)) {
      // object to string
      result += getStringifyFromObject(parameter);
    } else if (checkIsFunction(parameter)) {
      // function to string
      result += parameter
        .toString()
        .replace(/\s+(?=(?:(?:[^"]*"){2})*[^"]*"[^"]*$)/g, "___") // handle whitespace in quotes
        .replace(/(const|let|var|typeof)[\s]+/g, "$1___") // handle whitespace between declare and variable
        .replace(/\n|\r|\s/g, "")
        .replace(/___/g, " ");
      // .replace(/\n|\r|((?<!(const)|let|var|typeof) )/g, ""); // is not working with safari - 2020.11.06
    } else if (checkIsString(parameter) && parameter) {
      // string to string
      result += parameter.replace(/"/g, '\\"');
    } else {
      // other to string
      result += parameter;
    }

    return result;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = getStringify;
