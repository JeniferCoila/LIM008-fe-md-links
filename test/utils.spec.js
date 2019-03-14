import {
  isPathAbsolute, 
  relToAbs, 
  dirContent, 
  fileNameExt, 
  fileContents, 
  isDirectory,
  unionpath,
  itExists
} from '../src/utils/util.js';

const inputPath = `${process.cwd()}\\test\\dir\\folder\\lorem-three.md`;
const inputDir = `${process.cwd()}\\test\\dir`;

describe('isPathAbsolute', () => {
  it('must be a function', () => {
    expect(typeof isPathAbsolute).toBe('function');
  });
  it('should return a boolean', () => {
    expect(isPathAbsolute(inputPath)).toEqual(true);
  });
});

describe('relToAbs', () => {
  it('must be a function', () => {
    expect(typeof relToAbs).toBe('function');
  });
  it('should return an absolute path', () => {
    expect(relToAbs('test\\dir\\folder\\lorem-three.md')).toEqual(inputPath);
  });
});


describe('dirContent', () => {
  it('must be a function', () => {
    expect(typeof dirContent).toBe('function');
  });
  it('should return an array of paths', () => {
    expect(dirContent(inputDir)).toEqual(['archivo-de-txto.txt', 'folder', 'lorem-two.md', 'lorem.md']);
  });
});

describe('fileNameExt', () => {
  it('must be a function', () => {
    expect(typeof fileNameExt).toBe('function');
  });
  it('should return an array of paths', () => {
    expect(fileNameExt(inputPath)).toEqual('.md');
  });
});

describe('fileContents', () => {
  it('must be a function', () => {
    expect(typeof fileContents).toBe('function');
  });
  it('should return a string', () => {
    expect(fileContents(inputPath)).toEqual('Lorem ipsum dolor sit amet [El lms tu terror](https://lms.laboratoria.la/courses)');
  });
});


describe('isDirectory', () => {
  it('must be a function', () => {
    expect(typeof isDirectory).toBe('function');
  });
  it('should return a boolean', () => {
    expect(isDirectory(inputDir)).toEqual(true);
  });
});

describe('unionpath', () => {
  it('must be a function', () => {
    expect(typeof unionpath).toBe('function');
  });
  it('should return a boolean', () => {
    expect(unionpath(inputDir)).toEqual(true);
  });
});