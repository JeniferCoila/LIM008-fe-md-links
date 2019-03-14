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
  it('must be a function', () => {
    expect(typeof walkTheDirectory).toBe('function');
  });
  it('should return an array of paths', () => {
    expect(walkTheDirectory(inputDir)).toEqual(outputWalk);
  });
});

  
describe('filterMdPath', () => {
  it('must be a function', () => {
    expect(typeof filterMdPath).toBe('function');
  });
  it('should return an array of paths', () => {
    expect(filterMdPath(outputWalk)).toEqual(outputFilePaths);
  });
});


describe('mdPathArr', () => {
  it('must be a function', () => {
    expect(typeof mdPathArr).toBe('function');
  });
  it('should return an array of paths', () => {
    expect(mdPathArr(inputPath)).toEqual([inputPath]);
    expect(mdPathArr(inputDir)).toEqual(outputFilePaths);
  });
});