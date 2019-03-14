import fetch from 'node-fetch';

export const validateLinks = (objLink) => {
  const arrLinks = objLink.map(obj => new Promise((resolve, reject) => {
    fetch(obj.href)
      .then((response) => {        
        if (response.status >= 200 && response.status < 400) {
          obj.status = response.status;
          obj.statusText = response.statusText;
          resolve(obj);
        } else {
          obj.status = response.status;
          obj.statusText = 'fail';
          resolve(obj);
        }
      }).catch(obj => {
        obj.status = 'No es una dirección válida';
        obj.statusText = 'fail';
        resolve(obj);
      });
  }));
  return Promise.all(arrLinks);
};