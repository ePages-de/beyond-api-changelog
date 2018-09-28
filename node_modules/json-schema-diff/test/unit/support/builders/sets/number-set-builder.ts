import {AllNumberSet, EmptyNumberSet} from '../../../../../lib/json-schema-diff/parser/json-set/json-subset/number-set';
import {Set} from '../../../../../lib/json-schema-diff/parser/json-set/set';
import {
    parsedSchemaKeywordsBuilder,
    ParsedSchemaKeywordsBuilder
} from '../parsed-schema-keywords/parsed-schema-keywords-builder';
import {
    ParsedTypeKeywordBuilder,
    parsedTypeKeywordBuilder
} from '../parsed-schema-keywords/parsed-type-keyword-builder';

export class NumberSetBuilder {
    public static defaultNumberSetBuilder(): NumberSetBuilder {
        return new NumberSetBuilder(parsedSchemaKeywordsBuilder, 'all');
    }

    public static defaultAllBooleanSetBuilder(): NumberSetBuilder {
        return new NumberSetBuilder(
            parsedSchemaKeywordsBuilder.withType(parsedTypeKeywordBuilder.withOrigins([]).withParsedValue(['number'])),
            'all'
        );
    }

    public static defaultEmptyBooleanSetBuilder(): NumberSetBuilder {
        return new NumberSetBuilder(
            parsedSchemaKeywordsBuilder.withType(parsedTypeKeywordBuilder.withOrigins([]).withParsedValue(['string'])),
            'empty'
        );
    }

    protected constructor(
        private readonly parsedSchemaKeywords: ParsedSchemaKeywordsBuilder,
        private readonly type: 'empty' | 'all'
    ) {}

    public withType(parsedTypeKeyword: ParsedTypeKeywordBuilder): NumberSetBuilder {
        return new NumberSetBuilder(this.parsedSchemaKeywords.withType(parsedTypeKeyword), this.type);
    }

    public build(): Set<'number'> {
        const keywords = this.parsedSchemaKeywords.build();
        return this.type === 'all'
            ? new AllNumberSet(keywords.type.origins)
            : new EmptyNumberSet(keywords.type.origins);
    }
}

export const emptyNumberSetBuilder = NumberSetBuilder.defaultEmptyBooleanSetBuilder();

export const allNumberSetBuilder = NumberSetBuilder.defaultAllBooleanSetBuilder();
