import {AllStringSet, EmptyStringSet} from '../../../../../lib/json-schema-diff/parser/json-set/json-subset/string-set';
import {Set} from '../../../../../lib/json-schema-diff/parser/json-set/set';
import {
    parsedSchemaKeywordsBuilder,
    ParsedSchemaKeywordsBuilder
} from '../parsed-schema-keywords/parsed-schema-keywords-builder';
import {
    ParsedTypeKeywordBuilder,
    parsedTypeKeywordBuilder
} from '../parsed-schema-keywords/parsed-type-keyword-builder';

export class StringSetBuilder {
    public static defaultStringSetBuilder(): StringSetBuilder {
        return new StringSetBuilder(parsedSchemaKeywordsBuilder, 'all');
    }

    public static defaultAllStringSetBuilder(): StringSetBuilder {
        return new StringSetBuilder(
            parsedSchemaKeywordsBuilder.withType(parsedTypeKeywordBuilder.withOrigins([]).withParsedValue(['string'])),
            'all'
        );
    }

    public static defaultEmptyStringSetBuilder(): StringSetBuilder {
        return new StringSetBuilder(
            parsedSchemaKeywordsBuilder.withType(parsedTypeKeywordBuilder.withOrigins([]).withParsedValue(['number'])),
            'empty'
        );
    }

    protected constructor(
        private readonly parsedSchemaKeywords: ParsedSchemaKeywordsBuilder,
        private readonly type: 'empty' | 'all'
    ) {}

    public withType(parsedTypeKeyword: ParsedTypeKeywordBuilder): StringSetBuilder {
        return new StringSetBuilder(this.parsedSchemaKeywords.withType(parsedTypeKeyword), this.type);
    }

    public build(): Set<'string'> {
        const keywords = this.parsedSchemaKeywords.build();
        return this.type === 'all'
            ? new AllStringSet(keywords.type.origins)
            : new EmptyStringSet(keywords.type.origins);
    }
}

export const emptyStringSetBuilder = StringSetBuilder.defaultEmptyStringSetBuilder();

export const allStringSetBuilder = StringSetBuilder.defaultAllStringSetBuilder();
