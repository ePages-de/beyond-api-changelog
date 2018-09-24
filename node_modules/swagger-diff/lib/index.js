'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _workflow = require('./workflow');

var _workflow2 = _interopRequireDefault(_workflow);

var _defaultConfig = require('./defaultConfig');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_workflow2.default.defaultConfig = _defaultConfig2.default;
exports.default = _workflow2.default;
module.exports = exports['default'];