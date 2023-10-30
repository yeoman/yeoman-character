import process from 'node:process';
import path from 'node:path';
import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
import supportsColor from 'supports-color';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fallback = [
	'    _-----_',
	'   |       |',
	'   |--(o)--|',
	'  `---------´',
	'   ( _´U`_ )',
	'   /___A___\\',
	'    |  ~  |',
	'  __\'.___.\'__',
	'´   `  |° ´ Y `',
].join('\n');

const yeomanCharacter = supportsColor && process.platform !== 'win32'
	? fs.readFileSync(path.join(__dirname, 'yeoman.txt'), 'utf8')
	: fallback;

export default yeomanCharacter;
