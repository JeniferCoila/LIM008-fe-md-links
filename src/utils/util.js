
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

export const mdPathContent = inputPath => 
  inputPath.map((mdFile) => getLinks(mdFile));

export const mdlinks = (newpath = relToAbs(path)) => 
  mdPathContent(filterMdPath(isDirectory(`${newpath}`) 
    ? walkTheDirectory(`${newpath}`) 
    : [`${newpath}`]));

export const getLinks = (path) => {
  const arrObj = [];
  const content = fileContents(path);
  let arrLinks = regex.exec(content);
  while (arrLinks !== null) {
    arrObj.push({
      href: arrLinks[3],
      text: arrLinks[2],
      file: path
    });
    arrLinks = regex.exec(content);
  }
  return arrObj;
};

export const validateLinks = (path) => {
  const links = mdlinks(path);  
  const arrLinks = links.map((link) => fetch(link.href)
    .then((response) => {
      if (response.status >= 200 && response.status < 400) {
        link.status = response.status;
        link.statusText = response.statusText;
      } else {
        link.status = response.status;
        link.statusText = 'fail';
      }
    }));
  return Promise.all(arrLinks)
    .then(() => console.log(links))
    .catch((error) => ({
      error
    }));
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
console.log(validateLinks('C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\pruebas\\learnyounode\\program\\olo\\lorem-forus.md'));


