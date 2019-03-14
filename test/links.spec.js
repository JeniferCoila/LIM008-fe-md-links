import {
  getObjectLinks, 
  getLinks
} from '../src/utils/getlinks.js';

const inputPath = `${process.cwd()}\\test\\dir\\folder\\lorem-three.md`;

const objLink = [{
  'href': 'https://lms.laboratoria.la/courses', 
  'text': 'El lms tu terror',
  'file': `${process.cwd()}\\test\\dir\\folder\\lorem-three.md`
}];

const outputFilePaths = [
  `${process.cwd()}\\test\\dir\\lorem-two.md`,
  `${process.cwd()}\\test\\dir\\lorem.md`
];
const outputObjectLink = [
  {'file': `${process.cwd()}\\test\\dir\\lorem-two.md`, 
    'href': 'https://lms.laboratoria.la/courses', 
    'text': 'El lms tu terror'}, 
  {'file': `${process.cwd()}\\test\\dir\\lorem-two.md`, 
    'href': 'https://flippingbook.com/404', 
    'text': 'Lorem ipsum dolor sit amet'}, 
  {'file': `${process.cwd()}\\test\\dir\\lorem.md`, 
    'href': 'http://joedicastro.com', 
    'text': 'Lorem ipsum dolor sit amet'}
];


describe('getLinks', () => {
  it('should return an array of objects with links data', () => {
    expect(getLinks(inputPath)).toEqual(objLink);
  });
});

describe('getObjectLinks', () => {
  it('should return an array of objects with links data', () => {
    expect(getObjectLinks([inputPath])).toEqual(objLink);
  });
  it('should return an array of objects with links data', () => {
    expect(getObjectLinks(outputFilePaths)).toEqual(outputObjectLink);
  });
});
  