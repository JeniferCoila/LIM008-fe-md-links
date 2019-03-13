"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _util = require("./utils/util.js");

/* In this file we call functions from utils, using parameters */

/* console.log(process.argv); */
var mdLinks = function mdLinks(path, options) {
  return new Promise(function (resolve) {
    var arrMds = (0, _util.mdPathArr)(path);

    if (arrMds.length === 0) {
      console.log('No se encontraron archivos .md');
    } else {
      var arrObjLinks = (0, _util.getObjectLinks)(arrMds);

      if (options.validate) {
        (0, _util.validateLinks)(arrObjLinks).then(function (res) {
          return resolve(res);
        });
      } else {
        resolve(arrObjLinks);
      }
    }
  });
};

exports.mdLinks = mdLinks;