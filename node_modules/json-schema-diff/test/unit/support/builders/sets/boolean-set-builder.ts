import {
    AllBooleanSet,
    EmptyBooleanSet
} from '../../../../../lib/json-schema-diff/parser/json-set/json-subset/boolean-set';
import {Set} from '../../../../../lib/json-schema-diff/parser/json-set/set';
import {
    parsedSchemaKeywordsBuilder,
    ParsedSchemaKeywordsBuilder
} from '../parsed-schema-keywords/parsed-schema-keywords-builder';
import {
    ParsedTypeKeywordBuilder,
    parsedTypeKeywordBuilder
} from '../parsed-schema-keywords/parsed-type-keyword-builder';

export class BooleanSetBuilder {
    public static defaultAllBooleanSetBuilder(): BooleanSetBuilder {
        return new BooleanSetBuilder(
            parsedSchemaKeywordsBuilder.withType(parsedTypeKeywordBuilder.withOrigins([]).withParsedValue(['boolean'])),
            'all'
        );
    }

    public static defaultEmptyBooleanSetBuilder(): BooleanSetBuilder {
        return new BooleanSetBuilder(
            parsedSchemaKeywordsBuilder.withType(parsedTypeKeywordBuilder.withOrigins([]).withParsedValue(['string'])),
            'empty'
        );
    }

    protected constructor(
        private readonly parsedSchemaKeywords: ParsedSchemaKeywordsBuilder,
        private readonly type: 'empty' | 'all'
    ) {}

    public withType(parsedTypeKeyword: ParsedTypeKeywordBuilder): BooleanSetBuilder {
        return new BooleanSetBuilder(this.parsedSchemaKeywords.withType(parsedTypeKeyword), this.type);
    }

    public build(): Set<'boolean'> {
        const keywords = this.parsedSchemaKeywords.build();
        return this.type === 'all'
            ? new AllBooleanSet(keywords.type.origins)
            : new EmptyBooleanSet(keywords.type.origins);
    }
}

export const emptyBooleanSetBuilder = BooleanSetBuilder.defaultEmptyBooleanSetBuilder();

export const allBooleanSetBuilder = BooleanSetBuilder.defaultAllBooleanSetBuilder();
