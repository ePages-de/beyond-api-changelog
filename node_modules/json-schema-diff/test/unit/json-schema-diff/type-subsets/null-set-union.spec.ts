import {parsedTypeKeywordBuilder} from '../../support/builders/parsed-schema-keywords/parsed-type-keyword-builder';
import {schemaOriginBuilder} from '../../support/builders/parsed-schema-keywords/schema-origin-builder';
import {representationBuilder} from '../../support/builders/representation-builder';
import {representationValueBuilder} from '../../support/builders/representation-value-builder';
import {
    allNullSetBuilder, emptyNullSetBuilder
} from '../../support/builders/sets/null-set-builder';
import {customMatchers, CustomMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('null-set', () => {
    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('union', () => {
        describe('empty and empty', () => {
            it('should union empty and empty null sets resulting in another empty null set', () => {
                const emptyNullSetSource = emptyNullSetBuilder.build();

                const emptyNullSetDestination = emptyNullSetBuilder.build();

                const resultNullSet = emptyNullSetSource.union(emptyNullSetDestination);

                expect(resultNullSet.toRepresentations()).toContainRepresentations([]);
            });

            it('should merge schema origins when empty and empty null sets are unioned', () => {
                const emptyNullSetSource = emptyNullSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('string')
                ])).build();

                const emptyNullSetDestination = emptyNullSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('string')
                ])).build();

                const complementOfUnion = emptyNullSetSource.union(emptyNullSetDestination).complement();

                const representationValue = representationValueBuilder
                    .withPath(['type'])
                    .withValue('string');
                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValue)
                    .withSourceValue(representationValue)
                    .withValue('null')
                    .build();

                expect(complementOfUnion.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });
        });

        describe('all and all', () => {
            it('should union all and all null sets resulting in another all null set', () => {
                const allNullSetSource = allNullSetBuilder.build();

                const allNullSetDestination = allNullSetBuilder.build();

                const resultNullSet = allNullSetSource.union(allNullSetDestination);

                const representation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('null')
                    .build();
                expect(resultNullSet.toRepresentations()).toContainRepresentations([representation]);
            });

            it('should merge schema origins when all and all null sets are unioned', () => {
                const allNullSetSource = allNullSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('null')
                ])).build();

                const allNullSetDestination = allNullSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('null')
                ])).build();

                const resultNullSet = allNullSetSource.union(allNullSetDestination);

                const representationValue = representationValueBuilder
                    .withPath(['type'])
                    .withValue('null');
                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValue)
                    .withSourceValue(representationValue)
                    .withValue('null')
                    .build();

                expect(resultNullSet.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });
        });

        describe('all and empty', () => {
            it('should union empty and all null sets resulting in another all null set', () => {
                const emptyNullSetSource = emptyNullSetBuilder.build();

                const allNullSetDestination = allNullSetBuilder.build();

                const resultNullSet = emptyNullSetSource.union(allNullSetDestination);

                const expectedRepresentation = representationBuilder
                    .withDestinationValues([])
                    .withSourceValues([])
                    .withValue('null')
                    .build();
                expect(resultNullSet.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });

            it('should merge schema origins when empty and all null sets are unioned', () => {
                const emptyNullSetSource = emptyNullSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('source')
                        .withValue('string')
                ])).build();

                const allNullSetDestination = allNullSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['type'])
                        .withType('destination')
                        .withValue('null')
                ])).build();

                const result = emptyNullSetSource.union(allNullSetDestination);

                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('null'))
                    .withSourceValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('string'))
                    .withValue('null')
                    .build();

                expect(result.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const emptyNullSet = emptyNullSetBuilder.build();

                const allNullSet = allNullSetBuilder.build();

                const resultAllWithEmpty = allNullSet.union(emptyNullSet);
                const resultEmptyWithAll = emptyNullSet.union(allNullSet);

                expect(resultAllWithEmpty.toRepresentations())
                    .toContainRepresentations(resultEmptyWithAll.toRepresentations());
            });
        });
    });
});
