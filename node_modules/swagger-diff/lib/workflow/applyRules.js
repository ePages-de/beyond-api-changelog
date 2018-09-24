'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyRules;

var _lodash = require('lodash.foreach');

var _lodash2 = _interopRequireDefault(_lodash);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {Array<RawDiff>} diffs Result of diff module
 * @param {Map} breakRules  map of breaking rules indexed by their id
 * @param {Map} smoothRules map of smooth rules indexed by their id
 * @return {
 *   breaks: Array<Diff>
 *   smooths: Array<Diff>,
 *   unmatchDiffs: Array<RawDiff>
 * }
 * @note Diff: {ruleId: String, message: String}
 */
function applyRules(diffs) {
  var breakRules = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var smoothRules = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var breaks = [];
  var smooths = [];
  var unmatchDiffs = [];

  (0, _lodash2.default)(diffs, function (diff) {
    var matchRule = false;

    (0, _lodash2.default)(breakRules, function (rule, ruleId) {
      var ruleResult = rule(diff);
      if (ruleResult) {
        matchRule = true;
        var ruleMessage = { ruleId: ruleId };
        (0, _extend2.default)(ruleMessage, ruleResult);
        breaks = breaks.concat(ruleMessage);
        return false; // break
      }
      return true;
    });

    if (matchRule) {
      return true; // continue
    }

    (0, _lodash2.default)(smoothRules, function (rule, ruleId) {
      var ruleResult = rule(diff);
      if (ruleResult) {
        matchRule = true;
        var ruleMessage = { ruleId: ruleId };
        (0, _extend2.default)(ruleMessage, ruleResult);
        smooths = smooths.concat(ruleMessage);
        return false; // break
      }
      return true;
    });

    if (matchRule) {
      return true; // continue
    }

    unmatchDiffs = unmatchDiffs.concat(diff);
    return true;
  });

  return {
    breaks: breaks,
    smooths: smooths,
    unmatchDiffs: unmatchDiffs
  };
}
module.exports = exports['default'];