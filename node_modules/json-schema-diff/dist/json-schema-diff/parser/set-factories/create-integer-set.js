"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const integer_set_1 = require("../json-set/json-subset/integer-set");
const is_type_supported_1 = require("./is-type-supported");
exports.createIntegerSet = (parsedSchemaKeywords) => is_type_supported_1.isTypeSupported(parsedSchemaKeywords.type, 'integer')
    ? new integer_set_1.AllIntegerSet(parsedSchemaKeywords.type.origins)
    : new integer_set_1.EmptyIntegerSet(parsedSchemaKeywords.type.origins);
