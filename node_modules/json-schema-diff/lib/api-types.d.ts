// tslint:disable:no-namespace

declare namespace JsonSchemaDiff {
    export type Path = Array<string | number>;

    export interface DiffResultDifferenceValue {
        path: Path;
        value: any;
    }

    export type DiffResultDifferenceType = 'add.type' | 'remove.type';

    export interface DiffResultDifference {
        addedByDestinationSchema: boolean;
        destinationValues: DiffResultDifferenceValue[];
        removedByDestinationSchema: boolean;
        sourceValues: DiffResultDifferenceValue[];
        type: DiffResultDifferenceType;
        value: any;
    }

    export interface DiffResult {
        addedByDestinationSchema: boolean;
        differences: DiffResultDifference[];
        removedByDestinationSchema: boolean;
    }

    export interface JsonSchemaDiffOptions {
        sourceSchema: any;
        destinationSchema: any;
    }
}

declare interface JsonSchemaDiffStatic {
    diffSchemas: (options: JsonSchemaDiff.JsonSchemaDiffOptions) => Promise<JsonSchemaDiff.DiffResult>;
}

declare const JsonSchemaDiff: JsonSchemaDiffStatic;
export = JsonSchemaDiff;
