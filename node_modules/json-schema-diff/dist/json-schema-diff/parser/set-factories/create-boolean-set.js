"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boolean_set_1 = require("../json-set/json-subset/boolean-set");
const is_type_supported_1 = require("./is-type-supported");
exports.createBooleanSet = (parsedSchemaKeywords) => is_type_supported_1.isTypeSupported(parsedSchemaKeywords.type, 'boolean')
    ? new boolean_set_1.AllBooleanSet(parsedSchemaKeywords.type.origins)
    : new boolean_set_1.EmptyBooleanSet(parsedSchemaKeywords.type.origins);
