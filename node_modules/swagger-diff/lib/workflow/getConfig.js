'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getConfig;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _jsonfile = require('jsonfile');

var _lodash = require('lodash.defaultsdeep');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isplainobject');

var _lodash4 = _interopRequireDefault(_lodash3);

var _defaultConfig = require('../defaultConfig');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param  {string|object}  config - The file path of the config file or the config file
 * @return {Object}
 */
function getConfig(config) {
  var baseConfig = void 0;

  if (!config) {
    baseConfig = {};
  } else if ((0, _lodash4.default)(config)) {
    baseConfig = config;
  } else if (typeof config === 'string') {
    if (process.browser) {
      throw new Error('Incorrect config, only object is supported in browser');
    } else {
      baseConfig = readConfigFile(config);
    }
  } else {
    throw new Error('Incorrect config');
  }

  return (0, _lodash2.default)(baseConfig, _defaultConfig2.default);
}

function readConfigFile(fileName) {
  try {
    _fs2.default.lstatSync(fileName);
  } catch (e) {
    return {};
  }
  return (0, _jsonfile.readFileSync)(fileName);
}
module.exports = exports['default'];