import {SimpleTypes} from '../../../../../lib/json-schema-diff/parser/json-set/json-schema';
import {ParsedTypeKeyword} from '../../../../../lib/json-schema-diff/parser/json-set/set';
import {SchemaOriginBuilder} from './schema-origin-builder';

export class ParsedTypeKeywordBuilder {
    public static defaultParsedTypeKeywordBuilder(): ParsedTypeKeywordBuilder {
        return new ParsedTypeKeywordBuilder([], []);
    }

    private constructor(private readonly parsedValue: SimpleTypes[], private readonly origins: SchemaOriginBuilder[]) {}

    public withParsedValue(parsedValue: SimpleTypes[]): ParsedTypeKeywordBuilder {
        return new ParsedTypeKeywordBuilder(Array.from(parsedValue), this.origins);
    }

    public withOrigins(schemaOriginBuilders: SchemaOriginBuilder[]): ParsedTypeKeywordBuilder {
        return new ParsedTypeKeywordBuilder(this.parsedValue, Array.from(schemaOriginBuilders));
    }

    public build(): ParsedTypeKeyword {

        return {
            origins: this.origins.map((builder) => builder.build()),
            parsedValue: Array.from(this.parsedValue)
        };
    }
}

export const parsedTypeKeywordBuilder = ParsedTypeKeywordBuilder.defaultParsedTypeKeywordBuilder();
