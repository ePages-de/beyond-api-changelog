"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_set_1 = require("../json-set/json-subset/string-set");
const is_type_supported_1 = require("./is-type-supported");
exports.createStringSet = (parsedSchemaKeywords) => is_type_supported_1.isTypeSupported(parsedSchemaKeywords.type, 'string')
    ? new string_set_1.AllStringSet(parsedSchemaKeywords.type.origins)
    : new string_set_1.EmptyStringSet(parsedSchemaKeywords.type.origins);
