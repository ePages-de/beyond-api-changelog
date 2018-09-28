"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_set_1 = require("../json-set/json-subset/number-set");
const is_type_supported_1 = require("./is-type-supported");
exports.createNumberSet = (parsedSchemaKeywords) => is_type_supported_1.isTypeSupported(parsedSchemaKeywords.type, 'number')
    ? new number_set_1.AllNumberSet(parsedSchemaKeywords.type.origins)
    : new number_set_1.EmptyNumberSet(parsedSchemaKeywords.type.origins);
