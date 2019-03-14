"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _path = require("./utils/path");

var _getlinks = require("./utils/getlinks.js");

var _validate = require("./utils/validate.js");

var _util = require("./utils/util.js");

/* In this file we call functions from utils, using parameters */

/* console.log(process.argv); */
var mdLinks = function mdLinks(path, options) {
  return new Promise(function (resolve, reject) {
    if ((0, _util.itExists)(path)) {
      var arrMds = (0, _path.mdPathArr)(path);

      if (arrMds.length === 0) {
        reject('No se encontraron archivos .md');
      } else {
        var arrObjLinks = (0, _getlinks.getObjectLinks)(arrMds);

        if (options.validate) {
          (0, _validate.validateLinks)(arrObjLinks).then(function (res) {
            return resolve(res);
          });
        } else {
          resolve(arrObjLinks);
        }
      }
    } else {
      reject('Ingrese una ruta válida');
    }
  });
};

exports.mdLinks = mdLinks;