import * as Ajv from 'ajv';
import {jsonSchemaDraft7Schema} from './json-schema-draft-7-schema';

interface SuccessfulValidationResult {
    isValid: true;
}

interface FailedValidationResult {
    isValid: false;
    failureReason: string;
}

type ValidationResult = SuccessfulValidationResult | FailedValidationResult;

const validateJsonSchema = (schema: any): ValidationResult => {
    const ajv = new Ajv();
    const validate = ajv.compile(jsonSchemaDraft7Schema);
    const valid = validate(schema);

    if (valid) {
        return {isValid: true};
    }

    return {
        failureReason: ajv.errorsText(validate.errors || undefined),
        isValid: false
    };
};

export const validateSchemas = (sourceSchema: any, destinationSchema: any): Promise<void>  => {
    const sourceSchemaValidationResult = validateJsonSchema(sourceSchema);

    if (!sourceSchemaValidationResult.isValid) {
        return Promise.reject(
            new Error(`Source schema is not a valid json schema: ${sourceSchemaValidationResult.failureReason}`)
        );
    }

    const destinationSchemaValidationResult = validateJsonSchema(destinationSchema);

    if (!destinationSchemaValidationResult.isValid) {
        return Promise.reject(new Error(
            `Destination schema is not a valid json schema: ${destinationSchemaValidationResult.failureReason}`
        ));
    }
    return Promise.resolve();
};
