"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stats = exports.uniqueLinks = exports.totalLinks = exports.brokenLinks = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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