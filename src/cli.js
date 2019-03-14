#!/usr/bin/env node

import { mdLinks } from './app.js';
import { stats } from './utils/stats.js';

/* Here receives the input from the user, in this case it's the path and the chosen options(validate or stats)*/
/* It's like dom, messages like --help can be here too */

const options = {
  validate: false,
  stats: false
};

const argv = process.argv.slice(2);

if (argv.length === 0) {
  console.log('Inserta una ruta válida');
}

if (argv.length === 1) {
  mdLinks(argv[0], options)
    .then(arr => arr.forEach(obj => console.log(`File: ${obj.file}\nLink: ${obj.href}\nText: ${obj.text}\n`)))
    .catch(error => console.log(error));
}
 
if (argv.length === 2) {
  if (argv[1] === '--validate') {
    options.validate = true;
    mdLinks(argv[0], options)
      .then(arr => arr.forEach(obj => console.log(`File: ${obj.file}\nLink: ${obj.href}\nStatusText: ${obj.statusText}\nStatus: ${obj.status}\nText: ${obj.text}\n`)))
      .catch(error => console.log(error));
  } else if (argv[1] === '--stats') {
    options.stats = true;
    mdLinks(argv[0], options)
      .then(arr => console.log(`Total : ${stats(arr).total}\nUnique : ${stats(arr).unique}`))
      .catch(error => console.log(error));
  }
}

if (argv.length === 3) {
  if (argv[1] === '--validate' && argv[2] === '--stats' || argv[1] === '--stats' && argv[2] === '--validate') {
    options.validate = true;
    options.stats = true;
    mdLinks(argv[0], options)
      .then(arr => console.log(`Total : ${stats(arr).total}\nUnique : ${stats(arr).unique}\nBroken : ${stats(arr).broken}`))
      .catch(error => console.log(error));
  }
}