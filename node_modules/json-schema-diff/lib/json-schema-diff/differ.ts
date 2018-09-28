import {DiffResult} from '../api-types';
import {diffSchemas} from './differ/diff-schemas';
import {validateSchemas} from './differ/validate-schemas';

export class Differ {
    public static async diff(sourceSchema: any, destinationSchema: any): Promise<DiffResult> {
        await validateSchemas(sourceSchema, destinationSchema);

        return diffSchemas(sourceSchema, destinationSchema);
    }
}
