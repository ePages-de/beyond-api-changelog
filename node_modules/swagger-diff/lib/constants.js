'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GLOBAL_KEYS = exports.GLOBAL_KEYS = ['consumes', 'produces', 'schemes', 'security'];

var PATHS_KEY = exports.PATHS_KEY = 'paths';
var OPERATION_KEYS = exports.OPERATION_KEYS = ['get', 'post', 'put', 'delete', 'options', 'head', 'patch'];
var PARAMETERS_KEY = exports.PARAMETERS_KEY = 'parameters';

var DEFINITIONS_KEY = exports.DEFINITIONS_KEY = 'definitions';
var PROPERTIES_KEY = exports.PROPERTIES_KEY = 'properties';

var DEFAULT_CONFIG_PATH = exports.DEFAULT_CONFIG_PATH = '.swagger-diffrc';