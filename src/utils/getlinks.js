
import {fileContents} from './util.js';

export const regex = /(^|[^!])\[([^\[\]]+)\]\s*\(([^)]+.+)\)/gm;

export const getObjectLinks = inputPath => 
  inputPath.length === 1 ?
    getLinks(inputPath.toString()) :
    inputPath.reduce((fileA, fileB) =>  
      getLinks(fileA).concat(getLinks(fileB)));

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