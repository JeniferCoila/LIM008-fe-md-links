"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.walkTheDirectory = exports.filterMdPath = exports.validateLinks = exports.getLinks = exports.mdlinks = exports.mdPathContent = exports.regex = exports.isDirectory = exports.fileContents = exports.fileNameExt = exports.dirContent = exports.relToAbs = exports.unionpath = exports.isPathAbsolute = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* In this file we gather all the functions that will help us in our library*/
var isPathAbsolute = function isPathAbsolute(inputPath) {
  return _path.default.isAbsolute(inputPath);
};

exports.isPathAbsolute = isPathAbsolute;

var unionpath = function unionpath(inputPath) {
  return _path.default.join(inputPath);
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
var regex = /(^|[^!])\[([^\[\]]+)\]\s*\(([^)]+.+)\)/gm;
exports.regex = regex;

var mdPathContent = function mdPathContent(inputPath) {
  return inputPath.map(function (mdFile) {
    return getLinks(mdFile);
  });
};

exports.mdPathContent = mdPathContent;

var mdlinks = function mdlinks() {
  var newpath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : relToAbs(_path.default);
  return mdPathContent(filterMdPath(isDirectory("".concat(newpath)) ? walkTheDirectory("".concat(newpath)) : ["".concat(newpath)]));
};

exports.mdlinks = mdlinks;

var getLinks = function getLinks(path) {
  var arrObj = [];
  var content = fileContents(path);
  var arrLinks = regex.exec(content);

  while (arrLinks !== null) {
    arrObj.push({
      href: arrLinks[3],
      text: arrLinks[2],
      file: path
    });
    arrLinks = regex.exec(content);
  }

  return arrObj;
};

exports.getLinks = getLinks;

var validateLinks = function validateLinks(path) {
  var links = mdlinks(path);
  var arrLinks = links.map(function (link) {
    return (0, _nodeFetch.default)(link.href).then(function (response) {
      if (response.status >= 200 && response.status < 400) {
        link.status = response.status;
        link.statusText = response.statusText;
      } else {
        link.status = response.status;
        link.statusText = 'fail';
      }
    });
  });
  return Promise.all(arrLinks).then(function () {
    return console.log(links);
  }).catch(function (error) {
    return {
      error: error
    };
  });
};

exports.validateLinks = validateLinks;

var filterMdPath = function filterMdPath(inputPath) {
  return inputPath.filter(function (file) {
    return fileNameExt(file) === '.md';
  });
};

exports.filterMdPath = filterMdPath;

var walkTheDirectory = function walkTheDirectory(inputPath) {
  var arrMdPath = [];
  dirContent(inputPath).forEach(function (file) {
    var newpath = relToAbs(_path.default.join(inputPath, file));
    isDirectory(newpath) ? arrMdPath = arrMdPath.concat(walkTheDirectory(newpath)) : arrMdPath.push(newpath);
  });
  return arrMdPath;
};

exports.walkTheDirectory = walkTheDirectory;
console.log(validateLinks("C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\pruebas\\learnyounode\\program\\olo\\lorem-forus.md"));