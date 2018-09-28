"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_set_1 = require("../json-set/json-subset/array-set");
const is_type_supported_1 = require("./is-type-supported");
exports.createArraySet = (parsedSchemaKeywords) => is_type_supported_1.isTypeSupported(parsedSchemaKeywords.type, 'array')
    ? new array_set_1.AllArraySet(parsedSchemaKeywords.type.origins)
    : new array_set_1.EmptyArraySet(parsedSchemaKeywords.type.origins);
