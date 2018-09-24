'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* eslint no-param-reassign:0 */

exports.default = swaggerDiff;

var _deepDiff = require('deep-diff');

var _deepDiff2 = _interopRequireDefault(_deepDiff);

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

var _getConfig = require('./getConfig');

var _getConfig2 = _interopRequireDefault(_getConfig);

var _prepareSpec = require('./prepareSpec');

var _prepareSpec2 = _interopRequireDefault(_prepareSpec);

var _applyRules = require('./applyRules');

var _applyRules2 = _interopRequireDefault(_applyRules);

var _postProcessDiff = require('./postProcessDiff');

var _postProcessDiff2 = _interopRequireDefault(_postProcessDiff);

var _rules = require('../rules');

var _rules2 = _interopRequireDefault(_rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param  {string|object} oldSpec - The file path of the old Swagger spec; or a Swagger object.
 * @param  {string|object} newSpec - The file path of the new Swagger spec; or a Swagger object.
 * @param  {string|object} config  - The file path of the config file or the config file
 * @return {Promise}
 * Promise returns the following obejct
 * {
 *   errors: {Array>Diff>}
 *   warnings: {Array>Diff>}
 *   infos: {Array>Diff>}
 *   unmatchDiffs: {Array<RawDiff>}
 * }
 */
function swaggerDiff(oldSpec, newSpec, config) {
  var debug = require('debug')('swagger-diff:workflow');
  debug('start');

  config = (0, _getConfig2.default)(config);
  return Promise.all([(0, _prepareSpec2.default)(oldSpec), (0, _prepareSpec2.default)(newSpec)]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var prepOldSpec = _ref2[0];
    var prepNewSpec = _ref2[1];

    debug('specs perpared');

    var versionDiff = void 0;
    if (prepOldSpec.info && prepNewSpec.info) {
      var oldVersion = prepOldSpec.info.version;
      var newVersion = prepNewSpec.info.version;
      if (!_semver2.default.valid(oldVersion) || !_semver2.default.valid(newVersion)) {
        debug('one swagger file version is not semver compliant => ignore version comparison');
      } else {
        versionDiff = _semver2.default.diff(oldVersion, newVersion);
        if (versionDiff === null) {
          versionDiff = 'unchanged';
        }
      }
      prepOldSpec.info.version = null;
      prepNewSpec.info.version = null;
    }

    debug('versionDiff', versionDiff);

    var rawDiffs = (0, _deepDiff2.default)(prepOldSpec, prepNewSpec);
    debug('rawDiffs', rawDiffs);

    var changes = (0, _applyRules2.default)(rawDiffs, _rules2.default.break, _rules2.default.smooth);
    debug('changes', changes);

    var diffs = config.skipDiffPostProcessing ? changes : (0, _postProcessDiff2.default)(changes, versionDiff, config);
    debug('diffs', diffs);

    return diffs;
  });
}
module.exports = exports['default'];