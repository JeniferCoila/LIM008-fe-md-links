import {
  mdLinks
} from '../src/app.js';

const inputDir = `${process.cwd()}\\test\\dir\\lorem-two.md`;
const inputInvalidPath = `${process.cwd()}\\test\\dir\\lorem-twmd`;

const inputNotMd = `${process.cwd()}\\test\\dir\\archivo-de-txto.txt`;

const outputObjLinks = [{
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

const outputStats = {
  'broken': 0, 
  'total': 2, 
  'unique': 1
};
describe('mdLinks', () => {
  it('should return aan array of objects', (done) => {
    mdLinks(inputDir, {validate: false, stats: false}).then(res => {
      expect(res).toEqual(outputObjLinks);
      done();
    }).catch(() => done());
  });
  it('should return total, broken and unique amount of links', (done) => {
    mdLinks(inputDir, {validate: true, stats: false}).then(res => {
      expect(res).toEqual(outputStats);
      done();
    }).catch(() => done());
  });
  it('should return total, broken and unique amount of links', (done) => {
    mdLinks(inputDir, {validate: true, stats: true}).then(res => {
      expect(res).toEqual(outputStats);
      done();
    }).catch(() => done());
  });
  it('should return an error message when there are not .md files', (done) => {
    mdLinks(inputNotMd, {validate: true, stats: true}).catch(err => {
      expect(err).toEqual('No se encontraron archivos .md');
      done();
    });
  });
  it('should return an error message when the inputPath is an invalid one', (done) => {
    mdLinks(inputInvalidPath, {validate: true, stats: true}).catch(err => {
      expect(err).toEqual('Ingrese una ruta válida');
      done();
    });
  });
});
