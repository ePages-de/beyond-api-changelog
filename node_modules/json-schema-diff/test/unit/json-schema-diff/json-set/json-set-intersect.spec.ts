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
    allObjectSetBuilder,
    emptyObjectSetBuilder
} from '../../support/builders/sets/object-set-builder';
import {someJsonSetBuilder, someJsonSetOfStrings} from '../../support/builders/sets/some-json-set-builder';
import {
    allStringSetBuilder, emptyStringSetBuilder
} from '../../support/builders/sets/string-set-builder';
import {customMatchers, CustomMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('json-set', () => {

    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('intersection', () => {
        describe('all and all', () => {
            it('should intersect all json set with all json set resulting in all json set', () => {
                const firstAllJsonSet = allJsonSetBuilder.withOrigins([]).build();
                const secondAllJsonSet = allJsonSetBuilder.withOrigins([]).build();

                const result = firstAllJsonSet.intersect(secondAllJsonSet);

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

            it('should keep track of schema origins when intersecting all and all json sets', () => {
                const firstAllJsonSet = allJsonSetBuilder.withOrigins([
                    schemaOriginBuilder.withType('source').withPath(['definitions', 'someSchema']).withValue(true)
                ]).build();
                const secondAllJsonSet = allJsonSetBuilder.withOrigins([
                    schemaOriginBuilder.withType('destination').withPath(['definitions', 'otherSchema']).withValue(true)
                ]).build();

                const result = firstAllJsonSet.intersect(secondAllJsonSet);

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
        });

        describe('all and empty', () => {
            it('should intersect all json set with empty json set resulting in empty json set', () => {
                const allJsonSet = allJsonSetBuilder.build();
                const emptyJsonSet = emptyJsonSetBuilder.build();

                const result = allJsonSet.intersect(emptyJsonSet);

                expect(result.toRepresentations()).toContainRepresentations([]);
            });

            it('should keep track of schema origins when intersecting all and empty json sets', () => {
                const allJsonSet = allJsonSetBuilder.withOrigins([
                    schemaOriginBuilder.withType('source').withPath(['definitions', 'someSchema']).withValue(true)
                ]).build();
                const emptyJsonSet = emptyJsonSetBuilder.withOrigins([
                    schemaOriginBuilder
                        .withType('destination')
                        .withPath(['definitions', 'otherSchema'])
                        .withValue(false)
                ]).build();

                const complementOfIntersection = allJsonSet.intersect(emptyJsonSet).complement();

                const baseRepresentation = representationBuilder
                    .withSourceValues([
                        representationValueBuilder.withPath(['definitions', 'someSchema']).withValue(true)
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

            it('should return the same result regardless the order of the operands', () => {
                const allJsonSet = allJsonSetBuilder.build();

                const emptyJsonSet = emptyJsonSetBuilder.build();

                const resultEmptyAndAll = emptyJsonSet.intersect(allJsonSet);
                const resultAllAndEmpty = allJsonSet.intersect(emptyJsonSet);

                expect(resultEmptyAndAll.toRepresentations())
                    .toContainRepresentations(resultAllAndEmpty.toRepresentations());

                expect(resultEmptyAndAll.complement().toRepresentations())
                    .toContainRepresentations(resultAllAndEmpty.complement().toRepresentations());
            });
        });

        describe('all and some', () => {
            it('should intersect all json set with some json set resulting in some json set', () => {
                const allJsonSet = allJsonSetBuilder.withOrigins([]).build();

                const jsonSetOfStrings = someJsonSetBuilder
                    .withStringSet(allStringSetBuilder)
                    .build();

                const result = allJsonSet.intersect(jsonSetOfStrings);

                expect(result.toRepresentations()).toContainRepresentations([
                    representationBuilder
                        .withSourceValues([])
                        .withDestinationValues([])
                        .withValue('string')
                        .build()
                ]);
            });

            it('should keep track of schema origins when intersecting all and some json sets', () => {
                const allJsonSet = allJsonSetBuilder.withOrigins([
                    schemaOriginBuilder.withType('source').withPath(['definitions', 'someSchema']).withValue(true)
                ]).build();

                const jsonSetOfStrings = someJsonSetBuilder
                    .withStringSet(allStringSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                        schemaOriginBuilder
                            .withType('destination')
                            .withPath(['definitions', 'otherSchema', 'type'])
                            .withValue('string')
                    ])))
                    .build();

                const result = allJsonSet.intersect(jsonSetOfStrings);

                expect(result.toRepresentations()).toContainRepresentations([
                    representationBuilder
                        .withSourceValues([
                            representationValueBuilder.withPath(['definitions', 'someSchema']).withValue(true)
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
                const allJsonSet = allJsonSetBuilder;

                const someJsonSet = someJsonSetOfStrings;

                const resultSomeAndAll = someJsonSet.build().intersect(allJsonSet.build());
                const resultAllAndSome = allJsonSet.build().intersect(someJsonSet.build());
                expect(resultSomeAndAll.toRepresentations())
                    .toContainRepresentations(resultAllAndSome.toRepresentations());
            });
        });

        describe('empty and empty', () => {
            it('should intersect empty json set with empty json set resulting in empty json set', () => {
                const firstEmptyJsonSet = emptyJsonSetBuilder.build();
                const secondEmptyJsonSet = emptyJsonSetBuilder.build();

                const result = firstEmptyJsonSet.intersect(secondEmptyJsonSet);

                expect(result.toRepresentations()).toContainRepresentations([]);
            });

            it('should keep track of schema origins when intersecting empty and empty json sets', () => {
                const firstEmptyJsonSet = emptyJsonSetBuilder.withOrigins([
                    schemaOriginBuilder.withType('source').withPath(['definitions', 'someSchema']).withValue(false)
                ]).build();
                const secondEmptyJsonSet = emptyJsonSetBuilder.withOrigins([
                    schemaOriginBuilder
                        .withType('destination')
                        .withPath(['definitions', 'otherSchema'])
                        .withValue(false)
                ]).build();

                const complementOfIntersection = firstEmptyJsonSet.intersect(secondEmptyJsonSet).complement();

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
            it('should intersect empty json set with some json set resulting in empty json set', () => {
                const emptyJsonSet = emptyJsonSetBuilder.build();

                const someJsonSet = someJsonSetOfStrings.build();

                const result = emptyJsonSet.intersect(someJsonSet);

                expect(result.toRepresentations()).toContainRepresentations([]);
            });

            it('should keep track of schema origins when intersecting empty and some json sets', () => {
                const emptyJsonSet = emptyJsonSetBuilder
                    .withOrigins([
                        schemaOriginBuilder.withType('source').withPath(['definitions', 'someSchema']).withValue(false)
                    ])
                    .build();

                const someJsonSet = someJsonSetBuilder
                    .withStringSet(allStringSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                        schemaOriginBuilder
                            .withType('destination')
                            .withPath(['definitions', 'otherSchema', 'type'])
                            .withValue('string')
                    ])))
                    .build();

                const complementOfIntersection = emptyJsonSet.intersect(someJsonSet).complement();

                const baseRepresentation = representationBuilder
                    .withSourceValues([
                        representationValueBuilder.withPath(['definitions', 'someSchema']).withValue(false)
                    ])
                    .withDestinationValues([
                        representationValueBuilder.withPath(['definitions', 'otherSchema', 'type']).withValue('string')
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

            it('should return the same result regardless the order of the operands', () => {
                const emptyJsonSet = emptyJsonSetBuilder.build();

                const someJsonSet = someJsonSetOfStrings.build();

                const resultSomeAndAll = someJsonSet.intersect(emptyJsonSet);
                const resultAllAndSome = emptyJsonSet.intersect(someJsonSet);

                expect(resultSomeAndAll.toRepresentations())
                    .toContainRepresentations(resultAllAndSome.toRepresentations());

                expect(resultSomeAndAll.complement().toRepresentations())
                    .toContainRepresentations(resultAllAndSome.complement().toRepresentations());
            });
        });

        describe('some and some', () => {
            it('should return another some json set with intersected sub sets', () => {
                const firstSomeJsonSet = someJsonSetBuilder
                    .withArraySet(allArraySetBuilder)
                    .withBooleanSet(allBooleanSetBuilder)
                    .withIntegerSet(allIntegerSetBuilder)
                    .withNullSet(allNullSetBuilder)
                    .withNumberSet(allNumberSetBuilder)
                    .withObjectSet(emptyObjectSetBuilder)
                    .withStringSet(emptyStringSetBuilder)
                    .build();

                const secondSomeJsonSet = someJsonSetBuilder
                    .withArraySet(allArraySetBuilder)
                    .withBooleanSet(allBooleanSetBuilder)
                    .withIntegerSet(allIntegerSetBuilder)
                    .withNullSet(allNullSetBuilder)
                    .withNumberSet(allNumberSetBuilder)
                    .withObjectSet(allObjectSetBuilder)
                    .withStringSet(allStringSetBuilder)
                    .build();

                const result = firstSomeJsonSet.intersect(secondSomeJsonSet);

                const baseRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([]);

                expect(result.toRepresentations()).toContainRepresentations([
                    baseRepresentation.withValue('array').build(),
                    baseRepresentation.withValue('boolean').build(),
                    baseRepresentation.withValue('integer').build(),
                    baseRepresentation.withValue('null').build(),
                    baseRepresentation.withValue('number').build()
                ]);
            });
        });
    });
});
