import {DiffResult} from '../../../lib/api-types';
import {JsonSchema} from '../../../lib/json-schema-diff/parser/json-set/json-schema';
import {expectToFail} from '../../support/expect-to-fail';
import {createJsonSchemaDiff} from './create-json-schema-diff';

export const invokeDiff = async (sourceSchema: JsonSchema, destinationSchema: JsonSchema): Promise<DiffResult> => {
    try {
        const jsonSchemaDiff = createJsonSchemaDiff();
        return await jsonSchemaDiff.diffSchemas({sourceSchema, destinationSchema});
    } catch (error) {
        fail(error.stack);
        throw error;
    }
};

export const invokeDiffAndExpectToFail = async (sourceSchema: JsonSchema,
                                                destinationSchema: JsonSchema): Promise<Error> => {
    const jsonSchemaDiff = createJsonSchemaDiff();
    return expectToFail(jsonSchemaDiff.diffSchemas({sourceSchema, destinationSchema}));
};
