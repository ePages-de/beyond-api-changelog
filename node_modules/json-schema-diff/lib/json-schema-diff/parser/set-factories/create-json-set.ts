import {AllJsonSet, EmptyJsonSet, SomeJsonSet, Subsets} from '../json-set/json-set';
import {ParsedSchemaKeywords, SchemaOrigin, Set} from '../json-set/set';
import {createArraySet} from './create-array-set';
import {createBooleanSet} from './create-boolean-set';
import {createIntegerSet} from './create-integer-set';
import {createNullSet} from './create-null-set';
import {createNumberSet} from './create-number-set';
import {createObjectSet} from './create-object-set';
import {createStringSet} from './create-string-set';

export const createJsonSet = (parsedSchemaKeywords: ParsedSchemaKeywords): Set<'json'> => {
    const subsets: Subsets = {
        array: createArraySet(parsedSchemaKeywords),
        boolean: createBooleanSet(parsedSchemaKeywords),
        integer: createIntegerSet(parsedSchemaKeywords),
        null: createNullSet(parsedSchemaKeywords),
        number: createNumberSet(parsedSchemaKeywords),
        object: createObjectSet(parsedSchemaKeywords),
        string: createStringSet(parsedSchemaKeywords)
    };

    return new SomeJsonSet(subsets);
};

export const createAllJsonSet = (schemaOrigins: SchemaOrigin[]): Set<'json'> => {
    return new AllJsonSet(schemaOrigins);
};

export const createEmptyJsonSet = (schemaOrigins: SchemaOrigin[]): Set<'json'> => {
    return new EmptyJsonSet(schemaOrigins);
};
