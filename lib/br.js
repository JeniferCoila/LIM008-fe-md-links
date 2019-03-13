/* const options = {
  validate: false,
  stats: false
};


if (args.length === 1) {
  options.validate = true; 
  mdLinks(args[0], options).then(resp => resp.map(links => console.log(`\n Path :${links.file} \n Link : ${links.href}  \n texto : ${links.text}`)))

}
if (args.length === 2) {
  if (args[1] === '--validate') {
    options.validate = true;
    mdLinks(args[0], options).then(resp => resp.map(links => console.log(`\n Path :${links.file} \n Link : ${links.href} ${links.state} ${links.message} \n texto : ${links.text}`)))
  }
  
  if (args[1] === '--stats') {
    options.stats = true;
    statLinks(args[0]).then(resp => console.log(resp));
  }
} */
"use strict";