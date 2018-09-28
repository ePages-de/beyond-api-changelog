// tslint:disable:max-classes-per-file

import {AllArraySet, EmptyArraySet} from '../../../../../lib/json-schema-diff/parser/json-set/json-subset/array-set';
import {Set} from '../../../../../lib/json-schema-diff/parser/json-set/set';
import {
    parsedSchemaKeywordsBuilder,
    ParsedSchemaKeywordsBuilder
} from '../parsed-schema-keywords/parsed-schema-keywords-builder';
import {
    ParsedTypeKeywordBuilder
} from '../parsed-schema-keywords/parsed-type-keyword-builder';

export class ArraySetBuilder {
    public static defaultAllArraySetBuilder(): ArraySetBuilder {
        return new ArraySetBuilder(parsedSchemaKeywordsBuilder, 'all');
    }

    public static defaultEmptyArraySetBuilder(): ArraySetBuilder {
        return new ArraySetBuilder(parsedSchemaKeywordsBuilder, 'empty');
    }

    protected constructor(
        private readonly parsedSchemaKeywords: ParsedSchemaKeywordsBuilder,
        private readonly type: 'empty' | 'all'
    ) {}

    public withType(parsedTypeKeyword: ParsedTypeKeywordBuilder): ArraySetBuilder {
        return new ArraySetBuilder(this.parsedSchemaKeywords.withType(parsedTypeKeyword), this.type);
    }

    public build(): Set<'array'> {
        const keywords = this.parsedSchemaKeywords.build();
        return this.type === 'all'
            ? new AllArraySet(keywords.type.origins)
            : new EmptyArraySet(keywords.type.origins);
    }
}

export const emptyArraySetBuilder = ArraySetBuilder.defaultEmptyArraySetBuilder();

export const allArraySetBuilder = ArraySetBuilder.defaultAllArraySetBuilder();
