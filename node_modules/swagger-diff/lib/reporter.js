'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var errors = _ref.errors;
  var warnings = _ref.warnings;
  var infos = _ref.infos;
  var unmatchDiffs = _ref.unmatchDiffs;

  var output = 'swagger-diff\n';

  var errorColor = errors.length > 0 ? _chalk2.default.red : _chalk2.default.white;
  output += errorColor('Errors (' + errors.length + ')\n');
  if (errors.length > 0) {
    output += errors.map(function (diff) {
      return '' + padSpaces(diff.ruleId, 30) + diff.message;
    }).join('\n');
    output += '\n';
  }

  var warningColor = warnings.length > 0 ? _chalk2.default.yellow : _chalk2.default.white;
  output += warningColor('Warnings (' + warnings.length + ')\n');
  if (warnings.length > 0) {
    output += warnings.map(function (diff) {
      return '' + padSpaces(diff.ruleId, 30) + diff.message;
    }).join('\n');
    output += '\n';
  }

  if (infos.length > 0) {
    output += 'Infos (' + infos.length + ')\n';
    output += infos.map(function (diff) {
      return '' + padSpaces(diff.ruleId, 30) + diff.message;
    }).join('\n');
    output += '\n';
  }

  var unmatchedColor = unmatchDiffs.length > 0 ? _chalk2.default.yellow : _chalk2.default.white;
  if (unmatchDiffs.length > 0) {
    output += unmatchedColor('Unmatched diffs (' + unmatchDiffs.length + ')\n');
    output += unmatchDiffs.map(function (rawDiff) {
      return JSON.stringify(rawDiff);
    }).join('\n');
  }

  return output;
};

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function padSpaces(string, length) {
  var output = string;
  for (var i = 0; i < length - string.length; i++) {
    output += ' ';
  }
  return output;
}

/**
 * Compute string to output on terminal
 * @param  {Array>Diff>}    options.errors
 * @param  {Array>Diff>}    options.warnings
 * @param  {Array>Diff>}    options.infos
 * @param  {Array<RawDiff>} options.unmatchDiffs
 * @return {String}
 */
module.exports = exports['default'];