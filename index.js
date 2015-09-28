/*!
 * remarkable-defaults <https://github.com/doowb/remarkable-defaults>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var hljs = require('highlight.js');

var defaults = {
  breaks: false,
  html: true,
  langPrefix: 'lang-',
  linkify: true,
  typographer: false,
  xhtmlOut: false,
  highlight: function highlight(code, lang) {
    try {
      try {
        return hljs.highlight(lang, code).value;
      } catch (err) {
        if (!/Unknown language/i.test(err.message)) {
          throw err;
        }
        return hljs.highlightAuto(code).value;
      }
    } catch (err) {
      return code;
    }
  }
};

/**
 * Get smart defaults for [remarkable][] allowing overriding
 * with your own options.
 *
 * ```js
 * var md = new Remarkable(defaults({langPrefix: 'language-'}));
 * ```
 * @return {Object} options object usable in [remarkable][]
 * @api public
 * @name  defaults
 */

module.exports = function () {
  var extend = require('extend-shallow');
  var len = arguments.length, i = 0;
  var args = new Array(len + 2);
  args[0] = {}; args[1] = defaults;

  while (len--) {
    args[i + 2] = arguments[i++];
  }

  return extend.apply(extend, args);
};
