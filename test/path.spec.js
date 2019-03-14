import {
  walkTheDirectory, 
  filterMdPath,
  mdPathArr
} from '../src/utils/path.js';

const inputPath = `${process.cwd()}\\test\\dir\\folder\\lorem-three.md`;
const inputDir = `${process.cwd()}\\test\\dir`;

const outputWalk = [
  `${process.cwd()}\\test\\dir\\archivo-de-txto.txt`, 
  `${process.cwd()}\\test\\dir\\folder\\lorem-three.md`, 
  `${process.cwd()}\\test\\dir\\lorem-two.md`,
  `${process.cwd()}\\test\\dir\\lorem.md`
];
   
const outputFilePaths = [
  `${process.cwd()}\\test\\dir\\folder\\lorem-three.md`, 
  `${process.cwd()}\\test\\dir\\lorem-two.md`,
  `${process.cwd()}\\test\\dir\\lorem.md`
];
  

describe('walkTheDirectory', () => {
  it('should return an array of paths', () => {
    expect(walkTheDirectory(inputDir)).toEqual(outputWalk);
  });
});

  
describe('filterMdPath', () => {
  it('should return an array of md paths', () => {
    expect(filterMdPath(outputWalk)).toEqual(outputFilePaths);
  });
});


describe('mdPathArr', () => {
  it('should return an array of a md path', () => {
    expect(mdPathArr(inputPath)).toEqual([inputPath]);
  });
  it('should return an array of md paths', () => {
    expect(mdPathArr(inputDir)).toEqual(outputFilePaths);
  });
});