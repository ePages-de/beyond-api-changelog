import {JsonSchema} from '../../lib/json-schema-diff/parser/json-set/json-schema';
import {expectToFail} from '../support/expect-to-fail';
import {
    diffResultDifferenceBuilder} from './support/builders/diff-result-difference-builder';
import {diffResultDifferenceValueBuilder} from './support/builders/diff-result-difference-value-builder';
import {createJsonSchemaDiffWithMocks} from './support/create-json-schema-diff';
import {createMockFileSystem, MockFileSystem} from './support/mocks/mock-file-system';
import {createMockReporter, MockReporter} from './support/mocks/mock-reporter';

describe('json-schema-diff', () => {
    let mockReporter: MockReporter;
    let mockFileSystem: MockFileSystem;

    beforeEach(() => {
        mockFileSystem = createMockFileSystem();
        mockReporter = createMockReporter();
    });

    const invokeDiffForLocations = (sourceSchemaFile: string, destinationSchemaFile: string): Promise<void> => {
        const jsonSchemaDiff = createJsonSchemaDiffWithMocks({mockFileSystem, mockReporter});
        return jsonSchemaDiff.diffFiles(sourceSchemaFile, destinationSchemaFile);
    };

    const defaultSourceSchemaFileName = 'default-source-schema-file.json';
    const defaultDestinationSchemaFileName = 'default-destination-schema-file.json';

    const invokeDiffFilesWithSource = (sourceSchemaFile: string): Promise<void> =>
        invokeDiffForLocations(sourceSchemaFile, defaultDestinationSchemaFileName);

    const invokeDiffFilesWithDestination = (destinationSchemaFile: string): Promise<void> =>
        invokeDiffForLocations(defaultSourceSchemaFileName, destinationSchemaFile);

    const invokeDiffFilesWithContents = (sourceSchemaContent: JsonSchema,
                                         destinationSchemaContent: JsonSchema): Promise<void> => {
        mockFileSystem.givenReadFileReturnsContents({
            [defaultSourceSchemaFileName]: Promise.resolve(JSON.stringify(sourceSchemaContent)),
            [defaultDestinationSchemaFileName]: Promise.resolve(JSON.stringify(destinationSchemaContent))
        });
        return invokeDiffForLocations(defaultSourceSchemaFileName, defaultDestinationSchemaFileName);
    };

    describe('diffFiles', () => {
        it('should load the source schema file', async () => {
            const sourceSchemaFile = 'source-file.json';

            await invokeDiffFilesWithSource(sourceSchemaFile);

            expect(mockFileSystem.readFile).toHaveBeenCalledWith(sourceSchemaFile);
        });

        it('should load the destination schema file', async () => {
            const destinationSchemaFile = 'destination-file.json';

            await invokeDiffFilesWithDestination(destinationSchemaFile);

            expect(mockFileSystem.readFile).toHaveBeenCalledWith(destinationSchemaFile);
        });

        it('should report an error when loading the source schema file fails', async () => {
            mockFileSystem.givenReadFileReturnsError(new Error('an error'));

            await expectToFail(invokeDiffFilesWithSource('source-schema'));

            expect(mockReporter.reportError)
                .toHaveBeenCalledWith(new Error('Error loading "source-schema": an error'));
        });

        it('should report an error when loading the destination schema file fails', async () => {
            mockFileSystem.givenReadFileReturnsContents({
                [defaultSourceSchemaFileName]: Promise.resolve('{}'),
                ['destination-schema']: Promise.reject(new Error('an error'))
            });

            await expectToFail(invokeDiffFilesWithDestination('destination-schema'));

            expect(mockReporter.reportError)
                .toHaveBeenCalledWith(new Error('Error loading "destination-schema": an error'));
        });

        it('should return the error when the source file is not in json format', async () => {
            mockFileSystem.givenReadFileReturnsContents({
                ['source.json']: Promise.resolve('{not json}'),
                [defaultDestinationSchemaFileName]: Promise.resolve('{}')
            });

            await expectToFail(invokeDiffFilesWithSource('source.json'));

            expect(mockReporter.reportError)
                .toHaveBeenCalledWith(
                    new Error('Error parsing "source.json": Unexpected token n in JSON at position 1')
                );
        });

        it('should return the error when the destination file is not in json format', async () => {
            mockFileSystem.givenReadFileReturnsContents({
                [defaultSourceSchemaFileName]: Promise.resolve('{}'),
                ['destination.json']: Promise.resolve('{not json}')
            });

            await expectToFail(invokeDiffFilesWithDestination('destination.json'));

            expect(mockReporter.reportError)
                .toHaveBeenCalledWith(
                    new Error('Error parsing "destination.json": Unexpected token n in JSON at position 1')
                );
        });

        it('should report no differences when none are found', async () => {
            const aSchema: JsonSchema = {type: 'object'};

            await invokeDiffFilesWithContents(aSchema, aSchema);

            expect(mockReporter.reportNoDifferencesFound).toHaveBeenCalled();
            expect(mockReporter.reportSuccessWithDifferences).not.toHaveBeenCalled();
        });

        it('should not fail and report compatible differences when an addition is found', async () => {
            const sourceSchema: JsonSchema = {type: 'object'};
            const destinationSchema: JsonSchema = {type: ['string', 'object']};

            await invokeDiffFilesWithContents(sourceSchema, destinationSchema);

            expect(mockReporter.reportNoDifferencesFound).not.toHaveBeenCalled();
            expect(mockReporter.reportSuccessWithDifferences).toHaveBeenCalledWith([
                diffResultDifferenceBuilder
                    .withSourceValue(
                        diffResultDifferenceValueBuilder
                            .withPath(['type'])
                            .withValue('object'))
                    .withDestinationValue(
                        diffResultDifferenceValueBuilder
                            .withPath(['type'])
                            .withValue(['string', 'object'])
                    )
                    .withValue('string')
                    .withTypeAddType().build()
            ]);
        });

        it('should fail and report incompatible differences when a removal is found', async () => {
            const sourceSchema: JsonSchema = {type: ['string', 'object']};
            const destinationSchema: JsonSchema = {type: 'object'};

            await expectToFail(invokeDiffFilesWithContents(sourceSchema, destinationSchema));

            expect(mockReporter.reportFailureWithDifferences).toHaveBeenCalledWith([
                diffResultDifferenceBuilder
                    .withTypeRemoveType()
                    .withDestinationValue(
                        diffResultDifferenceValueBuilder
                            .withPath(['type'])
                            .withValue('object'))
                    .withSourceValue(
                        diffResultDifferenceValueBuilder
                            .withPath(['type'])
                            .withValue(['string', 'object'])
                    )
                    .withValue('string')
                    .build()
            ]);
        });
    });
});
