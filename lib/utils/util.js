"use strict";

/* In this file we gather all the functions that will help us in our library*/

/* import path from 'path';
import fs from 'fs'; */
var path = require('path');

var fs = require('fs');

require('babel-core').transform('code');

var isPathAbsolute = function isPathAbsolute(inputPath) {
  return path.isAbsolute(inputPath);
};

var relToAbs = function relToAbs(inputPath) {
  return path.resolve(inputPath);
};

var walkTheDirectory = function walkTheDirectory(inputPath) {
  return fs.readdirSync(inputPath);
};

var ext = function ext(inputPath) {
  return path.extname(inputPath);
};

var abs = function abs(inputPath) {
  var arr = [];
  walkTheDirectory(inputPath).forEach(function (file) {
    relToAbs(file).then(function () {
      ext(newpath) === '.md' ? arr.push(newpath) : console.log('error');
    });
  });
  return arr;
};

console.log(abs("C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir"));
/*  const readOnlyMd = (inputPath) => {
  const mdFiles = {};
  return mdFiles;
}; */