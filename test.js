import test from 'ava';
import yeomanCharacter from './index.js';

test('main', t => {
	t.true(yeomanCharacter.length > 0);
});
