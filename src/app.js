/* In this file we call functions from utils, using parameters */

/* console.log(process.argv); */
import {mdPathArr} from './utils/path';
import {getObjectLinks} from './utils/getlinks.js';
import {validateLinks} from './utils/validate.js';
import {itExists} from './utils/util.js';

export const mdLinks = (path, options) => { 
  return new Promise((resolve, reject) => {
    if (itExists(path)) { 
      const arrMds = mdPathArr(path);
      if (arrMds.length === 0) {
        reject('No se encontraron archivos .md');
      } else {
        const arrObjLinks = getObjectLinks(arrMds);
        if (options.validate) {
          validateLinks(arrObjLinks).then(res => resolve(res));
        } else {
          resolve(arrObjLinks);
        }
      } 
    } else {
      reject('Ingrese una ruta válida');
    }
  });
};

