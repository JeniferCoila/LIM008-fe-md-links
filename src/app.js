/* In this file we call functions from utils, using parameters */

/* console.log(process.argv); */
import {
  mdPathArr,
  getObjectLinks,
  validateLinks,
  statsValidate
} from './utils/util.js';


export const mdLinks = (path, options) => { 
  return new Promise((resolve) => {
    const arrMds = mdPathArr(path);
    if (arrMds.length === 0) {
      console.log('No se encontraron archivos .md');
    } else {
      const arrObjLinks = getObjectLinks(arrMds);
      if (options.validate) {
        validateLinks(arrObjLinks).then(res => resolve(res));
      } else {
        resolve(arrObjLinks);
      }
    } 
  });
};

