/* In this file we gather all the functions that will help us in our library*/

import path from 'path';
import fs from 'fs';

export const isPathAbsolute = inputPath => path.isAbsolute(inputPath);
export const unionpath = (inputPath, file) => path.join(inputPath, file);
export const relToAbs = inputPath => path.resolve(inputPath);
export const dirContent = inputPath => fs.readdirSync(inputPath);
export const fileNameExt = inputPath => path.extname(inputPath);
export const fileContents = inputPath => fs.readFileSync(inputPath).toString();
export const isDirectory = inputPath => fs.statSync(inputPath).isDirectory();
export const itExists = inputPath => fs.existsSync(inputPath);

