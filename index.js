'use strict';
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-prefix-classless', prefixClassless);

function prefixClassless(prefix) {
  return function(root) {

    // Add trailing space if it's missing
    if (prefix[prefix.length - 1] !== ' ') {
      prefix = prefix + ' ';
    }

    root.walkRules(function (rule) {
      if (!rule.selectors){
        return rule;
      }

      rule.selectors = rule.selectors.map(function(selector) {
        if (!/^\./.test(selector) && !/^(html|body)/.test(selector)) {
          return prefix + selector;
        } else {
          return selector;
        }
      });
    });
  };
}
