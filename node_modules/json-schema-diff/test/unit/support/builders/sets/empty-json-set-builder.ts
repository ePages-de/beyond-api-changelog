import {Set} from '../../../../../lib/json-schema-diff/parser/json-set/set';
import {createEmptyJsonSet} from '../../../../../lib/json-schema-diff/parser/set-factories/create-json-set';
import {SchemaOriginBuilder} from '../parsed-schema-keywords/schema-origin-builder';

export class EmptyJsonSetBuilder {
    public static defaultEmptyJsonSetBuilder(): EmptyJsonSetBuilder {
        return new EmptyJsonSetBuilder([]);
    }

    private constructor(private readonly origins: SchemaOriginBuilder[]) {}

    public withOrigins(origins: SchemaOriginBuilder[]): EmptyJsonSetBuilder {
        return new EmptyJsonSetBuilder(Array.from(origins));
    }

    public build(): Set<'json'> {
        return createEmptyJsonSet(this.origins.map((builder) => builder.build()));
    }
}

export const emptyJsonSetBuilder = EmptyJsonSetBuilder.defaultEmptyJsonSetBuilder();
