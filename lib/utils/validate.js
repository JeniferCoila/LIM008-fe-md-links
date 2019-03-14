"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLinks = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateLinks = function validateLinks(objLink) {
  var arrLinks = objLink.map(function (obj) {
    return new Promise(function (resolve, reject) {
      (0, _nodeFetch.default)(obj.href).then(function (response) {
        if (response.status >= 200 && response.status < 400) {
          obj.status = response.status;
          obj.statusText = response.statusText;
          resolve(obj);
        } else {
          obj.status = response.status;
          obj.statusText = 'fail';
          resolve(obj);
        }
      }).catch(function (obj) {
        obj.status = 'No es una dirección válida';
        obj.statusText = 'fail';
        resolve(obj);
      });
    });
  });
  return Promise.all(arrLinks);
};

exports.validateLinks = validateLinks;