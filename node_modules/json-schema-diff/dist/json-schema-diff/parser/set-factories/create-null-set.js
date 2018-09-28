"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const null_set_1 = require("../json-set/json-subset/null-set");
const is_type_supported_1 = require("./is-type-supported");
exports.createNullSet = (parsedSchemaKeywords) => is_type_supported_1.isTypeSupported(parsedSchemaKeywords.type, 'null')
    ? new null_set_1.AllNullSet(parsedSchemaKeywords.type.origins)
    : new null_set_1.EmptyNullSet(parsedSchemaKeywords.type.origins);
