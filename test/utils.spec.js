import {
  isPathAbsolute, 
  relToAbs, 
  walkTheDirectory, 
  dirContent, 
  fileNameExt, 
  fileContents, 
  isDirectory,
  mdPathLinks,
  filterMdPath
} from '../src/utils/util.js';


const outputContent = [`Lorem ipsum dolor sit amet
 
  <http://joedicastro.com>`, ];

const outputWalk = [
  'C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir\\archivo-de-txto.txt',
  'C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir\\folder\\lorem-three.md', 
  'C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir\\lorem-two.md',
  'C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir\\lorem.md'
];
 
const outputFilePaths = [
  'C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir\\folder\\lorem-three.md', 
  'C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir\\lorem-two.md',
  'C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir\\lorem.md',
];
describe('isPathAbsolute', () => {
  it('must be a function', () => {
    expect(typeof isPathAbsolute).toBe('function');
  });
  it('should return a boolean', () => {
    expect(isPathAbsolute('C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir\\folder\\lorem-three.md')).toEqual(true);
  });
});

describe('relToAbs', () => {
  it('must be a function', () => {
    expect(typeof relToAbs).toBe('function');
  });
  it('should return an absolute path', () => {
    expect(relToAbs('test\\dir\\folder\\lorem-three.md')).toEqual('C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir\\folder\\lorem-three.md');
  });
});


describe('dirContent', () => {
  it('must be a function', () => {
    expect(typeof dirContent).toBe('function');
  });
  it('should return an array of paths', () => {
    expect(dirContent('C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir')).toEqual(['archivo-de-txto.txt', 'folder', 'lorem-two.md', 'lorem.md']);
  });
});

describe('fileNameExt', () => {
  it('must be a function', () => {
    expect(typeof fileNameExt).toBe('function');
  });
  it('should return an array of paths', () => {
    expect(fileNameExt('C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir\\lorem-two.md')).toEqual('.md');
  });
});

describe('fileContents', () => {
  it('must be a function', () => {
    expect(typeof fileContents).toBe('function');
  });
  it('should return an array of paths', () => {
    expect(fileContents('C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir\\lorem-two.md')).toEqual('Lorem ipsum dolor sit amet,');
  });
});


describe('isDirectory', () => {
  it('must be a function', () => {
    expect(typeof isDirectory).toBe('function');
  });
  it('should return an array of paths', () => {
    expect(isDirectory('C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir')).toEqual(true);
  });
});

describe('walkTheDirectory', () => {
  it('must be a function', () => {
    expect(typeof walkTheDirectory).toBe('function');
  });
  it('should return an array of paths', () => {
    expect(walkTheDirectory('C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir')).toEqual(outputWalk);
  });
});

/* describe('mdPathLinks', () => {
  it('must be a function', () => {
    expect(typeof mdPathLinks).toBe('function');
  });
  it('should return an array of paths', () => {
    expect(mdPathLinks(['C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir\\lorem.md'])).toEqual(outputContent);
  });
}); */

describe('filterMdPath', () => {
  it('must be a function', () => {
    expect(typeof filterMdPath).toBe('function');
  });
  it('should return an array of paths', () => {
    expect(filterMdPath(outputWalk)).toEqual(outputFilePaths);
  });
});

