"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_set_1 = require("../json-set/json-subset/object-set");
const is_type_supported_1 = require("./is-type-supported");
const supportsAllObjects = (parsedSchemaKeywords) => Object.keys(parsedSchemaKeywords.properties).length === 0
    && parsedSchemaKeywords.additionalProperties.type === 'all';
exports.createObjectSet = (parsedSchemaKeywords) => {
    if (is_type_supported_1.isTypeSupported(parsedSchemaKeywords.type, 'object')) {
        return supportsAllObjects(parsedSchemaKeywords)
            ? new object_set_1.AllObjectSet(parsedSchemaKeywords.type.origins, {}, parsedSchemaKeywords.additionalProperties)
            : new object_set_1.SomeObjectSet(parsedSchemaKeywords.type.origins, parsedSchemaKeywords.properties, parsedSchemaKeywords.additionalProperties);
    }
    return new object_set_1.EmptyObjectSet(parsedSchemaKeywords.type.origins, {}, parsedSchemaKeywords.additionalProperties);
};
exports.createAllObjectSet = (jsonSet) => {
    return new object_set_1.AllObjectSet(jsonSet.schemaOrigins, {}, jsonSet);
};
exports.createEmptyObjectSet = (jsonSet) => {
    return new object_set_1.EmptyObjectSet(jsonSet.schemaOrigins, {}, jsonSet);
};
