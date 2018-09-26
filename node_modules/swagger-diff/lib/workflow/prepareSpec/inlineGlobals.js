'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = inlineGlobals;

var _lodash = require('lodash.mapvalues');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.omit');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.pick');

var _lodash6 = _interopRequireDefault(_lodash5);

var _lodash7 = require('lodash.zipobject');

var _lodash8 = _interopRequireDefault(_lodash7);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function inlineGlobals(spec) {
  var paths = (0, _lodash2.default)(spec[_constants.PATHS_KEY], function (path) {
    var operations = (0, _lodash2.default)((0, _lodash6.default)(path, _constants.OPERATION_KEYS), function (operation) {
      return _extends({}, operation, (0, _lodash8.default)(_constants.GLOBAL_KEYS, _constants.GLOBAL_KEYS.map(function (key) {
        return operation[key] || spec[key] || [];
      })));
    });

    return _extends({}, path, operations);
  });

  return _extends({}, (0, _lodash4.default)(spec, _constants.GLOBAL_KEYS), _defineProperty({}, _constants.PATHS_KEY, paths));
}
module.exports = exports['default'];