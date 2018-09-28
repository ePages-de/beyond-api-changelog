// this file was generated from https://raw.githubusercontent.com/json-schema-org/json-schema-spec/draft-07/schema.json

export type NonNegativeInteger = number;
export type NonNegativeIntegerDefault0 = NonNegativeInteger;
export type SchemaArray = JsonSchema[];
export type StringArray = string[];
export type SimpleTypes = 'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string';

export interface CoreSchemaMetaSchema {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: any;
    readOnly?: boolean;
    examples?: any[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: NonNegativeInteger;
    minLength?: NonNegativeIntegerDefault0;
    pattern?: string;
    additionalItems?: JsonSchema;
    items?: JsonSchema | SchemaArray;
    maxItems?: NonNegativeInteger;
    minItems?: NonNegativeIntegerDefault0;
    uniqueItems?: boolean;
    contains?: JsonSchema;
    maxProperties?: NonNegativeInteger;
    minProperties?: NonNegativeIntegerDefault0;
    required?: StringArray;
    additionalProperties?: JsonSchema;
    definitions?: {
        [k: string]: JsonSchema;
    };
    properties?: {
        [k: string]: JsonSchema;
    };
    patternProperties?: {
        [k: string]: JsonSchema;
    };
    dependencies?: {
        [k: string]: JsonSchema | StringArray;
    };
    propertyNames?: JsonSchema;
    const?: any;
    enum?: any[];
    type?: SimpleTypes | SimpleTypes[];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: JsonSchema;
    then?: JsonSchema;
    else?: JsonSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: JsonSchema;
    [k: string]: any;
}

export type JsonSchema = CoreSchemaMetaSchema | boolean;
