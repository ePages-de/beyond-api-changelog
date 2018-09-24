'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = postProcessDiff;

var _lodash = require('lodash.foreach');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isnumber');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.isplainobject');

var _lodash6 = _interopRequireDefault(_lodash5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOG_LEVELS = {
  3: 'errors',
  2: 'warnings',
  1: 'infos'
};

/**
 * @param  {Array<Diff>} diff.breaks
 * @param  {Array<Diff>} diff.smooths
 * @param  {Array<RaxDiff>} diff.unmatchDiffs
 * @param  {String} versionDiff, if null -> unchanged, if undefined, no version defined
 * @param  {Object} config.changes
 * @param  {Object} config.rules
 * @return
 * {
 *   errors: {Array>Diff>}
 *   warnings: {Array>Diff>}
 *   infos: {Array>Diff>}
 *   unmatchDiffs: {Array<RawDiff>}
 * }
 * @note Diff: {ruleId: String, message: String}
 */
function postProcessDiff(_ref, versionDiff, config) {
  var breaks = _ref.breaks;
  var smooths = _ref.smooths;
  var unmatchDiffs = _ref.unmatchDiffs;

  var diff = {
    errors: [],
    warnings: [],
    infos: [],
    unmatchDiffs: unmatchDiffs
  };

  (0, _lodash2.default)([{ changes: breaks, type: 'breaks' }, { changes: smooths, type: 'smooths' }], function (_ref2) {
    var changes = _ref2.changes;
    var type = _ref2.type;
    return (0, _lodash2.default)(changes, function (change) {
      var ruleConfig = config.rules && config.rules[change.ruleId];
      var globalConfig = config.changes[type];

      var level = (0, _lodash4.default)(ruleConfig) ? ruleConfig : versionDiff && (0, _lodash6.default)(ruleConfig) ? ruleConfig[versionDiff] : (0, _lodash4.default)(globalConfig) ? globalConfig : versionDiff && (0, _lodash6.default)(globalConfig) ? globalConfig[versionDiff] : config.default[type];

      if (LOG_LEVELS[level]) {
        diff[LOG_LEVELS[level]].push(change);
      }
    });
  });

  return diff;
}
module.exports = exports['default'];