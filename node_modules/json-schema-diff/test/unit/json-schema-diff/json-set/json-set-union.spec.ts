import {parsedTypeKeywordBuilder} from '../../support/builders/parsed-schema-keywords/parsed-type-keyword-builder';
import {schemaOriginBuilder} from '../../support/builders/parsed-schema-keywords/schema-origin-builder';
import {representationBuilder} from '../../support/builders/representation-builder';
import {representationValueBuilder} from '../../support/builders/representation-value-builder';
import {allJsonSetBuilder} from '../../support/builders/sets/all-json-set-builder';
import {allArraySetBuilder} from '../../support/builders/sets/array-set-builder';
import {allBooleanSetBuilder} from '../../support/builders/sets/boolean-set-builder';
import {emptyJsonSetBuilder} from '../../support/builders/sets/empty-json-set-builder';
import {allIntegerSetBuilder} from '../../support/builders/sets/integer-set-builder';
import {allNullSetBuilder} from '../../support/builders/sets/null-set-builder';
import {allNumberSetBuilder} from '../../support/builders/sets/number-set-builder';
import {
    emptyObjectSetBuilder
} from '../../support/builders/sets/object-set-builder';
import {someJsonSetBuilder, someJsonSetOfStrings} from '../../support/builders/sets/some-json-set-builder';
import {
    allStringSetBuilder, emptyStringSetBuilder
} from '../../support/builders/sets/string-set-builder';
import {CustomMatchers, customMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('json-set', () => {

    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('union', () => {
        describe('all and all', () => {
            it('should union all json set with all json set resulting in all json set', () => {
                const firstAllJsonSet = allJsonSetBuilder.withOrigins([]).build();
                const secondAllJsonSet = allJsonSetBuilder.withOrigins([]).build();

                const result = firstAllJsonSet.union(secondAllJsonSet);

                const baseRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([]);

                expect(result.toRepresentations()).toContainRepresentations([
                    baseRepresentation.withValue('array').build(),
                    baseRepresentation.withValue('boolean').build(),
                    baseRepresentation.withValue('integer').build(),
                    baseRepresentation.withValue('null').build(),
                    baseRepresentation.withValue('number').build(),
                    baseRepresentation.withValue('object').build(),
                    baseRepresentation.withValue('string').build()
                ]);
            });

            it('should keep track of schema origins when unioning all and all json sets', () => {
                const firstAllJsonSet = allJsonSetBuilder.withOrigins([
                    schemaOriginBuilder.withType('source').withPath(['definitions', 'someSchema']).withValue(true)
                ]).build();
                const secondAllJsonSet = allJsonSetBuilder.withOrigins([
                    schemaOriginBuilder.withType('destination').withPath(['definitions', 'otherSchema']).withValue(true)
                ]).build();

                const result = firstAllJsonSet.union(secondAllJsonSet);

                const baseRepresentation = representationBuilder
                    .withSourceValues([
                        representationValueBuilder.withPath(['definitions', 'someSchema']).withValue(true)
                    ])
                    .withDestinationValues([
                        representationValueBuilder.withPath(['definitions', 'otherSchema']).withValue(true)
                    ]);

                expect(result.toRepresentations()).toContainRepresentations([
                    baseRepresentation.withValue('array').build(),
                    baseRepresentation.withValue('boolean').build(),
                    baseRepresentation.withValue('integer').build(),
                    baseRepresentation.withValue('null').build(),
                    baseRepresentation.withValue('number').build(),
                    baseRepresentation.withValue('object').build(),
                    baseRepresentation.withValue('string').build()
                ]);
            });

            xit('should return cached result, if schemas were already intersected', () => {
                const firstAllJsonSet = allJsonSetBuilder.withOrigins([]).build();
                const secondAllJsonSet = allJsonSetBuilder.withOrigins([]).build();

                const resultFromFirstIntersection = firstAllJsonSet.union(secondAllJsonSet);
                const resultFromSecondIntersection = firstAllJsonSet.union(secondAllJsonSet);

                expect(resultFromFirstIntersection).toBe(resultFromSecondIntersection);
            });

            xit('should cached result on the other schema', () => {
                const firstAllJsonSet = allJsonSetBuilder.withOrigins([]).build();
                const secondAllJsonSet = allJsonSetBuilder.withOrigins([]).build();

                const resultFromFirstIntersection = firstAllJsonSet.union(secondAllJsonSet);
                const resultFromSecondIntersection = secondAllJsonSet.union(firstAllJsonSet);

                expect(resultFromFirstIntersection).toBe(resultFromSecondIntersection);
            });
        });

        describe('all and empty', () => {
            it('should union all json set with empty json set resulting in all json set', () => {
                const allJsonSet = allJsonSetBuilder.withOrigins([]).build();
                const emptyJsonSet = emptyJsonSetBuilder.withOrigins([]).build();

                const result = allJsonSet.union(emptyJsonSet);

                const baseRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([]);

                expect(result.toRepresentations()).toContainRepresentations([
                    baseRepresentation.withValue('array').build(),
                    baseRepresentation.withValue('boolean').build(),
                    baseRepresentation.withValue('integer').build(),
                    baseRepresentation.withValue('null').build(),
                    baseRepresentation.withValue('number').build(),
                    baseRepresentation.withValue('object').build(),
                    baseRepresentation.withValue('string').build()
                ]);
            });

            it('should keep track of schema origins when unioning all and empty json sets', () => {
                const allJsonSet = allJsonSetBuilder.withOrigins([
                    schemaOriginBuilder.withType('source').withPath(['definitions', 'someSchema']).withValue(true)
                ]).build();
                const emptyJsonSet = emptyJsonSetBuilder.withOrigins([
                    schemaOriginBuilder
                        .withType('destination')
                        .withPath(['definitions', 'otherSchema'])
                        .withValue(false)
                ]).build();

                const result = allJsonSet.union(emptyJsonSet);

                const baseRepresentation = representationBuilder
                    .withSourceValues([
                        representationValueBuilder.withPath(['definitions', 'someSchema']).withValue(true)
                    ])
                    .withDestinationValues([
                        representationValueBuilder.withPath(['definitions', 'otherSchema']).withValue(false)
                    ]);

                expect(result.toRepresentations()).toContainRepresentations([
                    baseRepresentation.withValue('array').build(),
                    baseRepresentation.withValue('boolean').build(),
                    baseRepresentation.withValue('integer').build(),
                    baseRepresentation.withValue('null').build(),
                    baseRepresentation.withValue('number').build(),
                    baseRepresentation.withValue('object').build(),
                    baseRepresentation.withValue('string').build()
                ]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const allJsonSet = allJsonSetBuilder.build();

                const emptyJsonSet = emptyJsonSetBuilder.build();

                const resultEmptyAndAll = emptyJsonSet.union(allJsonSet);
                const resultAllAndEmpty = allJsonSet.union(emptyJsonSet);

                expect(resultEmptyAndAll.toRepresentations())
                    .toContainRepresentations(resultAllAndEmpty.toRepresentations());
            });
        });

        describe('all and some', () => {
            it('should union all json set with some json set resulting in all json set', () => {
                const allJsonSet = allJsonSetBuilder.withOrigins([]).build();
                const someJsonSet = someJsonSetBuilder.withStringSet(allStringSetBuilder).build();

                const result = allJsonSet.union(someJsonSet);

                const baseRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([]);

                expect(result.toRepresentations()).toContainRepresentations([
                    baseRepresentation.withValue('array').build(),
                    baseRepresentation.withValue('boolean').build(),
                    baseRepresentation.withValue('integer').build(),
                    baseRepresentation.withValue('null').build(),
                    baseRepresentation.withValue('number').build(),
                    baseRepresentation.withValue('object').build(),
                    baseRepresentation.withValue('string').build()
                ]);
            });

            it('should keep track of schema origins when unioning all and some json sets', () => {
                const allJsonSet = allJsonSetBuilder.withOrigins([
                    schemaOriginBuilder.withType('source').withPath(['definitions', 'someSchema']).withValue(true)
                ]).build();

                const someJsonSet = someJsonSetBuilder
                    .withStringSet(allStringSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                        schemaOriginBuilder
                            .withType('destination')
                            .withPath(['definitions', 'otherSchema', 'type'])
                            .withValue('string')
                    ])))
                    .build();

                const result = allJsonSet.union(someJsonSet);

                const baseRepresentation = representationBuilder
                    .withSourceValues([
                        representationValueBuilder.withPath(['definitions', 'someSchema']).withValue(true)
                    ])
                    .withDestinationValues([
                        representationValueBuilder.withPath(['definitions', 'otherSchema', 'type']).withValue('string')
                    ]);

                expect(result.toRepresentations()).toContainRepresentations([
                    baseRepresentation.withValue('array').build(),
                    baseRepresentation.withValue('boolean').build(),
                    baseRepresentation.withValue('integer').build(),
                    baseRepresentation.withValue('null').build(),
                    baseRepresentation.withValue('number').build(),
                    baseRepresentation.withValue('object').build(),
                    baseRepresentation.withValue('string').build()
                ]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const allJsonSet = allJsonSetBuilder.build();

                const someJsonSet = someJsonSetOfStrings.build();

                const resultSomeAndAll = someJsonSet.union(allJsonSet);
                const resultAllAndSome = allJsonSet.union(someJsonSet);

                expect(resultSomeAndAll.toRepresentations())
                    .toContainRepresentations(resultAllAndSome.toRepresentations());
            });
        });

        describe('empty and empty', () => {
            it('should union empty json set with empty json set resulting in empty json set', () => {
                const firstEmptyJsonSet = emptyJsonSetBuilder.build();
                const secondEmptyJsonSet = emptyJsonSetBuilder.build();

                const result = firstEmptyJsonSet.union(secondEmptyJsonSet);

                expect(result.toRepresentations()).toContainRepresentations([]);
            });

            it('should keep track of schema origins when unioning empty and empty json sets', () => {
                const firstEmptyJsonSet = emptyJsonSetBuilder.withOrigins([
                    schemaOriginBuilder.withType('source').withPath(['definitions', 'someSchema']).withValue(false)
                ]).build();
                const secondEmptyJsonSet = emptyJsonSetBuilder.withOrigins([
                    schemaOriginBuilder
                        .withType('destination')
                        .withPath(['definitions', 'otherSchema'])
                        .withValue(false)
                ]).build();

                const complementOfIntersection = firstEmptyJsonSet.union(secondEmptyJsonSet).complement();

                const baseRepresentation = representationBuilder
                    .withSourceValues([
                        representationValueBuilder.withPath(['definitions', 'someSchema']).withValue(false)
                    ])
                    .withDestinationValues([
                        representationValueBuilder.withPath(['definitions', 'otherSchema']).withValue(false)
                    ]);

                expect(complementOfIntersection.toRepresentations()).toContainRepresentations([
                    baseRepresentation.withValue('array').build(),
                    baseRepresentation.withValue('boolean').build(),
                    baseRepresentation.withValue('integer').build(),
                    baseRepresentation.withValue('null').build(),
                    baseRepresentation.withValue('number').build(),
                    baseRepresentation.withValue('object').build(),
                    baseRepresentation.withValue('string').build()
                ]);
            });
        });

        describe('empty and some', () => {
            it('should union empty json set with some json set resulting in some json set', () => {
                const emptyJsonSet = emptyJsonSetBuilder.withOrigins([]).build();

                const jsonSetOfStrings = someJsonSetBuilder.withStringSet(allStringSetBuilder).build();

                const result = emptyJsonSet.union(jsonSetOfStrings);

                expect(result.toRepresentations()).toContainRepresentations([
                    representationBuilder
                        .withSourceValues([])
                        .withDestinationValues([])
                        .withValue('string')
                        .build()
                ]);
            });

            it('should keep track of schema origins when unioning empty and some json sets', () => {
                const emptyJsonSet = emptyJsonSetBuilder.withOrigins([
                    schemaOriginBuilder.withType('source').withPath(['definitions', 'someSchema']).withValue(false)
                ]).build();

                const jsonSetOfStrings = someJsonSetBuilder
                    .withStringSet(allStringSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                        schemaOriginBuilder
                            .withType('destination')
                            .withPath(['definitions', 'otherSchema', 'type'])
                            .withValue('string')
                    ])))
                    .build();

                const result = emptyJsonSet.union(jsonSetOfStrings);

                expect(result.toRepresentations()).toContainRepresentations([
                    representationBuilder
                        .withSourceValues([
                            representationValueBuilder.withPath(['definitions', 'someSchema']).withValue(false)
                        ])
                        .withDestinationValues([
                            representationValueBuilder
                                .withPath(['definitions', 'otherSchema', 'type'])
                                .withValue('string')
                        ])
                        .withValue('string')
                        .build()
                ]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const emptyJsonSet = emptyJsonSetBuilder.build();

                const someJsonSet = someJsonSetOfStrings.build();

                const resultSomeAndEmpty = someJsonSet.union(emptyJsonSet);
                const resultEmptyAndSome = emptyJsonSet.union(someJsonSet);

                expect(resultSomeAndEmpty.toRepresentations())
                    .toContainRepresentations(resultEmptyAndSome.toRepresentations());
            });
        });

        describe('some and some', () => {
            it('should return another some json set with unioned subsets', () => {
                const firstSomeJsonSet = someJsonSetBuilder
                    .withArraySet(allArraySetBuilder)
                    .withBooleanSet(allBooleanSetBuilder)
                    .withIntegerSet(allIntegerSetBuilder)
                    .withNullSet(allNullSetBuilder)
                    .withNumberSet(allNumberSetBuilder)
                    .withObjectSet(emptyObjectSetBuilder)
                    .withStringSet(allStringSetBuilder)
                    .build();

                const secondSomeJsonSet = someJsonSetBuilder
                    .withArraySet(allArraySetBuilder)
                    .withBooleanSet(allBooleanSetBuilder)
                    .withIntegerSet(allIntegerSetBuilder)
                    .withNullSet(allNullSetBuilder)
                    .withNumberSet(allNumberSetBuilder)
                    .withObjectSet(emptyObjectSetBuilder)
                    .withStringSet(emptyStringSetBuilder)
                    .build();

                const result = firstSomeJsonSet.union(secondSomeJsonSet);

                const baseRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([]);

                expect(result.toRepresentations()).toContainRepresentations([
                    baseRepresentation.withValue('array').build(),
                    baseRepresentation.withValue('boolean').build(),
                    baseRepresentation.withValue('integer').build(),
                    baseRepresentation.withValue('null').build(),
                    baseRepresentation.withValue('number').build(),
                    baseRepresentation.withValue('string').build()
                ]);
            });
        });
    });
});
