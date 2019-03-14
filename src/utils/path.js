
import {relToAbs, isDirectory, fileNameExt, dirContent, unionpath } from './util.js';

export const mdPathArr = (inputPath) => {
  const newPath = relToAbs(inputPath);
  return filterMdPath(isDirectory(newPath) 
    ? walkTheDirectory(newPath) 
    : [newPath]);
};
  
export const filterMdPath = inputPath => 
  inputPath.filter(file => fileNameExt(file) === '.md');
  
export const walkTheDirectory = (inputPath) => {
  let arrMdPath = [];
  dirContent(inputPath).forEach((file) => {
    let newpath = relToAbs(unionpath(inputPath, file));
    (isDirectory(newpath) ? arrMdPath = arrMdPath.concat(walkTheDirectory(newpath)) : arrMdPath.push(newpath));
  });
  return arrMdPath;
};
  
  