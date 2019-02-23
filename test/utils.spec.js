import {isPathAbsolute, relToAbs} from '../src/utils/util.js';


describe('isPathAbsolute', () => {
  it('must be a function', () => {
    expect(typeof isPathAbsolute).toBe('function');
  });
  it('should return a boolean', () => {
    expect(isPathAbsolute('C:\Users\jenif\OneDrive\LAB\PROYECTOS\First Project\Repositorio proyecto\antiguo repo-no tocar\LIM008-social-network\src')).toEqual(true);
  });
});

describe('relToAbs', () => {
  it('must be a function', () => {
    expect(typeof relToAbs).toBe('function');
  });
  it('should return an absolute path', () => {
    expect(relToAbs('../app.js')).toEqual('C:\Users\jenif\OneDrive\LAB\PROYECTOS\First Project\Repositorio proyecto\antiguo repo-no tocar\LIM008-social-network\src');
  });
});


