'use strict';

module.exports = function(dependencies) {

  const models = require('./db')(dependencies);
  const pad = require('./pad')(dependencies);

  return {
    pad,
    models
  };
};
