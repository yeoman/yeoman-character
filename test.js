'use strict';
var test = require('ava');
var yeomanCharacter = require('./');

test(function (t) {
	t.assert(yeomanCharacter.length > 0);
	t.end();
});
