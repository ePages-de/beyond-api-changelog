"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
const json_schema_draft_7_schema_1 = require("./json-schema-draft-7-schema");
const validateJsonSchema = (schema) => {
    const ajv = new Ajv();
    const validate = ajv.compile(json_schema_draft_7_schema_1.jsonSchemaDraft7Schema);
    const valid = validate(schema);
    if (valid) {
        return { isValid: true };
    }
    return {
        failureReason: ajv.errorsText(validate.errors || undefined),
        isValid: false
    };
};
exports.validateSchemas = (sourceSchema, destinationSchema) => {
    const sourceSchemaValidationResult = validateJsonSchema(sourceSchema);
    if (!sourceSchemaValidationResult.isValid) {
        return Promise.reject(new Error(`Source schema is not a valid json schema: ${sourceSchemaValidationResult.failureReason}`));
    }
    const destinationSchemaValidationResult = validateJsonSchema(destinationSchema);
    if (!destinationSchemaValidationResult.isValid) {
        return Promise.reject(new Error(`Destination schema is not a valid json schema: ${destinationSchemaValidationResult.failureReason}`));
    }
    return Promise.resolve();
};
