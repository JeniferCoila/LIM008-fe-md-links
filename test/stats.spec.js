import {
  brokenLinks, 
  totalLinks,
  uniqueLinks,
  stats
} from '../src/utils/stats.js';

const objLink = [{
  'file': `${process.cwd()}\\test\\dir\\folder\\lorem-three.md`, 
  'href': 'https://lms.laboratoria.la/courses', 
  'text': 'El lms tu terror',
  'statusText': 'OK',
  'status': 200},
{
  'file': `${process.cwd()}\\test\\dir\\lorem-two.md}`,
  'href': 'https://lms.laboratoria.la/courses',
  'text': 'El lms tu terror',
  'statusText': 'OK',
  'status': 200},
];
  
const outputStats = {
  'broken': 0, 
  'total': 2, 
  'unique': 1
};
describe('brokenLinks', () => {
  it('should return the amount of broken links', () => {
    expect(brokenLinks(objLink)).toEqual(0);
  });
});

describe('totalLinks', () => {
  it('should return the total amount of links', () => {
    expect(totalLinks(objLink)).toEqual(2);
  });
});

describe('uniqueLinks', () => {
  it('should return the amount of unique links', () => {
    expect(uniqueLinks(objLink)).toEqual(1);
  });
});

describe('stats', () => {
  it('should return an object', () => {
    expect(stats(objLink)).toEqual(outputStats);
  });
});

