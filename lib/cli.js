#!/usr/bin/env node
"use strict";

var _app = require("./app.js");

var _stats = require("./utils/stats.js");

/* Here receives the input from the user, in this case it's the path and the chosen options(validate or stats)*/

/* It's like dom, messages like --help can be here too */
var options = {
  validate: false,
  stats: false
};
var argv = process.argv.slice(2);

if (argv.length === 0) {
  console.log('Inserta una ruta válida');
}

if (argv.length === 1) {
  (0, _app.mdLinks)(argv[0], options).then(function (arr) {
    return arr.forEach(function (obj) {
      return console.log("File: ".concat(obj.file, "\nLink: ").concat(obj.href, "\nText: ").concat(obj.text, "\n"));
    });
  }).catch(function (error) {
    return console.log(error);
  });
}

if (argv.length === 2) {
  if (argv[1] === '--validate') {
    options.validate = true;
    (0, _app.mdLinks)(argv[0], options).then(function (arr) {
      return arr.forEach(function (obj) {
        return console.log("File: ".concat(obj.file, "\nLink: ").concat(obj.href, "\nStatusText: ").concat(obj.statusText, "\nStatus: ").concat(obj.status, "\nText: ").concat(obj.text, "\n"));
      });
    }).catch(function (error) {
      return console.log(error);
    });
  } else if (argv[1] === '--stats') {
    options.stats = true;
    (0, _app.mdLinks)(argv[0], options).then(function (arr) {
      return console.log("Total : ".concat((0, _stats.stats)(arr).total, "\nUnique : ").concat((0, _stats.stats)(arr).unique));
    }).catch(function (error) {
      return console.log(error);
    });
  }
}

if (argv.length === 3) {
  if (argv[1] === '--validate' && argv[2] === '--stats' || argv[1] === '--stats' && argv[2] === '--validate') {
    options.validate = true;
    options.stats = true;
    (0, _app.mdLinks)(argv[0], options).then(function (arr) {
      return console.log("Total : ".concat((0, _stats.stats)(arr).total, "\nUnique : ").concat((0, _stats.stats)(arr).unique, "\nBroken : ").concat((0, _stats.stats)(arr).broken));
    }).catch(function (error) {
      return console.log(error);
    });
  }
}