import {
  walkTheDirectory, 
  filterMdPath
} from '../src/utils/path.js';

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

  const outputContent = [`Lorem ipsum dolor sit amet
 
  <http://joedicastro.com>`, ];
describe('walkTheDirectory', () => {
  it('must be a function', () => {
    expect(typeof walkTheDirectory).toBe('function');
  });
  it('should return an array of paths', () => {
    expect(walkTheDirectory('C:\\Users\\jenif\\OneDrive\\LAB\\PROYECTOS\\First Project\\Repositorio proyecto\\LIM008-fe-md-links\\test\\dir')).toEqual(outputWalk);
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