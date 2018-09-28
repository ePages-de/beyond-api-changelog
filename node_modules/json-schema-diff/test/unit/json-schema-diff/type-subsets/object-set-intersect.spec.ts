import {parsedTypeKeywordBuilder} from '../../support/builders/parsed-schema-keywords/parsed-type-keyword-builder';
import {schemaOriginBuilder} from '../../support/builders/parsed-schema-keywords/schema-origin-builder';
import {representationBuilder} from '../../support/builders/representation-builder';
import {representationValueBuilder} from '../../support/builders/representation-value-builder';
import {allJsonSetBuilder} from '../../support/builders/sets/all-json-set-builder';
import {emptyJsonSetBuilder} from '../../support/builders/sets/empty-json-set-builder';
import {
    allObjectSetBuilder,
    emptyObjectSetBuilder,
    someObjectSetBuilder
} from '../../support/builders/sets/object-set-builder';
import {someJsonSetBuilder} from '../../support/builders/sets/some-json-set-builder';
import {allStringSetBuilder} from '../../support/builders/sets/string-set-builder';
import {customMatchers, CustomMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('object-set', () => {
    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('intersection', () => {
        describe('empty and empty', () => {
            it('should intersect empty and empty object sets resulting in another empty object set', () => {
                const emptyObjectSetSource = emptyObjectSetBuilder.build();
                const emptyObjectSetDestination = emptyObjectSetBuilder.build();

                const resultObjectSet = emptyObjectSetSource.intersect(emptyObjectSetDestination);

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([]);
            });

            it('should intersect empty and empty object sets resulting in empty object set with merged origins', () => {
                const emptyObjectSetSource = emptyObjectSetBuilder
                    .withType(parsedTypeKeywordBuilder
                        .withOrigins([
                            schemaOriginBuilder
                                .withPath(['.type'])
                                .withType('source')
                                .withValue('string')
                        ])
                    ).build();

                const emptyObjectSetDestination = emptyObjectSetBuilder
                    .withType(parsedTypeKeywordBuilder
                        .withOrigins([
                            schemaOriginBuilder
                                .withPath(['.type'])
                                .withType('destination')
                                .withValue('string')])
                    ).build();

                const complementOfIntersection = emptyObjectSetSource.intersect(emptyObjectSetDestination).complement();

                const representationValue = representationValueBuilder
                    .withPath(['.type'])
                    .withValue('string');
                const expectedRepresentation = representationBuilder
                    .withDestinationValue(representationValue)
                    .withSourceValue(representationValue)
                    .withValue('object')
                    .build();

                expect(complementOfIntersection.toRepresentations()).toContainRepresentations([
                    expectedRepresentation
                ]);
            });
        });

        describe('all and all', () => {
            it('should intersect all and all object sets resulting in another all object set', () => {
                const sourceAllObjectSet = allObjectSetBuilder
                    .withType(parsedTypeKeywordBuilder
                        .withOrigins([schemaOriginBuilder
                            .withPath(['.type'])
                            .withType('source')
                            .withValue('object')])
                        .withParsedValue(['object'])
                    ).build();

                const destinationAllObjectSet = allObjectSetBuilder
                    .withType(parsedTypeKeywordBuilder
                        .withOrigins([schemaOriginBuilder
                            .withPath(['.type'])
                            .withType('destination')
                            .withValue('object')])
                        .withParsedValue(['object'])
                    ).build();

                const resultObjectSet = sourceAllObjectSet.intersect(destinationAllObjectSet);

                const representation = representationBuilder
                    .withSourceValues([
                        representationValueBuilder
                            .withValue('object')
                            .withPath(['.type'])])
                    .withDestinationValues([
                        representationValueBuilder
                            .withValue('object')
                            .withPath(['.type'])])
                    .withValue('object')
                    .build();
                expect(resultObjectSet.toRepresentations()).toContainRepresentations([representation]);
            });
        });

        describe('empty and all', () => {
            it('should intersect empty and all object sets and return empty object set', () => {
                const emptyObjectSet = emptyObjectSetBuilder.build();
                const allObjectSet = allObjectSetBuilder.build();

                const resultObjectSet = emptyObjectSet.intersect(allObjectSet);

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([]);
            });

            it('should intersect empty and all object sets and return empty object set with merged origins', () => {
                const emptyObjectSet = emptyObjectSetBuilder.withType(parsedTypeKeywordBuilder
                    .withOrigins([schemaOriginBuilder
                        .withPath(['.type'])
                        .withType('source')
                        .withValue('string')
                    ])).build();

                const allObjectSet = allObjectSetBuilder
                    .withType(parsedTypeKeywordBuilder
                        .withOrigins([schemaOriginBuilder
                            .withPath(['.type'])
                            .withType('destination')
                            .withValue('object')])
                        .withParsedValue(['object'])
                    ).build();

                const resultObjectSet = emptyObjectSet.intersect(allObjectSet);
                const complementOfResult = resultObjectSet.complement();

                const expectedRepresentation = representationBuilder
                    .withSourceValues([
                        representationValueBuilder.withPath(['.type']).withValue('string')
                    ])
                    .withDestinationValues([
                        representationValueBuilder.withPath(['.type']).withValue('object')
                    ])
                    .withValue('object')
                    .build();

                expect(complementOfResult.toRepresentations()).toContainRepresentations([expectedRepresentation]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const emptyObjectSet = emptyObjectSetBuilder.build();
                const allObjectSet = allObjectSetBuilder.build();

                const resultAllWithEmpty = allObjectSet.intersect(emptyObjectSet);
                const resultEmptyWithAll = emptyObjectSet.intersect(allObjectSet);

                expect(resultAllWithEmpty.toRepresentations())
                    .toContainRepresentations(resultEmptyWithAll.toRepresentations());
            });
        });

        describe('empty and some', () => {
            it('should intersect empty and some object sets and return empty object set', () => {
                const emptyObjectSet = emptyObjectSetBuilder.build();
                const someObjectSet = someObjectSetBuilder.build();

                const resultObjectSet = emptyObjectSet.intersect(someObjectSet);

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([]);

            });

            it('should intersect empty and some object sets and return empty object set with merged origins', () => {
                const emptyObjectSet = emptyObjectSetBuilder.withType(
                    parsedTypeKeywordBuilder.withOrigins([schemaOriginBuilder
                        .withPath(['.type'])
                        .withType('source')
                        .withValue('string')
                    ])
                ).build();

                const someObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(emptyJsonSetBuilder.withOrigins([]))
                    .withType(parsedTypeKeywordBuilder
                        .withOrigins([schemaOriginBuilder
                            .withPath(['.type'])
                            .withType('destination')
                            .withValue('object')])
                        .withParsedValue(['object']))
                    .build();

                const resultObjectSet = emptyObjectSet.intersect(someObjectSet);
                const complementOfResult = resultObjectSet.complement();

                const expectedRepresentation = representationBuilder
                    .withSourceValue(representationValueBuilder.withPath(['.type']).withValue('string'))
                    .withDestinationValue(representationValueBuilder.withPath(['.type']).withValue('object'))
                    .withValue('object')
                    .build();
                expect(complementOfResult.toRepresentations()).toEqual([expectedRepresentation]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const emptyObjectSet = emptyObjectSetBuilder.build();
                const someObjectSet = someObjectSetBuilder.build();

                const resultSomeAndEmpty = someObjectSet.intersect(emptyObjectSet);
                const resultEmptyAndSome = emptyObjectSet.intersect(someObjectSet);

                expect(resultSomeAndEmpty.toRepresentations())
                    .toContainRepresentations(resultEmptyAndSome.toRepresentations());
            });
        });

        describe('all and some', () => {
            it('should keep track of type origins when intersecting all and some object sets', () => {
                const allObjectSet = allObjectSetBuilder
                    .withType(
                        parsedTypeKeywordBuilder
                            .withOrigins([schemaOriginBuilder
                                .withPath(['.type'])
                                .withValue('object')
                                .withType('source')
                            ])
                ).build();

                const someObjectSet = someObjectSetBuilder
                    .withType(parsedTypeKeywordBuilder
                        .withOrigins([schemaOriginBuilder
                            .withPath(['.type'])
                            .withValue('object')
                            .withType('destination')])
                        .withParsedValue(['object'])
                    ).build();

                const resultObjectSet = allObjectSet.intersect(someObjectSet);

                const representation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withPath(['.type'])
                        .withValue('object')
                    )
                    .withDestinationValue(
                        representationValueBuilder
                            .withValue('object')
                            .withPath(['.type'])
                    )
                    .withValue('object')
                    .build();

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                    representation
                ]);
            });

            it('should keep track of some object set properties origins when intersecting with all', () => {
                const allObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(allJsonSetBuilder
                        .withOrigins([schemaOriginBuilder
                            .withPath(['.additionalProperties'])
                            .withValue(true)
                            .withType('source')])
                    ).build();

                const someObjectSet = someObjectSetBuilder
                    .withProperties({
                        name: allJsonSetBuilder
                            .withOrigins([schemaOriginBuilder
                                .withPath(['.properties.name'])
                                .withValue(true)
                                .withType('destination')])
                    })
                    .build();

                const resultObjectSet = allObjectSet.intersect(someObjectSet);

                const baseNamePropertyRepresentation = representationBuilder
                    .withSourceValues([
                        representationValueBuilder
                            .withPath(['.additionalProperties'])
                            .withValue(true)
                    ])
                    .withDestinationValues([
                        representationValueBuilder
                            .withPath(['.properties.name'])
                            .withValue(true)
                    ]);

                const rootTypeRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('object').build();

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                    baseNamePropertyRepresentation.withValue('boolean').build(),
                    baseNamePropertyRepresentation.withValue('array').build(),
                    baseNamePropertyRepresentation.withValue('integer').build(),
                    baseNamePropertyRepresentation.withValue('null').build(),
                    baseNamePropertyRepresentation.withValue('number').build(),
                    baseNamePropertyRepresentation.withValue('object').build(),
                    baseNamePropertyRepresentation.withValue('string').build(),
                    rootTypeRepresentation
                ]);
            });

            it('should keep track of some object set additionalProperties when intersecting with all', () => {
                const allObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(allJsonSetBuilder
                        .withOrigins([schemaOriginBuilder
                            .withPath(['.additionalProperties'])
                            .withValue(undefined)
                            .withType('source')]))
                    .build();

                const someObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(allJsonSetBuilder
                        .withOrigins([schemaOriginBuilder
                            .withPath(['.additionalProperties'])
                            .withValue(true)
                            .withType('destination')]))
                    .build();

                const resultObjectSet = allObjectSet.intersect(someObjectSet);

                const rootTypeRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('object')
                    .build();

                const baseAdditionalPropertiesRepresentation = representationBuilder
                    .withSourceValues([representationValueBuilder
                        .withPath(['.additionalProperties'])
                        .withValue(undefined)])
                    .withDestinationValues([
                        representationValueBuilder
                            .withPath(['.additionalProperties'])
                            .withValue(true)
                    ]);

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                    rootTypeRepresentation,
                    baseAdditionalPropertiesRepresentation.withValue('boolean').build(),
                    baseAdditionalPropertiesRepresentation.withValue('array').build(),
                    baseAdditionalPropertiesRepresentation.withValue('integer').build(),
                    baseAdditionalPropertiesRepresentation.withValue('null').build(),
                    baseAdditionalPropertiesRepresentation.withValue('number').build(),
                    baseAdditionalPropertiesRepresentation.withValue('object').build(),
                    baseAdditionalPropertiesRepresentation.withValue('string').build()
                ]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const allObjectSet = allObjectSetBuilder.build();
                const someObjectSet = someObjectSetBuilder.build();

                const resultSomeAndAll = someObjectSet.intersect(allObjectSet);
                const resultAllAndSome = allObjectSet.intersect(someObjectSet);

                expect(resultSomeAndAll.toRepresentations())
                    .toContainRepresentations(resultAllAndSome.toRepresentations());
            });
        });

        describe('some and some', () => {
            it('should track type schema origins when some and some object sets are intersected', () => {
                const firstSomeObjectSet = someObjectSetBuilder
                    .withType(parsedTypeKeywordBuilder
                        .withOrigins([schemaOriginBuilder
                            .withType('source')
                            .withValue('object')
                            .withPath(['.type'])])
                        .withParsedValue(['object']))
                    .build();

                const secondSomeObjectSet = someObjectSetBuilder
                    .withType(parsedTypeKeywordBuilder
                        .withOrigins([schemaOriginBuilder
                            .withType('destination')
                            .withValue('object')
                            .withPath(['.type'])])
                        .withParsedValue(['object']))
                    .build();

                const resultObjectSet = firstSomeObjectSet.intersect(secondSomeObjectSet);

                const representation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withValue('object')
                        .withPath(['.type']))
                    .withDestinationValue(representationValueBuilder
                        .withValue('object')
                        .withPath(['.type']))
                    .withValue('object')
                    .build();

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([representation]);
            });

            it('should track additionalProperties origins when some and some object sets are intersected', () => {
                const firstSomeObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(allJsonSetBuilder
                        .withOrigins([schemaOriginBuilder
                            .withPath(['.additionalProperties'])
                            .withValue(true)
                            .withType('source')]))
                    .build();

                const secondSomeObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(allJsonSetBuilder
                        .withOrigins([schemaOriginBuilder
                            .withPath(['.additionalProperties'])
                            .withValue(true)
                            .withType('destination')]))
                    .build();

                const resultObjectSet = firstSomeObjectSet.intersect(secondSomeObjectSet);

                const rootTypeRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('object')
                    .build();

                const baseAdditionalPropertiesRepresentation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withPath(['.additionalProperties'])
                        .withValue(true))
                    .withDestinationValue(representationValueBuilder
                        .withPath(['.additionalProperties'])
                        .withValue(true));

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                    baseAdditionalPropertiesRepresentation.withValue('array').build(),
                    baseAdditionalPropertiesRepresentation.withValue('boolean').build(),
                    baseAdditionalPropertiesRepresentation.withValue('integer').build(),
                    baseAdditionalPropertiesRepresentation.withValue('number').build(),
                    baseAdditionalPropertiesRepresentation.withValue('null').build(),
                    baseAdditionalPropertiesRepresentation.withValue('string').build(),
                    baseAdditionalPropertiesRepresentation.withValue('object').build(),
                    rootTypeRepresentation
                ]);
            });

            it('should intersect same properties and track its origins when some and some object sets are intersected',
                () => {
                    const firstSomeObjectSet = someObjectSetBuilder
                        .withProperties({
                            name: allJsonSetBuilder
                                .withOrigins([schemaOriginBuilder
                                    .withValue(true)
                                    .withPath(['.properties.name'])
                                    .withType('source')])
                        })
                        .build();

                    const secondSomeObjectSet = someObjectSetBuilder
                        .withProperties({
                            name: allJsonSetBuilder
                                .withOrigins([schemaOriginBuilder
                                    .withValue(true)
                                    .withPath(['.properties.name'])
                                    .withType('destination')])
                        })
                        .build();

                    const resultObjectSet = firstSomeObjectSet.intersect(secondSomeObjectSet);

                    const basePropertyNameRepresentation = representationBuilder
                        .withSourceValue(representationValueBuilder
                            .withPath(['.properties.name'])
                            .withValue(true))
                        .withDestinationValue(representationValueBuilder
                            .withPath(['.properties.name'])
                            .withValue(true));

                    const rootTypeRepresentation = representationBuilder
                        .withSourceValues([])
                        .withDestinationValues([])
                        .withValue('object')
                        .build();

                    expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                        basePropertyNameRepresentation.withValue('array').build(),
                        basePropertyNameRepresentation.withValue('boolean').build(),
                        basePropertyNameRepresentation.withValue('integer').build(),
                        basePropertyNameRepresentation.withValue('string').build(),
                        basePropertyNameRepresentation.withValue('number').build(),
                        basePropertyNameRepresentation.withValue('null').build(),
                        basePropertyNameRepresentation.withValue('object').build(),
                        rootTypeRepresentation
                    ]);
                });

            it('should intersect source schema properties with destination additional properties, ' +
                'if they are missing in destination schema', () => {
                const firstSomeObjectSet = someObjectSetBuilder
                    .withProperties({
                        lastName: emptyJsonSetBuilder,
                        propertyMissingInDestination: allJsonSetBuilder
                            .withOrigins([schemaOriginBuilder
                                .withValue(true)
                                .withPath(['.properties.propertyMissingInDestination'])
                                .withType('source')])
                    })
                    .build();

                const jsonSetOfStrings = someJsonSetBuilder
                    .withStringSet(allStringSetBuilder
                        .withType(parsedTypeKeywordBuilder
                            .withOrigins([schemaOriginBuilder
                                .withValue('string')
                                .withPath(['.additionalProperties.type'])
                                .withType('destination')])));
                const secondSomeObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(jsonSetOfStrings)
                    .withProperties({
                        lastName: emptyJsonSetBuilder
                    })
                    .build();

                const resultObjectSet = firstSomeObjectSet.intersect(secondSomeObjectSet);

                const missingPropertyRepresentation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withPath(['.properties.propertyMissingInDestination'])
                        .withValue(true))
                    .withDestinationValue(representationValueBuilder
                        .withPath(['.additionalProperties.type'])
                        .withValue('string'))
                    .withValue('string')
                    .build();

                const rootTypeRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('object')
                    .build();

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                    missingPropertyRepresentation,
                    rootTypeRepresentation
                ]);
            });

            it('should intersect destination schema properties with source additional properties, ' +
                'if they are missing in source schema', () => {
                const jsonSetOfStrings = someJsonSetBuilder
                    .withStringSet(allStringSetBuilder
                        .withType(parsedTypeKeywordBuilder
                                .withOrigins([schemaOriginBuilder
                                    .withValue('string')
                                    .withPath(['.additionalProperties.type'])
                                    .withType('source')])));

                const firstSomeObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(jsonSetOfStrings)
                    .withProperties({
                        lastName: emptyJsonSetBuilder
                    })
                    .build();

                const secondSomeObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(emptyJsonSetBuilder.withOrigins([]))
                    .withProperties({
                        lastName: emptyJsonSetBuilder,
                        propertyMissingInSource: allJsonSetBuilder
                            .withOrigins([schemaOriginBuilder
                                .withValue(true)
                                .withPath(['.properties.propertyMissingInDestination'])
                                .withType('destination')])
                    })
                    .build();

                const resultObjectSet = firstSomeObjectSet.intersect(secondSomeObjectSet);

                const missingPropertyRepresentation = representationBuilder
                    .withDestinationValue(representationValueBuilder
                        .withPath(['.properties.propertyMissingInDestination'])
                        .withValue(true))
                    .withSourceValue(representationValueBuilder
                        .withPath(['.additionalProperties.type'])
                        .withValue('string'))
                    .withValue('string')
                    .build();

                const rootTypeRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('object')
                    .build();

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                    missingPropertyRepresentation,
                    rootTypeRepresentation
                ]);
            });
        });
    });
});
