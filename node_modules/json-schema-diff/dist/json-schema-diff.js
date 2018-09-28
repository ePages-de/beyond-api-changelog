"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const verror_1 = require("verror");
const differ_1 = require("./json-schema-diff/differ");
class JsonSchemaDiff {
    constructor(fileReader, reporter) {
        this.fileReader = fileReader;
        this.reporter = reporter;
    }
    static parseSchema(schemaContent, schemaFilePath) {
        try {
            return JSON.parse(schemaContent);
        }
        catch (error) {
            throw new verror_1.VError(error, '%s', `Error parsing "${schemaFilePath}"`);
        }
    }
    static containsBreakingChanges(diffResult) {
        return diffResult.removedByDestinationSchema;
    }
    diffFiles(sourceSchemaFile, destinationSchemaFile) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { sourceSchema, destinationSchema } = yield this.loadSchemas(sourceSchemaFile, destinationSchemaFile);
                const diffResult = yield this.diffSchemas({ sourceSchema, destinationSchema });
                this.reportDiffResult(diffResult);
                if (JsonSchemaDiff.containsBreakingChanges(diffResult)) {
                    return Promise.reject(new Error('Breaking changes detected'));
                }
            }
            catch (error) {
                this.reporter.reportError(error);
                return Promise.reject(error);
            }
        });
    }
    diffSchemas(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return differ_1.Differ.diff(options.sourceSchema, options.destinationSchema);
        });
    }
    reportDiffResult(diffResult) {
        if (JsonSchemaDiff.containsBreakingChanges(diffResult)) {
            this.reporter.reportFailureWithDifferences(diffResult.differences);
        }
        else if (diffResult.differences.length > 0) {
            this.reporter.reportSuccessWithDifferences(diffResult.differences);
        }
        else {
            this.reporter.reportNoDifferencesFound();
        }
    }
    loadSchemas(sourceSchemaFile, destinationSchemaFile) {
        return __awaiter(this, void 0, void 0, function* () {
            const whenSourceSchema = this.fileReader.read(sourceSchemaFile);
            const whenDestinationSchema = this.fileReader.read(destinationSchemaFile);
            const [sourceSchemaJson, destinationSchemaJson] = yield Promise.all([whenSourceSchema, whenDestinationSchema]);
            const sourceSchema = JsonSchemaDiff.parseSchema(sourceSchemaJson, sourceSchemaFile);
            const destinationSchema = JsonSchemaDiff.parseSchema(destinationSchemaJson, destinationSchemaFile);
            return { sourceSchema, destinationSchema };
        });
    }
}
exports.JsonSchemaDiff = JsonSchemaDiff;
