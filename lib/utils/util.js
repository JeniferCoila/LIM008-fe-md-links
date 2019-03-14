"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itExists = exports.isDirectory = exports.fileContents = exports.fileNameExt = exports.dirContent = exports.relToAbs = exports.unionpath = exports.isPathAbsolute = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* In this file we gather all the functions that will help us in our library*/
var isPathAbsolute = function isPathAbsolute(inputPath) {
  return _path.default.isAbsolute(inputPath);
};

exports.isPathAbsolute = isPathAbsolute;

var unionpath = function unionpath(inputPath, file) {
  return _path.default.join(inputPath, file);
};

exports.unionpath = unionpath;

var relToAbs = function relToAbs(inputPath) {
  return _path.default.resolve(inputPath);
};

exports.relToAbs = relToAbs;

var dirContent = function dirContent(inputPath) {
  return _fs.default.readdirSync(inputPath);
};

exports.dirContent = dirContent;

var fileNameExt = function fileNameExt(inputPath) {
  return _path.default.extname(inputPath);
};

exports.fileNameExt = fileNameExt;

var fileContents = function fileContents(inputPath) {
  return _fs.default.readFileSync(inputPath).toString();
};

exports.fileContents = fileContents;

var isDirectory = function isDirectory(inputPath) {
  return _fs.default.statSync(inputPath).isDirectory();
};

exports.isDirectory = isDirectory;

var itExists = function itExists(inputPath) {
  return _fs.default.existsSync(inputPath);
};

exports.itExists = itExists;