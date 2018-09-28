import {parsedTypeKeywordBuilder} from '../../support/builders/parsed-schema-keywords/parsed-type-keyword-builder';
import {schemaOriginBuilder} from '../../support/builders/parsed-schema-keywords/schema-origin-builder';
import {representationBuilder} from '../../support/builders/representation-builder';
import {representationValueBuilder} from '../../support/builders/representation-value-builder';
import {
    allIntegerSetBuilder,
    emptyIntegerSetBuilder
} from '../../support/builders/sets/integer-set-builder';
import {customMatchers, CustomMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('integer-set', () => {
    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('intersect', () => {
        describe('empty and empty', () => {
            it('should intersect empty and empty integer sets resulting in another empty integer set', () => {
                const emptyIntegerSetSource = emptyIntegerSetBuilder.build();

                const emptyIntegerSetDestination = emptyIntegerSetBuilder.build();

                const resultIntegerSet = emptyIntegerSetSource.intersect(emptyIntegerSetDestination);

                expect(resultIntegerSet.toRepresentations()).toContainRepresentations([]);
            });

            it('should merge schema origins when empty and empty integer sets are intersected', () => {
                const emptyIntegerSetSource = emptyIntegerSetBuilder.withType(
                    parsedTypeKeywordBuilder.withOrigins([
                        schemaOriginBuilder
                            .withPath(['type'])
                            .withType('source')
                            .withValue('string')
                    ])).build();

                const emptyIntegerSetDestination = emptyIntegerSetBuilder.withType(
                    parsedTypeKeywordBuilder.withOrigins([
                        schemaOriginBuilder
                            .withPath(['type'])
                            .withType('destination')
                            .withValue('string')
                    ])).build();

                const complementOfIntersection = emptyIntegerSetSource
                    .intersect(emptyIntegerSetDestination).complement();

                const representationValue = representationValueBuilder
                    .withPath(['type'])
                    .withValue('string');
                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValue)
                    .withSourceValue(representationValue)
                    .withValue('integer')
                    .build();

                expect(complementOfIntersection.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });
        });

        describe('all and all', () => {
            it('should intersect all and all integer sets resulting in another all integer set', () => {
                const allIntegerSetSource = allIntegerSetBuilder.build();

                const allIntegerSetDestination = allIntegerSetBuilder.build();

                const resultIntegerSet = allIntegerSetSource.intersect(allIntegerSetDestination);

                const representation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('integer')
                    .build();
                expect(resultIntegerSet.toRepresentations()).toContainRepresentations([representation]);
            });

            it('should merge schema origins when all and all integer sets are intersected', () => {
                const allIntegerSetSource = allIntegerSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('integer')
                ])).build();

                const allIntegerSetDestination = allIntegerSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('integer')
                ])).build();

                const resultIntegerSet = allIntegerSetSource.intersect(allIntegerSetDestination);

                const representationValue = representationValueBuilder
                    .withPath(['type'])
                    .withValue('integer');
                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValue)
                    .withSourceValue(representationValue)
                    .withValue('integer')
                    .build();

                expect(resultIntegerSet.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });
        });

        describe('all and empty', () => {
            it('should intersect empty and all integer sets resulting in another empty integer set', () => {
                const emptyIntegerSetSource = emptyIntegerSetBuilder.build();

                const allIntegerSetDestination = allIntegerSetBuilder.build();

                const resultIntegerSet = emptyIntegerSetSource.intersect(allIntegerSetDestination);

                expect(resultIntegerSet.toRepresentations()).toContainRepresentations([]);
            });

            it('should merge schema origins when empty and all integer sets are intersected', () => {
                const emptyIntegerSetSource = emptyIntegerSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('string')
                ])).build();

                const allIntegerSetDestination = allIntegerSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('integer')
                ])).build();

                const complementOfTheResult = emptyIntegerSetSource.intersect(allIntegerSetDestination).complement();

                const expectedRepresentation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('string'))
                    .withDestinationValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('integer'))
                    .withValue('integer')
                    .build();

                expect(complementOfTheResult.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const emptyIntegerSet = emptyIntegerSetBuilder.build();

                const allIntegerSet = allIntegerSetBuilder.build();

                const resultAllWithEmpty = allIntegerSet.intersect(emptyIntegerSet);
                const resultEmptyWithAll = emptyIntegerSet.intersect(allIntegerSet);

                expect(resultAllWithEmpty.complement().toRepresentations())
                    .toContainRepresentations(resultEmptyWithAll.complement().toRepresentations());
            });
        });
    });
});
