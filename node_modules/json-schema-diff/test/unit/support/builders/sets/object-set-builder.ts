import {
    AllObjectSet, EmptyObjectSet,
    SomeObjectSet
} from '../../../../../lib/json-schema-diff/parser/json-set/json-subset/object-set';
import {Set} from '../../../../../lib/json-schema-diff/parser/json-set/set';
import {
    parsedSchemaKeywordsBuilder,
    ParsedSchemaKeywordsBuilder
} from '../parsed-schema-keywords/parsed-schema-keywords-builder';
import {
    ParsedTypeKeywordBuilder,
    parsedTypeKeywordBuilder
} from '../parsed-schema-keywords/parsed-type-keyword-builder';
import {allJsonSetBuilder} from './all-json-set-builder';
import {emptyJsonSetBuilder} from './empty-json-set-builder';

interface JsonSetBuilder {
    build(): Set<'json'>;
}

interface ParsedPropertiesBuilder {
    [k: string]: JsonSetBuilder;
}

export class ObjectSetBuilder {
    public static defaultObjectSetBuilder(): ObjectSetBuilder {
        return new ObjectSetBuilder(parsedSchemaKeywordsBuilder, 'all');
    }

    public static defaultAllObjectSetBuilder(): ObjectSetBuilder {
        return new ObjectSetBuilder(
            parsedSchemaKeywordsBuilder
                .withType(parsedTypeKeywordBuilder.withOrigins([]).withParsedValue(['object']))
                .withAdditionalProperties(allJsonSetBuilder.withOrigins([])),
            'all'
        );
    }

    public static defaultEmptyObjectSetBuilder(): ObjectSetBuilder {
        return new ObjectSetBuilder(
            parsedSchemaKeywordsBuilder
                .withType(parsedTypeKeywordBuilder.withOrigins([]).withParsedValue(['string']))
                .withAdditionalProperties(emptyJsonSetBuilder.withOrigins([])),
            'empty'
        );
    }

    public static defaultSomeObjectSetBuilder(): ObjectSetBuilder {
        return new ObjectSetBuilder(
            parsedSchemaKeywordsBuilder
                .withType(parsedTypeKeywordBuilder.withOrigins([]).withParsedValue(['object']))
                .withProperties({'default-property': emptyJsonSetBuilder})
                .withAdditionalProperties(emptyJsonSetBuilder.withOrigins([])),
            'some'
        );
    }

    private constructor(
        private readonly parsedSchemaKeywords: ParsedSchemaKeywordsBuilder,
        private readonly type: 'empty' | 'all' | 'some'
    ) {}

    public withType(parsedTypeKeyword: ParsedTypeKeywordBuilder): ObjectSetBuilder {
        return new ObjectSetBuilder(this.parsedSchemaKeywords.withType(parsedTypeKeyword), this.type);
    }

    public withAdditionalProperties(additionalProperties: JsonSetBuilder): ObjectSetBuilder {
        return new ObjectSetBuilder(
            this.parsedSchemaKeywords.withAdditionalProperties(additionalProperties),
            this.type
        );
    }

    public withProperties(properties: ParsedPropertiesBuilder): ObjectSetBuilder {
        return new ObjectSetBuilder(
            this.parsedSchemaKeywords.withProperties(properties),
            this.type
        );
    }

    public build(): Set<'object'> {
        const parsedKeywords = this.parsedSchemaKeywords.build();
        switch (this.type) {
            case 'all':
                return new AllObjectSet(
                    parsedKeywords.type.origins, parsedKeywords.properties, parsedKeywords.additionalProperties
                );
            case 'empty':
                return new EmptyObjectSet(
                    parsedKeywords.type.origins, parsedKeywords.properties, parsedKeywords.additionalProperties
                );
            case 'some':
                return new SomeObjectSet(
                    parsedKeywords.type.origins, parsedKeywords.properties, parsedKeywords.additionalProperties
                );

        }
    }
}

export const allObjectSetBuilder = ObjectSetBuilder.defaultAllObjectSetBuilder();

export const emptyObjectSetBuilder = ObjectSetBuilder.defaultEmptyObjectSetBuilder();

export const someObjectSetBuilder = ObjectSetBuilder.defaultSomeObjectSetBuilder();
