import * as _ from 'lodash';
import { Path } from '../../../../../lib/api-types';
import {SchemaOrigin, SchemaOriginType} from '../../../../../lib/json-schema-diff/parser/json-set/set';

export class SchemaOriginBuilder {
    public static defaultSchemaOriginBuilder(): SchemaOriginBuilder {
        return new SchemaOriginBuilder(['properties', 'default-path'], 'devault-value', 'source');
    }

    private constructor(
        private readonly path: Path,
        private readonly value: any,
        private readonly type: SchemaOriginType
    ) {}

    public withPath(path: Path): SchemaOriginBuilder {
        return new SchemaOriginBuilder([...path], this.value, this.type);
    }

    public withValue(value: any): SchemaOriginBuilder {
        return new SchemaOriginBuilder(this.path, _.cloneDeep(value), this.type);
    }

    public withType(type: SchemaOriginType): SchemaOriginBuilder {
        return new SchemaOriginBuilder(this.path, this.value, type);
    }

    public build(): SchemaOrigin {
        return {
            path: [...this.path],
            type: this.type,
            value: _.cloneDeep(this.value)
        };
    }
}

export const schemaOriginBuilder = SchemaOriginBuilder.defaultSchemaOriginBuilder();
