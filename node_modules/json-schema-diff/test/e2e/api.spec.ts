import * as JsonSchemaDiff from '../../lib/api';
import {DiffResult, DiffResultDifferenceType} from '../../lib/api-types';
import {JsonSchema} from '../../lib/json-schema-diff/parser/json-set/json-schema';
import {expectToFail} from '../support/expect-to-fail';

describe('api', () => {
    const whenSourceAndDestinationSchemasAreDiffed = (sourceSchema: any, destinationSchema: any): Promise<DiffResult> =>
        JsonSchemaDiff.diffSchemas({sourceSchema, destinationSchema});

    describe('input types', () => {
        it('should consider changing public input options type as a breaking change', async () => {
            const jsonSchemaDiffOptions = {
                destinationSchema: {},
                sourceSchema: {}
            };

            await JsonSchemaDiff.diffSchemas(jsonSchemaDiffOptions);
        });
    });

    describe('output types', () => {
        it('should throw error when schemas cant be diffed', async () => {
            const sourceSchema = {not: 'a valid json schema'};
            const destinationSchema = {};

            const error = await expectToFail(whenSourceAndDestinationSchemasAreDiffed(sourceSchema, destinationSchema));

            expect(error.message).toEqual(jasmine.stringMatching('Source schema is not a valid json schema'));
        });

        it('should return a result according to the defined public types', async () => {
            const sourceSchema: JsonSchema = {type: 'string'};
            const destinationSchema: JsonSchema = {type: ['string', 'number']};

            const result = await whenSourceAndDestinationSchemasAreDiffed(sourceSchema, destinationSchema);
            const resultWithoutTypes = result as any;

            expect(resultWithoutTypes).toEqual({
                addedByDestinationSchema: jasmine.any(Boolean),
                differences: [{
                    addedByDestinationSchema: jasmine.any(Boolean),
                    destinationValues: [{
                        path: jasmine.any(Array),
                        value: jasmine.anything()
                    }],
                    removedByDestinationSchema: jasmine.any(Boolean),
                    sourceValues: [{
                        path: jasmine.any(Array),
                        value: jasmine.anything()
                    }],
                    type: jasmine.any(String),
                    value: jasmine.anything()
                }],
                removedByDestinationSchema: jasmine.any(Boolean)
            });
        });

        describe('difference types', () => {
            type InputExamplesByDifferenceType = {
                [type in DiffResultDifferenceType]: string
            };

            it('should consider changing the map as a breaking change', () => {
                const inputExamplesByDifferenceType: InputExamplesByDifferenceType = {
                    'add.type': '',
                    'remove.type': ''
                };

                expect(inputExamplesByDifferenceType).toBeDefined();
            });
        });
    });
});
