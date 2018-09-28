import {AllObjectSet, EmptyObjectSet, ObjectSet, SomeObjectSet} from '../json-set/json-subset/object-set';
import {ParsedSchemaKeywords, Set} from '../json-set/set';
import {isTypeSupported} from './is-type-supported';

const supportsAllObjects = (parsedSchemaKeywords: ParsedSchemaKeywords): boolean =>
    Object.keys(parsedSchemaKeywords.properties).length === 0
    && parsedSchemaKeywords.additionalProperties.type === 'all';

export const createObjectSet = (parsedSchemaKeywords: ParsedSchemaKeywords): ObjectSet => {
    if (isTypeSupported(parsedSchemaKeywords.type, 'object')) {
        return supportsAllObjects(parsedSchemaKeywords)
            ? new AllObjectSet(
                parsedSchemaKeywords.type.origins,
                {},
                parsedSchemaKeywords.additionalProperties
            )
            : new SomeObjectSet(
                parsedSchemaKeywords.type.origins,
                parsedSchemaKeywords.properties,
                parsedSchemaKeywords.additionalProperties);
    }
    return new EmptyObjectSet(parsedSchemaKeywords.type.origins, {}, parsedSchemaKeywords.additionalProperties);
};

export const createAllObjectSet = (jsonSet: Set<'json'>) => {
    return new AllObjectSet(jsonSet.schemaOrigins, {}, jsonSet);
};

export const createEmptyObjectSet = (jsonSet: Set<'json'>) => {
    return new EmptyObjectSet(jsonSet.schemaOrigins, {}, jsonSet);
};
