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

    describe('intersect', () => {
        describe('empty and empty', () => {
            it('should intersect empty and empty string sets resulting in another empty string set', () => {
                const firstEmptyStringSet = emptyStringSetBuilder.build();

                const secondEmptyStringSet = emptyStringSetBuilder.build();

                const result = firstEmptyStringSet.intersect(secondEmptyStringSet);

                expect(result.toRepresentations()).toContainRepresentations([]);
            });

            it('should merge schema origins when empty and empty string sets are intersected', () => {
                const firstEmptyStringSet = emptyStringSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('number')
                    ]))
                .build();

                const secondEmptyStringSet = emptyStringSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('number')
                ]))
                .build();

                const complementOfIntersection = firstEmptyStringSet
                    .intersect(secondEmptyStringSet)
                    .complement();

                const representationValue = representationValueBuilder
                    .withPath(['type'])
                    .withValue('number');
                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValue)
                    .withSourceValue(representationValue)
                    .withValue('string')
                    .build();

                expect(complementOfIntersection.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });
        });

        describe('all and all', () => {
            it('should intersect all and all string sets resulting in another all string set', () => {
                const firstAllStringSet = allStringSetBuilder.build();

                const secondAllStringSet = allStringSetBuilder.build();

                const result = firstAllStringSet.intersect(secondAllStringSet);

                const representation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('string')
                    .build();
                expect(result.toRepresentations()).toContainRepresentations([representation]);
            });

            it('should merge schema origins when all and all string sets are intersected', () => {
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

                const result = firstAllStringSet.intersect(secondAllStringSet);

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
            it('should intersect empty and all string sets resulting in another empty string set', () => {
                const emptyStringSet = emptyStringSetBuilder.build();

                const allStringSet = allStringSetBuilder.build();

                const result = emptyStringSet.intersect(allStringSet);

                expect(result.toRepresentations()).toContainRepresentations([]);
            });

            it('should merge schema origins when empty and all string sets are intersected', () => {
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

                const complementOfTheResult = emptyStringSet.intersect(allStringSet).complement();

                const expectedRepresentation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('number'))
                    .withDestinationValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('string'))
                    .withValue('string')
                    .build();

                expect(complementOfTheResult.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const emptyStringSet = emptyStringSetBuilder.build();

                const allStringSet = allStringSetBuilder.build();

                const resultAllWithEmpty = allStringSet.intersect(emptyStringSet);
                const resultEmptyWithAll = emptyStringSet.intersect(allStringSet);

                expect(resultAllWithEmpty.complement().toRepresentations())
                    .toContainRepresentations(resultEmptyWithAll.complement().toRepresentations());
            });
        });
    });
});
