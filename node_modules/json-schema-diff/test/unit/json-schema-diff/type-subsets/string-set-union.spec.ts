import {parsedTypeKeywordBuilder} from '../../support/builders/parsed-schema-keywords/parsed-type-keyword-builder';
import {schemaOriginBuilder} from '../../support/builders/parsed-schema-keywords/schema-origin-builder';
import {representationBuilder} from '../../support/builders/representation-builder';
import {representationValueBuilder} from '../../support/builders/representation-value-builder';
import {
    allStringSetBuilder,
    emptyStringSetBuilder
} from '../../support/builders/sets/string-set-builder';
import {customMatchers, CustomMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('string-set', () => {
    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('union', () => {
        describe('empty and empty', () => {
            it('should union empty and empty string sets resulting in another empty string set', () => {
                const firstEmptyStringSet = emptyStringSetBuilder.build();

                const secondEmptyStringSet = emptyStringSetBuilder.build();

                const result = firstEmptyStringSet.union(secondEmptyStringSet);

                expect(result.toRepresentations()).toContainRepresentations([]);
            });

            it('should merge schema origins when empty and empty integer sets are unioned', () => {
                const firstEmptyStringSet = emptyStringSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('number')
                ])).build();

                const secondEmptyStringSet = emptyStringSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('number')
                ])).build();

                const complementOfUnion = firstEmptyStringSet.union(secondEmptyStringSet).complement();

                const representationValue = representationValueBuilder
                    .withPath(['type'])
                    .withValue('number');
                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValue)
                    .withSourceValue(representationValue)
                    .withValue('string')
                    .build();

                expect(complementOfUnion.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });
        });

        describe('all and all', () => {
            it('should union all and all string sets resulting in another all string set', () => {
                const firstAllStringSet = allStringSetBuilder.build();

                const secondAllStringSet = allStringSetBuilder.build();

                const result = firstAllStringSet.union(secondAllStringSet);

                const representation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('string')
                    .build();
                expect(result.toRepresentations()).toContainRepresentations([representation]);
            });

            it('should merge schema origins when all and all string sets are unioned', () => {
                const firstAllStringSet = allStringSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('string')
                ])).build();

                const secondAllStringSet = allStringSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('string')
                ])).build();

                const result = firstAllStringSet.union(secondAllStringSet);

                const representationValue = representationValueBuilder
                    .withPath(['type'])
                    .withValue('string');
                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValue)
                    .withSourceValue(representationValue)
                    .withValue('string')
                    .build();

                expect(result.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });
        });

        describe('all and empty', () => {
            it('should union empty and all string sets resulting in another all string set', () => {
                const emptyStringSet = emptyStringSetBuilder.build();

                const allStringSet = allStringSetBuilder.build();

                const result = emptyStringSet.union(allStringSet);

                const representation = representationBuilder
                    .withDestinationValues([])
                    .withSourceValues([])
                    .withValue('string')
                    .build();
                expect(result.toRepresentations()).toContainRepresentations([representation]);
            });

            it('should merge schema origins when empty and all string sets are unioned', () => {
                const emptyStringSet = emptyStringSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('number')
                ])).build();

                const allStringSet = allStringSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('string')
                ])).build();

                const result = emptyStringSet.union(allStringSet);

                const expectedRepresentation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('number'))
                    .withDestinationValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('string'))
                    .withValue('string')
                    .build();

                expect(result.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const emptyStringSet = emptyStringSetBuilder.build();

                const allStringSet = allStringSetBuilder.build();

                const resultAllWithEmpty = allStringSet.union(emptyStringSet);
                const resultEmptyWithAll = emptyStringSet.union(allStringSet);

                expect(resultAllWithEmpty.toRepresentations())
                    .toContainRepresentations(resultEmptyWithAll.toRepresentations());
            });
        });
    });
});
