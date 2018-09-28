import {VError} from 'verror';
import {DiffResult, JsonSchemaDiffOptions} from './api-types';
import {Differ} from './json-schema-diff/differ';
import {FileReader} from './json-schema-diff/file-reader';
import {Reporter} from './json-schema-diff/reporter';

interface SchemasContents {
    sourceSchema: any;
    destinationSchema: any;
}

export class JsonSchemaDiff {
    private static parseSchema(schemaContent: string, schemaFilePath: string): any {
        try {
            return JSON.parse(schemaContent);
        } catch (error) {
            throw new VError(error, '%s', `Error parsing "${schemaFilePath}"`);
        }
    }

    private static containsBreakingChanges(diffResult: DiffResult): boolean {
        return diffResult.removedByDestinationSchema;
    }

    public constructor(
        private readonly fileReader: FileReader,
        private readonly reporter: Reporter) {}

    public async diffFiles(sourceSchemaFile: string, destinationSchemaFile: string): Promise<void> {
        try {
            const {sourceSchema, destinationSchema} = await this.loadSchemas(sourceSchemaFile, destinationSchemaFile);
            const diffResult = await this.diffSchemas({sourceSchema, destinationSchema});
            this.reportDiffResult(diffResult);

            if (JsonSchemaDiff.containsBreakingChanges(diffResult)) {
                return Promise.reject(new Error('Breaking changes detected'));
            }
        } catch (error) {
            this.reporter.reportError(error);
            return Promise.reject(error);
        }
    }

    public async diffSchemas(options: JsonSchemaDiffOptions): Promise<DiffResult> {
        return Differ.diff(options.sourceSchema, options.destinationSchema);
    }

    private reportDiffResult(diffResult: DiffResult): void {
        if (JsonSchemaDiff.containsBreakingChanges(diffResult)) {
            this.reporter.reportFailureWithDifferences(diffResult.differences);
        } else if (diffResult.differences.length > 0) {
            this.reporter.reportSuccessWithDifferences(diffResult.differences);
        } else {
            this.reporter.reportNoDifferencesFound();
        }
    }

    private async loadSchemas(sourceSchemaFile: string, destinationSchemaFile: string): Promise<SchemasContents> {
        const whenSourceSchema = this.fileReader.read(sourceSchemaFile);
        const whenDestinationSchema = this.fileReader.read(destinationSchemaFile);
        const [sourceSchemaJson, destinationSchemaJson] = await Promise.all([whenSourceSchema, whenDestinationSchema]);

        const sourceSchema = JsonSchemaDiff.parseSchema(sourceSchemaJson, sourceSchemaFile);
        const destinationSchema = JsonSchemaDiff.parseSchema(destinationSchemaJson, destinationSchemaFile);

        return {sourceSchema, destinationSchema};
    }
}
