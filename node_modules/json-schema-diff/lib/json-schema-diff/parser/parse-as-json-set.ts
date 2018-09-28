import {isBoolean, isUndefined} from 'util';
import {CoreSchemaMetaSchema, JsonSchema, SimpleTypes} from './json-set/json-schema';
import {
    allSchemaTypes,
    ParsedPropertiesKeyword,
    ParsedSchemaKeywords,
    ParsedTypeKeyword,
    SchemaOrigin,
    SchemaOriginType, Set
} from './json-set/set';
import {SchemaLocation} from './schema-location';
import {createAllJsonSet, createEmptyJsonSet, createJsonSet} from './set-factories/create-json-set';

const toSimpleTypeArray = (type?: SimpleTypes | SimpleTypes[]): SimpleTypes[] => {
    if (!type) {
        return allSchemaTypes;
    }

    if (typeof type === 'string') {
        return [type];
    }

    return type;
};

const parseSchemaProperties = (schemaProperties: {[key: string]: JsonSchema} = {},
                               location: SchemaLocation): ParsedPropertiesKeyword => {
    const objectSetProperties: ParsedPropertiesKeyword = {};

    for (const propertyName of Object.keys(schemaProperties)) {
        const propertySchema = schemaProperties[propertyName];
        const propertyLocation = location.child(propertyName);
        objectSetProperties[propertyName] = parseWithLocation(propertySchema, propertyLocation);
    }
    return objectSetProperties;
};

const parseType = (schema: CoreSchemaMetaSchema,
                   location: SchemaLocation): ParsedTypeKeyword => {
    const types = toSimpleTypeArray(schema.type);

    const schemaOrigins = [{
        path: location.child('type').path,
        type: location.schemaOriginType,
        value: schema.type
    }];

    return {parsedValue: types, origins: schemaOrigins};
};

const parseSubsets = (schema: CoreSchemaMetaSchema,
                      location: SchemaLocation): Set<'json'> => {
    const type = parseType(schema, location);
    const additionalProperties = parseWithLocation(
        schema.additionalProperties, location.child('additionalProperties')
    );
    const properties = parseSchemaProperties(schema.properties, location.child('properties'));
    const parsedSchemaKeywords: ParsedSchemaKeywords = {
        additionalProperties,
        properties,
        type
    };

    return createJsonSet(parsedSchemaKeywords);
};

// tslint:disable-next-line
const parseCoreSchemaMetaSchema = (schema: CoreSchemaMetaSchema,
                                   location: SchemaLocation): Set<'json'> => {

    return parseSubsets(schema, location);
};

const parseBooleanSchema = (schema: boolean | undefined,
                            location: SchemaLocation): Set<'json'> => {
    const schemaOrigins: SchemaOrigin[] = [{
        path: location.path,
        type: location.schemaOriginType,
        value: schema
    }];
    const allowsAllJsonValues = isUndefined(schema) ? true : schema;
    return allowsAllJsonValues ? createAllJsonSet(schemaOrigins) : createEmptyJsonSet(schemaOrigins);
};

const parseWithLocation = (schema: JsonSchema | undefined,
                           location: SchemaLocation): Set<'json'> => {
    return (isBoolean(schema) || isUndefined(schema))
        ? parseBooleanSchema(schema, location)
        : parseCoreSchemaMetaSchema(schema, location);
};

export const parseAsJsonSet = (schema: JsonSchema, originType: SchemaOriginType): Set<'json'> => {
    return parseWithLocation(schema, SchemaLocation.createRoot(originType));
};
