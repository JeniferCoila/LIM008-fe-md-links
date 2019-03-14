"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.walkTheDirectory = exports.filterMdPath = exports.mdPathArr = void 0;

var _util = require("./util.js");

var mdPathArr = function mdPathArr(inputPath) {
  var newPath = (0, _util.relToAbs)(inputPath);
  return filterMdPath((0, _util.isDirectory)(newPath) ? walkTheDirectory(newPath) : [newPath]);
};

exports.mdPathArr = mdPathArr;

var filterMdPath = function filterMdPath(inputPath) {
  return inputPath.filter(function (file) {
    return (0, _util.fileNameExt)(file) === '.md';
  });
};

exports.filterMdPath = filterMdPath;

var walkTheDirectory = function walkTheDirectory(inputPath) {
  var arrMdPath = [];
  (0, _util.dirContent)(inputPath).forEach(function (file) {
    var newpath = (0, _util.relToAbs)((0, _util.unionpath)(inputPath, file));
    (0, _util.isDirectory)(newpath) ? arrMdPath = arrMdPath.concat(walkTheDirectory(newpath)) : arrMdPath.push(newpath);
  });
  return arrMdPath;
};

exports.walkTheDirectory = walkTheDirectory;