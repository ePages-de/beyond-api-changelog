import RefParser = require('json-schema-ref-parser');
import * as _ from 'lodash';
import {isBoolean} from 'util';
import {DiffResult, DiffResultDifference, DiffResultDifferenceType} from '../../api-types';
import {JsonSchema} from '../parser/json-set/json-schema';
import {Representation} from '../parser/json-set/set';
import {parseAsJsonSet} from '../parser/parse-as-json-set';

const representationsToAddedDifferences = (representations: Representation[]): DiffResultDifference[] =>
    representations.map((representation) => ({
        addedByDestinationSchema: true,
        destinationValues: representation.destinationValues,
        removedByDestinationSchema: false,
        sourceValues: representation.sourceValues,
        type: 'add.type' as DiffResultDifferenceType,
        value: representation.value
    }));

const representationsToRemovedDifferences = (representations: Representation[]): DiffResultDifference[] =>
    representations.map((representation) => ({
        addedByDestinationSchema: false,
        destinationValues: representation.destinationValues,
        removedByDestinationSchema: true,
        sourceValues: representation.sourceValues,
        type: 'remove.type' as DiffResultDifferenceType,
        value: representation.value
    }));

export const dereferenceSchema = async (schema: JsonSchema): Promise<JsonSchema> => {
    const refParser = new RefParser();
    return isBoolean(schema)
        ? schema
        : await refParser.dereference(schema as object, {dereference: {circular: false}}) as JsonSchema;
};

export const diffSchemas = async (sourceSchema: JsonSchema,
                                  destinationSchema: JsonSchema): Promise<DiffResult> => {

    const [dereferencedSourceSchema, dereferencedDestinationSchema] = await Promise.all([
        dereferenceSchema(sourceSchema), dereferenceSchema(destinationSchema)
    ]);

    const sourceSet = parseAsJsonSet(dereferencedSourceSchema, 'source');
    const destinationSet = parseAsJsonSet(dereferencedDestinationSchema, 'destination');

    const intersectionOfSets = sourceSet.intersect(destinationSet);
    const intersectionOfSetsComplement = intersectionOfSets.complement();
    const addedToDestinationSet = intersectionOfSetsComplement.intersect(destinationSet);
    const removedFromDestinationSet = intersectionOfSetsComplement.intersect(sourceSet);

    const addedRepresentations = addedToDestinationSet.toRepresentations();
    const removedRepresentations = removedFromDestinationSet.toRepresentations();

    const identicalRepresentations =
        _.intersectionWith(addedRepresentations, removedRepresentations, _.isEqual);
    const uniqueDifferenceAddedRepresentations =
        _.differenceWith(addedRepresentations,  identicalRepresentations, _.isEqual);
    const uniqueDifferenceRemovedRepresentations =
        _.differenceWith(removedRepresentations,  identicalRepresentations, _.isEqual);

    const addedDifferences = representationsToAddedDifferences(uniqueDifferenceAddedRepresentations);
    const removedDifferences = representationsToRemovedDifferences(uniqueDifferenceRemovedRepresentations);

    return {
        addedByDestinationSchema: addedDifferences.length > 0,
        differences: addedDifferences.concat(removedDifferences),
        removedByDestinationSchema: removedDifferences.length > 0
    };
};
