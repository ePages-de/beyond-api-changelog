import {parsedTypeKeywordBuilder} from '../../support/builders/parsed-schema-keywords/parsed-type-keyword-builder';
import {schemaOriginBuilder} from '../../support/builders/parsed-schema-keywords/schema-origin-builder';
import {representationBuilder} from '../../support/builders/representation-builder';
import {representationValueBuilder} from '../../support/builders/representation-value-builder';
import {
    allArraySetBuilder, emptyArraySetBuilder
} from '../../support/builders/sets/array-set-builder';
import {customMatchers, CustomMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('array-set', () => {
    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('intersection', () => {
        describe('empty and empty', () => {
            it('should intersect empty and empty array sets resulting in another empty array set', () => {
                const emptyArraySetSource = emptyArraySetBuilder.build();

                const emptyArraySetDestination = emptyArraySetBuilder.build();

                const resultArraySet = emptyArraySetSource.intersect(emptyArraySetDestination);

                expect(resultArraySet.toRepresentations()).toContainRepresentations([]);
            });

            it('should merge schema origins when empty and empty array sets are intersected', () => {
                const emptyArraySetSource = emptyArraySetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('string')
                ])).build();

                const emptyArraySetDestination = emptyArraySetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('string')
                ])).build();

                const complementOfIntersection = emptyArraySetSource.intersect(emptyArraySetDestination).complement();

                const representationValue = representationValueBuilder
                    .withPath(['type'])
                    .withValue('string');
                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValue)
                    .withSourceValue(representationValue)
                    .withValue('array')
                    .build();

                expect(complementOfIntersection.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });
        });

        describe('all and all', () => {
            it('should intersect all and all array sets resulting in another all array set', () => {
                const allArraySetSource = allArraySetBuilder.build();

                const allArraySetDestination = allArraySetBuilder.build();

                const resultArraySet = allArraySetSource.intersect(allArraySetDestination);

                const representation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('array')
                    .build();
                expect(resultArraySet.toRepresentations()).toContainRepresentations([representation]);
            });

            it('should merge schema origins when all and all array sets are intersected', () => {
                const allArraySetSource = allArraySetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('array')
                ])).build();

                const allArraySetDestination = allArraySetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('array')
                ])).build();

                const resultArraySet = allArraySetSource.intersect(allArraySetDestination);

                const representationValue = representationValueBuilder
                    .withPath(['type'])
                    .withValue('array');
                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValue)
                    .withSourceValue(representationValue)
                    .withValue('array')
                    .build();

                expect(resultArraySet.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });
        });

        describe('all and empty', () => {
            it('should intersect empty and all array sets resulting in another empty array set', () => {
                const emptyArraySetSource = emptyArraySetBuilder.build();

                const allArraySetDestination = allArraySetBuilder.build();

                const resultArraySet = emptyArraySetSource.intersect(allArraySetDestination);

                expect(resultArraySet.toRepresentations()).toContainRepresentations([]);
            });

            it('should merge schema origins when empty and all array sets are intersected', () => {
                const emptyArraySetSource = emptyArraySetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('string')
                ])).build();

                const allArraySetDestination = allArraySetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('array')
                ])).build();

                const complementOfIntersection = emptyArraySetSource.intersect(allArraySetDestination).complement();

                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('array'))
                    .withSourceValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('string'))
                    .withValue('array')
                    .build();

                expect(complementOfIntersection.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const emptyArraySet = emptyArraySetBuilder.build();

                const allArraySet = allArraySetBuilder.build();

                const resultAllWithEmpty = allArraySet.intersect(emptyArraySet);
                const resultEmptyWithAll = emptyArraySet.intersect(allArraySet);

                expect(resultAllWithEmpty.complement().toRepresentations())
                    .toContainRepresentations(resultEmptyWithAll.complement().toRepresentations());
            });
        });
    });
});
