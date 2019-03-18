import fetch from 'node-fetch';

export const validateLinks = (objLink) => {
  const arrLinks = objLink.map(obj => new Promise((resolve) => {
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
      }).catch(response => {
        obj.status = 'No es una URL válida';
        obj.statusText = 'fail';
        resolve(obj);
      });
  }));
  return Promise.all(arrLinks);
};
