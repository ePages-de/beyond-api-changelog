import {AllNullSet, EmptyNullSet} from '../../../../../lib/json-schema-diff/parser/json-set/json-subset/null-set';
import {Set} from '../../../../../lib/json-schema-diff/parser/json-set/set';
import {
    parsedSchemaKeywordsBuilder,
    ParsedSchemaKeywordsBuilder
} from '../parsed-schema-keywords/parsed-schema-keywords-builder';
import {
    ParsedTypeKeywordBuilder,
    parsedTypeKeywordBuilder
} from '../parsed-schema-keywords/parsed-type-keyword-builder';

export class NullSetBuilder {
    public static defaultNullSetBuilder(): NullSetBuilder {
        return new NullSetBuilder(parsedSchemaKeywordsBuilder, 'all');
    }

    public static defaultAllNullSetBuilder(): NullSetBuilder {
        return new NullSetBuilder(
            parsedSchemaKeywordsBuilder.withType(parsedTypeKeywordBuilder.withOrigins([]).withParsedValue(['null'])),
            'all'
        );
    }

    public static defaultEmptyNullSetBuilder(): NullSetBuilder {
        return new NullSetBuilder(
            parsedSchemaKeywordsBuilder.withType(parsedTypeKeywordBuilder.withOrigins([]).withParsedValue(['string'])),
            'empty'
        );
    }

    protected constructor(
        private readonly parsedSchemaKeywords: ParsedSchemaKeywordsBuilder,
        private readonly type: 'empty' | 'all'
    ) {}

    public withType(parsedTypeKeyword: ParsedTypeKeywordBuilder): NullSetBuilder {
        return new NullSetBuilder(this.parsedSchemaKeywords.withType(parsedTypeKeyword), this.type);
    }

    public build(): Set<'null'> {
        const keywords = this.parsedSchemaKeywords.build();
        return this.type === 'all'
            ? new AllNullSet(keywords.type.origins)
            : new EmptyNullSet(keywords.type.origins);
    }
}

export const emptyNullSetBuilder = NullSetBuilder.defaultEmptyNullSetBuilder();

export const allNullSetBuilder = NullSetBuilder.defaultAllNullSetBuilder();
