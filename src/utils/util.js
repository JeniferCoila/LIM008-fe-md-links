/* In this file we gather all the functions that will help us in our library*/

import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';

export const isPathAbsolute = inputPath => path.isAbsolute(inputPath);
export const unionpath = inputPath => path.join(inputPath);
export const relToAbs = inputPath => path.resolve(inputPath);
export const dirContent = inputPath => fs.readdirSync(inputPath);
export const fileNameExt = inputPath => path.extname(inputPath);
export const fileContents = inputPath => fs.readFileSync(inputPath).toString();
export const isDirectory = inputPath => fs.statSync(inputPath).isDirectory();
export const regex = /(^|[^!])\[([^\[\]]+)\]\s*\(([^)]+.+)\)/gm;

export const mdPathArr = (inputPath) => {
  const newPath = relToAbs(inputPath);
  return filterMdPath(isDirectory(newPath) 
    ? walkTheDirectory(newPath) 
    : [newPath]);
};

export const getObjectLinks = inputPath => 
  inputPath.length === 1 ?
    getLinks(inputPath.toString()) :
    inputPath.reduce((fileA, fileB) => getLinks(fileA).concat(getLinks(fileB)));

export const getLinks = (inputPath) => {
  const arrObj = [];
  const content = fileContents(inputPath);
  let arrLinks = regex.exec(content);
  while (arrLinks !== null) {
    arrObj.push({
      href: arrLinks[3],
      text: arrLinks[2].substr(0, 50), 
      file: inputPath
    });
    arrLinks = regex.exec(content);
  }  
  return arrObj;
};

export const validateLinks = (links) => {
  const arrLinks = links.map(link => new Promise((resolve, reject) => {
    fetch(link.href)
      .then((response) => {        
        if (response.status >= 200 && response.status < 400) {
          link.status = response.status;
          link.statusText = response.statusText;
          resolve(link);
        } else {
          link.status = response.status;
          link.statusText = 'fail';
          resolve(link);
        }
      }).catch(link => {
        link.status = 'No es una dirección válida';
        link.statusText = 'fail';
        resolve(link);
      });
  }));
  return Promise.all(arrLinks);
};

export const brokenLinks = (arrObj) => arrObj.filter(obj => 
  obj.statusText !== 'OK').length;

export const totalLinks = (arrObj) => arrObj.length;

export const uniqueLinks = (arrObj) => [...new Set(arrObj.map(obj => obj.href))].length;

export const stats = (arrObj) => {
  const valObj = {
    total: totalLinks(arrObj), 
    unique: uniqueLinks(arrObj),
    broken: brokenLinks(arrObj)
  };
  return valObj;
};


export const filterMdPath = inputPath => 
  inputPath.filter(file => fileNameExt(file) === '.md');

export const walkTheDirectory = (inputPath) => {
  let arrMdPath = [];
  dirContent(inputPath).forEach((file) => {
    let newpath = relToAbs(path.join(inputPath, file));
    (isDirectory(newpath) ? arrMdPath = arrMdPath.concat(walkTheDirectory(newpath)) : arrMdPath.push(newpath));
  });
  return arrMdPath;
};

