"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_set_1 = require("../json-set/json-set");
const create_array_set_1 = require("./create-array-set");
const create_boolean_set_1 = require("./create-boolean-set");
const create_integer_set_1 = require("./create-integer-set");
const create_null_set_1 = require("./create-null-set");
const create_number_set_1 = require("./create-number-set");
const create_object_set_1 = require("./create-object-set");
const create_string_set_1 = require("./create-string-set");
exports.createJsonSet = (parsedSchemaKeywords) => {
    const subsets = {
        array: create_array_set_1.createArraySet(parsedSchemaKeywords),
        boolean: create_boolean_set_1.createBooleanSet(parsedSchemaKeywords),
        integer: create_integer_set_1.createIntegerSet(parsedSchemaKeywords),
        null: create_null_set_1.createNullSet(parsedSchemaKeywords),
        number: create_number_set_1.createNumberSet(parsedSchemaKeywords),
        object: create_object_set_1.createObjectSet(parsedSchemaKeywords),
        string: create_string_set_1.createStringSet(parsedSchemaKeywords)
    };
    return new json_set_1.SomeJsonSet(subsets);
};
exports.createAllJsonSet = (schemaOrigins) => {
    return new json_set_1.AllJsonSet(schemaOrigins);
};
exports.createEmptyJsonSet = (schemaOrigins) => {
    return new json_set_1.EmptyJsonSet(schemaOrigins);
};
