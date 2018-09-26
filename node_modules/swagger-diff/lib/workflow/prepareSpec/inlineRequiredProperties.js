'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inlineRequiredProperties;

var _lodash = require('lodash.foreach');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isobject');

var _lodash4 = _interopRequireDefault(_lodash3);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @warning mutate spec
 */
function inlineRequiredProperties(spec) {
  (0, _lodash2.default)(spec, function (child) {
    if ((0, _lodash4.default)(child)) {
      inlineRequiredProperties(child);
    }
  });

  if (spec.type === 'object' && spec.required && Array.isArray(spec.required)) {
    spec.required.forEach(function (requiredProperty) {
      spec[_constants.PROPERTIES_KEY][requiredProperty].required = true;
    });
    delete spec.required;
  }

  return spec;
} /* eslint no-param-reassign:0 */

module.exports = exports['default'];