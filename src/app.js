/* In this file we call functions from utils, using parameters */

/* console.log(process.argv); */

import bl from 'bl';

response.pipe(bl(function(err, data) {/* ... */}));