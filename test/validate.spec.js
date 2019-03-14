import {
  validateLinks
} from '../src/utils/validate.js';

const inputObjLink = [{
  'href': 'https://lms.laboratoria.la/courses',
  'text': 'El lms tu terror',
  'file':
          `${process.cwd()}\\test\\dir\\folder\\lorem-three.md` },
{ 'href': 'https://lms.laboratoria.la/courses',
  'text': 'El lms tu terror',
  'file':
          `${process.cwd()}\\test\\dir\\lorem-two.md` },
{ 'href': 'https://flippingbook.com/404',
  'text': 'Lorem ipsum dolor sit amet',
  'file':
           `${process.cwd()}\\test\\dir\\lorem-two.md` }];

const outputObjectLink = [{
  'file': `${process.cwd()}\\test\\dir\\folder\\lorem-three.md`,
  'href': 'https://lms.laboratoria.la/courses',
  'status': 200,
  'statusText': 'OK',
  'text': 'El lms tu terror',
},
{
  'file': `${process.cwd()}\\test\\dir\\lorem-two.md`,
  'href': 'https://lms.laboratoria.la/courses',
  'status': 200,
  'statusText': 'OK',
  'text': 'El lms tu terror',
},
{
  'file': `${process.cwd()}\\test\\dir\\lorem-two.md`,
  'href': 'https://flippingbook.com/404',
  'status': 404,
  'statusText': 'fail',
  'text': 'Lorem ipsum dolor sit amet',
}];

describe('validateLinks', () => {
  it('should return an array of objects', (done) => {
    validateLinks(inputObjLink).then(res => {
      expect(res).toEqual(outputObjectLink);
      done();
    }).catch(() => done());
  });
});


