import {parsedTypeKeywordBuilder} from '../../support/builders/parsed-schema-keywords/parsed-type-keyword-builder';
import {schemaOriginBuilder} from '../../support/builders/parsed-schema-keywords/schema-origin-builder';
import {representationBuilder} from '../../support/builders/representation-builder';
import {representationValueBuilder} from '../../support/builders/representation-value-builder';
import {
    allNumberSetBuilder, emptyNumberSetBuilder
} from '../../support/builders/sets/number-set-builder';
import {customMatchers, CustomMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('number-set', () => {
    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('intersect', () => {
        describe('empty and empty', () => {
            it('should intersect empty and empty number sets resulting in another empty number set', () => {
                const emptyNumberSetSource = emptyNumberSetBuilder.build();

                const emptyNumberSetDestination = emptyNumberSetBuilder.build();

                const resultNumberSet = emptyNumberSetSource.intersect(emptyNumberSetDestination);

                expect(resultNumberSet.toRepresentations()).toContainRepresentations([]);
            });

            it('should merge schema origins when empty and empty number sets are intersected', () => {
                const emptyNumberSetSource = emptyNumberSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('string')
                ])).build();

                const emptyNumberSetDestination = emptyNumberSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('string')
                ])).build();

                const complementOfIntersection = emptyNumberSetSource
                    .intersect(emptyNumberSetDestination)
                    .complement();

                const representationValue = representationValueBuilder
                    .withPath(['type'])
                    .withValue('string');
                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValue)
                    .withSourceValue(representationValue)
                    .withValue('number')
                    .build();

                expect(complementOfIntersection.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });
        });

        describe('all and all', () => {
            it('should intersect all and all number sets resulting in another all number set', () => {
                const allNumberSetSource = allNumberSetBuilder.build();

                const allNumberSetDestination = allNumberSetBuilder.build();

                const resultNumberSet = allNumberSetSource.intersect(allNumberSetDestination);

                const representation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('number')
                    .build();
                expect(resultNumberSet.toRepresentations()).toContainRepresentations([representation]);
            });

            it('should merge schema origins when all and all number sets are intersected', () => {
                const allNumberSetSource = allNumberSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('number')
                ])).build();

                const allNumberSetDestination = allNumberSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('number')
                ])).build();

                const resultNumberSet = allNumberSetSource.intersect(allNumberSetDestination);

                const representationValue = representationValueBuilder
                    .withPath(['type'])
                    .withValue('number');
                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValue)
                    .withSourceValue(representationValue)
                    .withValue('number')
                    .build();

                expect(resultNumberSet.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });
        });

        describe('all and empty', () => {
            it('should intersect empty and all number sets resulting in another empty number set', () => {
                const emptyNumberSetSource = emptyNumberSetBuilder.build();

                const allNumberSetDestination = allNumberSetBuilder.build();

                const resultNumberSet = emptyNumberSetSource.intersect(allNumberSetDestination);

                expect(resultNumberSet.toRepresentations()).toContainRepresentations([]);
            });

            it('should merge schema origins when empty and all number sets are intersected', () => {
                const emptyNumberSetSource = emptyNumberSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('string')
                ])).build();

                const allNumberSetDestination = allNumberSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('number')
                ])).build();

                const complementOfTheResult = emptyNumberSetSource.intersect(allNumberSetDestination).complement();

                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('number'))
                    .withSourceValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('string'))
                    .withValue('number')
                    .build();

                expect(complementOfTheResult.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const emptyNumberSet = emptyNumberSetBuilder.build();

                const allNumberSet = allNumberSetBuilder.build();

                const resultAllWithEmpty = allNumberSet.intersect(emptyNumberSet);
                const resultEmptyWithAll = emptyNumberSet.intersect(allNumberSet);

                expect(resultAllWithEmpty.complement().toRepresentations())
                    .toContainRepresentations(resultEmptyWithAll.complement().toRepresentations());
            });
        });
    });
});
