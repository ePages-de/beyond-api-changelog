'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prepareSpec;

var _dereference = require('./dereference');

var _dereference2 = _interopRequireDefault(_dereference);

var _indexParameters = require('./indexParameters');

var _indexParameters2 = _interopRequireDefault(_indexParameters);

var _inlineGlobals = require('./inlineGlobals');

var _inlineGlobals2 = _interopRequireDefault(_inlineGlobals);

var _inlineParameters = require('./inlineParameters');

var _inlineParameters2 = _interopRequireDefault(_inlineParameters);

var _inlineRequiredProperties = require('./inlineRequiredProperties');

var _inlineRequiredProperties2 = _interopRequireDefault(_inlineRequiredProperties);

var _lodash = require('lodash.isplainobject');

var _lodash2 = _interopRequireDefault(_lodash);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param  {string|object} spec
 * @return {Promise}
 */
function prepareSpec(spec) {
  var debug = require('debug')('swagger-diff:workflow:prepareSpec');

  debug('start');

  var specRef = void 0;
  if ((0, _lodash2.default)(spec)) {
    specRef = spec;
  } else if (isUrl(spec)) {
    specRef = spec;
  } else if (typeof spec === 'string') {
    if (process.browser) {
      throw new Error('Incorrect spec, only URL or object are supported in browser');
    } else {
      specRef = spec;
      if (!_path2.default.isAbsolute(specRef)) {
        specRef = _path2.default.resolve(process.cwd(), specRef);
      }
    }
  } else {
    throw new Error('Incorrect spec');
  }

  return (0, _dereference2.default)(specRef).then(function (dereferencedSpec) {
    debug('dereferenced');
    var specs = dereferencedSpec;

    specs = (0, _inlineGlobals2.default)(specs);
    debug('globals inlined');

    specs = (0, _inlineParameters2.default)(specs);
    debug('parameters inlined');

    specs = (0, _indexParameters2.default)(specs);
    debug('parameters indexed');

    specs = (0, _inlineRequiredProperties2.default)(specs);
    debug('required properties inlined');

    return specs;
  });
}

function isUrl(str) {
  return typeof str === 'string' && str.indexOf('http') === 0;
}
module.exports = exports['default'];