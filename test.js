/*!
 * remarkable-defaults <https://github.com/doowb/remarkable-defaults>
 *
 * Copyright (c) 2015 .
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var defaults = require('./');

describe('remarkableDefaults', function () {
  it('should return default options', function () {
    var opts = defaults();
    assert.equal(opts.breaks, false);
    assert.equal(opts.html, true);
    assert.equal(opts.langPrefix, 'lang-');
    assert.equal(opts.linkify, true);
    assert.equal(opts.typographer, false);
    assert.equal(opts.xhtmlOut, false);
    assert.equal(typeof opts.highlight, 'function');
  });

  it('should extend default options with given options', function () {
    var opts = defaults({breaks: true, langPrefix: 'language-'});
    assert.equal(opts.breaks, true);
    assert.equal(opts.html, true);
    assert.equal(opts.langPrefix, 'language-');
    assert.equal(opts.linkify, true);
    assert.equal(opts.typographer, false);
    assert.equal(opts.xhtmlOut, false);
    assert.equal(typeof opts.highlight, 'function');
  });
});
