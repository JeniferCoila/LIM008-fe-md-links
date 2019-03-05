
/* In this file we gather all the functions that will help us in our library*/

import path from 'path';
import fs from 'fs';

export const isPathAbsolute = (inputPath) => path.isAbsolute(inputPath);
export const relToAbs = inputPath => path.resolve(inputPath);
export const dirContent = inputPath => fs.readdirSync(inputPath);
export const fileNameExt = inputPath => path.extname(inputPath);
export const content = inputPath => fs.readFileSync(inputPath).toString();
export const isDirectory = inputPath => fs.statSync(inputPath).isDirectory();
export const unionpath = inputPath => path.join(inputPath);
export const realpathSync = inputPath => fs.realpathSync(inputPath);

export const mdPathContent = inputPath => inputPath.map((mdFile) => content(mdFile));

export const filterMdPath = inputPath => inputPath.filter(file => fileNameExt(file) === '.md');

export const walkTheDirectory = (inputPath) => {
  let arrMdPath = [];
  dirContent(inputPath).forEach((file) => {
    let newpath = path.join(inputPath, file);
    (isDirectory(newpath) ? arrMdPath = arrMdPath.concat(walkTheDirectory(newpath)) : arrMdPath.push(newpath));
  });
  return arrMdPath;
};

