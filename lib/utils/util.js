"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.walkTheDirectory = exports.filterMdPath = exports.stats = exports.uniqueLinks = exports.totalLinks = exports.brokenLinks = exports.validateLinks = exports.getLinks = exports.getObjectLinks = exports.mdPathArr = exports.regex = exports.isDirectory = exports.fileContents = exports.fileNameExt = exports.dirContent = exports.relToAbs = exports.unionpath = exports.isPathAbsolute = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var mdPathArr = function mdPathArr(inputPath) {
  var newPath = relToAbs(inputPath);
  return filterMdPath(isDirectory(newPath) ? walkTheDirectory(newPath) : [newPath]);
};

exports.mdPathArr = mdPathArr;

var getObjectLinks = function getObjectLinks(inputPath) {
  return inputPath.length === 1 ? getLinks(inputPath.toString()) : inputPath.reduce(function (fileA, fileB) {
    return getLinks(fileA).concat(getLinks(fileB));
  });
};

exports.getObjectLinks = getObjectLinks;

var getLinks = function getLinks(inputPath) {
  var arrObj = [];
  var content = fileContents(inputPath);
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

var validateLinks = function validateLinks(links) {
  var arrLinks = links.map(function (link) {
    return new Promise(function (resolve, reject) {
      (0, _nodeFetch.default)(link.href).then(function (response) {
        if (response.status >= 200 && response.status < 400) {
          link.status = response.status;
          link.statusText = response.statusText;
          resolve(link);
        } else {
          link.status = response.status;
          link.statusText = 'fail';
          resolve(link);
        }
      }).catch(function (link) {
        link.status = 'No es una dirección válida';
        link.statusText = 'fail';
        resolve(link);
      });
    });
  });
  return Promise.all(arrLinks);
};

exports.validateLinks = validateLinks;

var brokenLinks = function brokenLinks(arrObj) {
  return arrObj.filter(function (obj) {
    return obj.statusText !== 'OK';
  }).length;
};

exports.brokenLinks = brokenLinks;

var totalLinks = function totalLinks(arrObj) {
  return arrObj.length;
};

exports.totalLinks = totalLinks;

var uniqueLinks = function uniqueLinks(arrObj) {
  return _toConsumableArray(new Set(arrObj.map(function (obj) {
    return obj.href;
  }))).length;
};
/* export const statsValidate = (promise) => {
  const valObj = {};
  promise.then((arrObj) => {  
    valObj.total = totalLinks(arrObj);
    valObj.broken = brokenLinks(arrObj);
    valObj.unique = uniqueLinks(arrObj);
  });
  return valObj;
}; */


exports.uniqueLinks = uniqueLinks;

var stats = function stats(arrObj) {
  var valObj = {
    total: totalLinks(arrObj),
    unique: uniqueLinks(arrObj),
    broken: brokenLinks(arrObj)
  };
  return valObj;
};

exports.stats = stats;

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
}; // validateLinks('C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\pruebas\\learnyounode\\program\\olo\\lorem-forus.md')
// statsValidate(resultValidate)

/* statsValidate(mdLinks('C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\pruebas\\learnyounode\\program\\dir')).then((response) => console.log(response));  */


exports.walkTheDirectory = walkTheDirectory;