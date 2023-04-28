// plopfile.js
const moduleGenerator = require('./plop-generators/module-generator.js');

module.exports = function plopConfig(plop) {
  plop.setGenerator('module', moduleGenerator);
};
