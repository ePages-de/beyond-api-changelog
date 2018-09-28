import {
    AllIntegerSet,
    EmptyIntegerSet
} from '../../../../../lib/json-schema-diff/parser/json-set/json-subset/integer-set';
import {Set} from '../../../../../lib/json-schema-diff/parser/json-set/set';
import {
    parsedSchemaKeywordsBuilder,
    ParsedSchemaKeywordsBuilder
} from '../parsed-schema-keywords/parsed-schema-keywords-builder';
import {
    ParsedTypeKeywordBuilder,
    parsedTypeKeywordBuilder
} from '../parsed-schema-keywords/parsed-type-keyword-builder';

export class IntegerSetBuilder {
    public static defaultAllIntegerSetBuilder(): IntegerSetBuilder {
        return new IntegerSetBuilder(
            parsedSchemaKeywordsBuilder.withType(parsedTypeKeywordBuilder.withOrigins([]).withParsedValue(['integer'])),
            'all'
        );
    }

    public static defaultEmptyIntegerSetBuilder(): IntegerSetBuilder {
        return new IntegerSetBuilder(
            parsedSchemaKeywordsBuilder.withType(parsedTypeKeywordBuilder.withOrigins([]).withParsedValue(['string'])),
            'empty'
        );
    }

    protected constructor(
        private readonly parsedSchemaKeywords: ParsedSchemaKeywordsBuilder,
        private readonly type: 'empty' | 'all'
    ) {}

    public withParsedSchemaKeywords(parsedSchemaKeywords: ParsedSchemaKeywordsBuilder): IntegerSetBuilder {
        return new IntegerSetBuilder(parsedSchemaKeywords, this.type);
    }

    public withType(parsedTypeKeyword: ParsedTypeKeywordBuilder): IntegerSetBuilder {
        return new IntegerSetBuilder(this.parsedSchemaKeywords.withType(parsedTypeKeyword), this.type);
    }

    public build(): Set<'integer'> {
        const keywords = this.parsedSchemaKeywords.build();
        return this.type === 'all'
            ? new AllIntegerSet(keywords.type.origins)
            : new EmptyIntegerSet(keywords.type.origins);
    }
}

export const emptyIntegerSetBuilder = IntegerSetBuilder.defaultEmptyIntegerSetBuilder();

export const allIntegerSetBuilder = IntegerSetBuilder.defaultAllIntegerSetBuilder();
