
/* Here receives the input from the user, in this case it's the path and the chosen options(validate or stats)*/

/* It's like dom, messages like --help can be here too */

import {mdPathContent, isDirectory, filterMdPath, walkTheDirectory} from './utils/util.js';

export const mdlinks = (newpath = relToAbs(path)) => 
  mdPathContent(filterMdPath(isDirectory(`${newpath}`) ? 
    walkTheDirectory(`${newpath}`) : [`${newpath}`])).map((content) => 
    content.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm));
