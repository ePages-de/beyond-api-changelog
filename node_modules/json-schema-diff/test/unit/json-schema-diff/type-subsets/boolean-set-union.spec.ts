import {parsedTypeKeywordBuilder} from '../../support/builders/parsed-schema-keywords/parsed-type-keyword-builder';
import {schemaOriginBuilder} from '../../support/builders/parsed-schema-keywords/schema-origin-builder';
import {representationBuilder} from '../../support/builders/representation-builder';
import {representationValueBuilder} from '../../support/builders/representation-value-builder';
import {
    allBooleanSetBuilder,
    emptyBooleanSetBuilder
} from '../../support/builders/sets/boolean-set-builder';
import {customMatchers, CustomMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('boolean-set', () => {
    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('union', () => {
        describe('empty and empty', () => {
            it('should union empty and empty boolean sets resulting in another empty boolean set', () => {
                const emptyBooleanSetSource = emptyBooleanSetBuilder.build();

                const emptyBooleanSetDestination = emptyBooleanSetBuilder.build();

                const resultBooleanSet = emptyBooleanSetSource.union(emptyBooleanSetDestination);

                expect(resultBooleanSet.toRepresentations()).toContainRepresentations([]);
            });

            it('should merge schema origins when empty and empty boolean sets are unioned', () => {
                const emptyBooleanSetSource = emptyBooleanSetBuilder.withType(
                    parsedTypeKeywordBuilder.withOrigins([
                        schemaOriginBuilder
                            .withPath(['type'])
                            .withType('source')
                            .withValue('string')
                    ])).build();

                const emptyBooleanSetDestination = emptyBooleanSetBuilder.withType(
                    parsedTypeKeywordBuilder.withOrigins([
                        schemaOriginBuilder
                            .withPath(['type'])
                            .withType('destination')
                            .withValue('string')
                    ])).build();

                const complementOfUnion = emptyBooleanSetSource.union(emptyBooleanSetDestination).complement();

                const representationValue = representationValueBuilder
                    .withPath(['type'])
                    .withValue('string');
                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValue)
                    .withSourceValue(representationValue)
                    .withValue('boolean')
                    .build();

                expect(complementOfUnion.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });
        });

        describe('all and all', () => {
            it('should union all and all boolean sets resulting in another all boolean set', () => {
                const allBooleanSetSource = allBooleanSetBuilder.build();

                const allBooleanSetDestination = allBooleanSetBuilder.build();

                const resultBooleanSet = allBooleanSetSource.union(allBooleanSetDestination);

                const representation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('boolean')
                    .build();
                expect(resultBooleanSet.toRepresentations()).toContainRepresentations([representation]);
            });

            it('should merge schema origins when all and all boolean sets are unioned', () => {
                const allBooleanSetSource = allBooleanSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('boolean')
                ])).build();

                const allBooleanSetDestination = allBooleanSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('boolean')
                ])).build();

                const resultBooleanSet = allBooleanSetSource.union(allBooleanSetDestination);

                const representationValue = representationValueBuilder
                    .withPath(['type'])
                    .withValue('boolean');
                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValue)
                    .withSourceValue(representationValue)
                    .withValue('boolean')
                    .build();

                expect(resultBooleanSet.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });
        });

        describe('all and empty', () => {
            it('should union empty and all boolean sets resulting in another all boolean set', () => {
                const emptyBooleanSetSource = emptyBooleanSetBuilder.build();

                const allBooleanSetDestination = allBooleanSetBuilder.build();

                const resultBooleanSet = emptyBooleanSetSource.union(allBooleanSetDestination);

                const representation = representationBuilder
                    .withDestinationValues([])
                    .withSourceValues([])
                    .withValue('boolean')
                    .build();
                expect(resultBooleanSet.toRepresentations()).toContainRepresentations([representation]);
            });

            it('should merge schema origins when empty and all boolean sets are unioned', () => {
                const emptyBooleanSetSource = emptyBooleanSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('string')
                ])).build();

                const allBooleanSetDestination = allBooleanSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('boolean')
                ])).build();

                const resultBooleanSet = emptyBooleanSetSource.union(allBooleanSetDestination);

                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('boolean'))
                    .withSourceValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('string'))
                    .withValue('boolean')
                    .build();

                expect(resultBooleanSet.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const emptyBooleanSet = emptyBooleanSetBuilder.build();

                const allBooleanSet = allBooleanSetBuilder.build();

                const resultAllWithEmpty = allBooleanSet.union(emptyBooleanSet);
                const resultEmptyWithAll = emptyBooleanSet.union(allBooleanSet);

                expect(resultAllWithEmpty.toRepresentations())
                    .toContainRepresentations(resultEmptyWithAll.toRepresentations());
            });
        });
    });
});
