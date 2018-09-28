import * as _ from 'lodash';
import {Path} from '../../../api-types';
import {SimpleTypes} from './json-schema';

export type RepresentationType = 'type';

export interface RepresentationValue {
    path: Path;
    value: any;
}

export interface Representation {
    destinationValues: RepresentationValue[];
    sourceValues: RepresentationValue[];
    type: RepresentationType;
    value: any;
}

export type SchemaOriginType = 'source' | 'destination';

export interface SchemaOrigin {
    path: Path;
    type: SchemaOriginType;
    value: any;
}

export interface ParsedSchemaKeywords {
    additionalProperties: Set<'json'>;
    type: ParsedTypeKeyword;
    properties: ParsedPropertiesKeyword;
}

export interface ParsedPropertiesKeyword {
    [key: string]: Set<'json'>;
}

export interface ParsedTypeKeyword {
    parsedValue: SimpleTypes[];
    origins: SchemaOrigin[];
}

export const allSchemaTypes: SimpleTypes[] = ['string', 'number', 'boolean', 'integer', 'array', 'object', 'null'];

export interface Set<T> {
    setType: T;
    type: 'all' | 'empty' | 'some';
    schemaOrigins: SchemaOrigin[];
    intersect(otherSet: Set<T>): Set<T>;
    union(otherSet: Set<T>): Set<T>;
    complement(): Set<T>;
    toRepresentations(): Representation[];
}

export const toSourceRepresentationValues = (schemaOrigins: SchemaOrigin[]): RepresentationValue[] =>
    toRepresentationValues(schemaOrigins, 'source');

export const toDestinationRepresentationValues = (schemaOrigins: SchemaOrigin[]): RepresentationValue[] =>
    toRepresentationValues(schemaOrigins, 'destination');

const toRepresentationValues = (
    schemaOrigins: SchemaOrigin[], origin: SchemaOriginType
): RepresentationValue[] => {
    const representationValuesWithDuplications: RepresentationValue[] = schemaOrigins
        .filter((schemaOrigin) => schemaOrigin.type === origin)
        .map((schemaOrigin) => ({
            path: schemaOrigin.path,
            value: schemaOrigin.value
        }));

    return _.uniqWith(representationValuesWithDuplications, _.isEqual);
};
