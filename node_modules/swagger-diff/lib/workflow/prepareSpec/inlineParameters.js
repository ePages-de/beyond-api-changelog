'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint no-param-reassign:0 */

exports.default = inlineParameters;

var _lodash = require('lodash.mapvalues');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.omit');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.pick');

var _lodash6 = _interopRequireDefault(_lodash5);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function inlineParameters(spec) {
  if (!spec[_constants.PATHS_KEY]) {
    return spec;
  }
  var paths = (0, _lodash2.default)(spec[_constants.PATHS_KEY], function (path) {
    var globalParameters = path[_constants.PARAMETERS_KEY] || [];
    var operations = (0, _lodash2.default)((0, _lodash6.default)(path, _constants.OPERATION_KEYS), function (operation) {
      return _extends({}, operation, _defineProperty({}, _constants.PARAMETERS_KEY, globalParameters.concat(operation[_constants.PARAMETERS_KEY] || [])));
    });

    return _extends({}, (0, _lodash4.default)(path, _constants.PARAMETERS_KEY), operations);
  });

  return _extends({}, spec, _defineProperty({}, _constants.PATHS_KEY, paths));
}
module.exports = exports['default'];