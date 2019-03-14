"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinks = exports.getObjectLinks = exports.regex = void 0;

var _util = require("./util.js");

var regex = /(^|[^!])\[([^\[\]]+)\]\s*\(([^)]+.+)\)/gm;
exports.regex = regex;

var getObjectLinks = function getObjectLinks(inputPath) {
  return inputPath.length === 1 ? getLinks(inputPath.toString()) : inputPath.reduce(function (fileA, fileB) {
    return getLinks(fileA).concat(getLinks(fileB));
  });
};

exports.getObjectLinks = getObjectLinks;

var getLinks = function getLinks(inputPath) {
  var arrObj = [];
  var content = (0, _util.fileContents)(inputPath);
  var arrLinks = regex.exec(content);

  while (arrLinks !== null) {
    arrObj.push({
      href: arrLinks[3],
      text: arrLinks[2].substr(0, 50),
      file: inputPath
    });
    arrLinks = regex.exec(content);
  }

  return arrObj;
};

exports.getLinks = getLinks;