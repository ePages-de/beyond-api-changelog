import * as _ from 'lodash';
import {
    ParsedPropertiesKeyword, ParsedSchemaKeywords, Set
} from '../../../../../lib/json-schema-diff/parser/json-set/set';
import {emptyJsonSetBuilder} from '../sets/empty-json-set-builder';
import {parsedTypeKeywordBuilder, ParsedTypeKeywordBuilder} from './parsed-type-keyword-builder';

interface JsonSetBuilder {
    build(): Set<'json'>;
}

interface ParsedPropertiesBuilder {
    [k: string]: JsonSetBuilder;
}

export class ParsedSchemaKeywordsBuilder {
    public static defaultParsedSchemaKeywordsBuilder() {
        return new ParsedSchemaKeywordsBuilder(parsedTypeKeywordBuilder, emptyJsonSetBuilder.withOrigins([]), {});
    }

    private constructor(
        private type: ParsedTypeKeywordBuilder,
        private additionalProperties: JsonSetBuilder,
        private properties: ParsedPropertiesBuilder
    ) {}

    public withType(type: ParsedTypeKeywordBuilder): ParsedSchemaKeywordsBuilder {
        return new ParsedSchemaKeywordsBuilder(type, this.additionalProperties, this.properties);
    }

    public withAdditionalProperties(additionalProperties: JsonSetBuilder): ParsedSchemaKeywordsBuilder {
        return new ParsedSchemaKeywordsBuilder(this.type, additionalProperties, this.properties);
    }

    public withProperties(properties: ParsedPropertiesBuilder): ParsedSchemaKeywordsBuilder {
        return new ParsedSchemaKeywordsBuilder(this.type, this.additionalProperties, _.clone(properties));
    }

    public build(): ParsedSchemaKeywords {

        const properties: ParsedPropertiesKeyword = {};
        Object.keys(this.properties).forEach((propertyName) => {
            properties[propertyName] = this.properties[propertyName].build();
        });

        return {
            additionalProperties: this.additionalProperties.build(),
            properties,
            type: this.type.build()
        };
    }
}

export const parsedSchemaKeywordsBuilder = ParsedSchemaKeywordsBuilder.defaultParsedSchemaKeywordsBuilder();
