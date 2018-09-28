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

    describe('union', () => {
        describe('empty and empty', () => {
            it('should union empty and empty object sets resulting in empty object set with merged schema origins',
                () => {
                const emptyObjectSetSource = emptyObjectSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['.type'])
                        .withType('source')
                        .withValue('integer')
                ])).build();
                const emptyObjectSetDestination = emptyObjectSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                    schemaOriginBuilder
                        .withPath(['.type'])
                        .withType('destination')
                        .withValue('string')
                ])).build();

                const complementOfResult = emptyObjectSetSource.union(emptyObjectSetDestination).complement();

                const rootTypeRepresentation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withPath(['.type'])
                        .withValue('integer'))
                    .withDestinationValue(representationValueBuilder
                        .withPath(['.type'])
                        .withValue('string'))
                    .withValue('object')
                    .build();

                expect(complementOfResult.toRepresentations()).toContainRepresentations([
                    rootTypeRepresentation
                ]);
            });
        });

        describe('all and all', () => {
            it('should union all and all object sets resulting in all object set with merged schema origins', () => {
                const sourceAllObjectSet = allObjectSetBuilder
                    .withType(parsedTypeKeywordBuilder.withOrigins([schemaOriginBuilder
                        .withPath(['.type'])
                        .withType('source')
                        .withValue('object')
                    ])).build();

                const destinationAllObjectSet = allObjectSetBuilder
                    .withType(parsedTypeKeywordBuilder.withOrigins([schemaOriginBuilder
                        .withPath(['.type'])
                        .withType('destination')
                        .withValue('object')
                    ])).build();

                const resultObjectSet = sourceAllObjectSet.union(destinationAllObjectSet);

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

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                    representation
                ]);
            });
        });

        describe('empty and all', () => {
            it('should union empty and all object sets resulting in all object set with merged schema origins', () => {
                const emptyObjectSetSource = emptyObjectSetBuilder.withType(
                    parsedTypeKeywordBuilder.withOrigins([schemaOriginBuilder
                    .withType('source')
                    .withValue('string')
                    .withPath(['.type'])
                ])).build();
                const allObjectSetDestination = allObjectSetBuilder
                    .withType(parsedTypeKeywordBuilder.withOrigins([schemaOriginBuilder
                        .withType('destination')
                        .withValue('object')
                        .withPath(['.type'])
                    ])).build();

                const resultObjectSet = emptyObjectSetSource.union(allObjectSetDestination);

                const representation = representationBuilder
                    .withSourceValues([representationValueBuilder
                        .withValue('string')
                        .withPath(['.type'])])
                    .withDestinationValues([representationValueBuilder
                        .withValue('object')
                        .withPath(['.type'])])
                    .withValue('object')
                    .build();
                expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                    representation
                ]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const emptyObjectSet = emptyObjectSetBuilder.build();
                const allObjectSet = allObjectSetBuilder.build();

                const resultAllWithEmpty = allObjectSet.union(emptyObjectSet);
                const resultEmptyWithAll = emptyObjectSet.union(allObjectSet);

                expect(resultAllWithEmpty.toRepresentations())
                    .toContainRepresentations(resultEmptyWithAll.toRepresentations());
            });
        });

        describe('empty and some', () => {
            it('should union empty and some object sets and return some object set with merged schema origins', () => {
                const emptyObjectSet = emptyObjectSetBuilder.withType(
                    parsedTypeKeywordBuilder.withOrigins([schemaOriginBuilder
                        .withPath(['.type'])
                        .withValue('string')
                        .withType('source')
                    ])).build();

                const someObjectSet = someObjectSetBuilder
                    .withType(parsedTypeKeywordBuilder
                        .withOrigins([schemaOriginBuilder
                            .withPath(['.type'])
                            .withValue('object')
                            .withType('destination')])
                        .withParsedValue(['object']))
                    .build();

                const resultObjectSet = emptyObjectSet.union(someObjectSet);

                const representations = representationBuilder
                    .withSourceValues([representationValueBuilder
                        .withPath(['.type'])
                        .withValue('string')])
                    .withDestinationValues([representationValueBuilder
                        .withPath(['.type'])
                        .withValue('object')])
                    .withValue('object')
                    .build();

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([representations]);
            });

            it('should keep track of some object set properties origins when unioning with empty', () => {
                const emptyObjectSet = emptyObjectSetBuilder.withType(
                    parsedTypeKeywordBuilder.withOrigins([schemaOriginBuilder
                        .withPath(['.type'])
                        .withValue('string')
                        .withType('source')
                    ])).build();
                const jsonSetOfStrings = someJsonSetBuilder
                    .withStringSet(allStringSetBuilder
                        .withType(parsedTypeKeywordBuilder
                            .withOrigins([schemaOriginBuilder
                                .withValue('string')
                                .withPath(['.properties.name.additionalProperties.type'])
                                .withType('destination')])));
                const someObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(emptyJsonSetBuilder)
                    .withProperties({
                        name: jsonSetOfStrings
                    })
                    .build();

                const resultObjectSet = emptyObjectSet.union(someObjectSet);

                const rootTypeRepresentation = representationBuilder
                    .withSourceValue(representationValueBuilder.withValue('string').withPath(['.type']))
                    .withDestinationValues([])
                    .withValue('object')
                    .build();

                const propertiesRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValue(representationValueBuilder
                        .withValue('string')
                        .withPath(['.properties.name.additionalProperties.type']))
                    .withValue('string')
                    .build();

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                    rootTypeRepresentation, propertiesRepresentation
                ]);
            });

            it('should keep track of some object set additionalProperties origins when unioning with empty', () => {
                const emptyObjectSet = emptyObjectSetBuilder.build();
                const jsonSetOfStrings = someJsonSetBuilder
                    .withStringSet(allStringSetBuilder
                        .withType(parsedTypeKeywordBuilder
                            .withOrigins([schemaOriginBuilder
                                .withValue('string')
                                .withPath(['.additionalProperties.type'])
                                .withType('destination')])));
                const someObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(jsonSetOfStrings)
                    .build();

                const resultObjectSet = emptyObjectSet.union(someObjectSet);

                const rootTypeRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('object')
                    .build();

                const additionalPropertiesRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValue(
                        representationValueBuilder
                            .withPath(['.additionalProperties.type'])
                            .withValue('string'))
                    .withValue('string')
                    .build();

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                    rootTypeRepresentation, additionalPropertiesRepresentation
                ]);

            });

            it('should return the same result regardless the order of the operands', () => {
                const emptyObjectSet = emptyObjectSetBuilder.build();
                const someObjectSet = someObjectSetBuilder.build();

                const resultSomeAndEmpty = someObjectSet.union(emptyObjectSet);
                const resultEmptyAndSome = emptyObjectSet.union(someObjectSet);

                expect(resultSomeAndEmpty.toRepresentations())
                    .toContainRepresentations(resultEmptyAndSome.toRepresentations());
            });
        });

        describe('all and some', () => {
            it('should union all and some object sets and return all object set with merged schema origins', () => {
                const allObjectSet = allObjectSetBuilder
                    .withType(parsedTypeKeywordBuilder.withOrigins([schemaOriginBuilder
                        .withType('source')
                        .withPath(['.type'])
                        .withValue('object')
                    ]))
                    .build();

                const someObjectSet = someObjectSetBuilder
                    .withType(parsedTypeKeywordBuilder
                        .withOrigins([schemaOriginBuilder
                            .withType('destination')
                            .withPath(['.type'])
                            .withValue('object')])
                        .withParsedValue(['object']))
                    .build();

                const resultObjectSet = allObjectSet.union(someObjectSet);

                const representation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withPath(['.type'])
                        .withValue('object'))
                    .withDestinationValue(representationValueBuilder
                        .withPath(['.type'])
                        .withValue('object'))
                    .withValue('object')
                    .build();
                expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                    representation
                ]);
            });

            it('should return the same result regardless the order of the operands', () => {
                const allObjectSet = allObjectSetBuilder.build();

                const someObjectSet = someObjectSetBuilder.build();

                const resultSomeAndAll = someObjectSet.union(allObjectSet);
                const resultAllAndSome = allObjectSet.union(someObjectSet);

                expect(resultSomeAndAll.toRepresentations())
                    .toContainRepresentations(resultAllAndSome.toRepresentations());
            });
        });

        describe('some and some', () => {
            it('should track type schema origins when some and some object sets are unioned', () => {
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

                const resultObjectSet = firstSomeObjectSet.union(secondSomeObjectSet);

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

            it('should track additionalProperties origins when some and some object sets are unioned', () => {
                const firstSomeObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(emptyJsonSetBuilder
                        .withOrigins([schemaOriginBuilder
                            .withPath(['.additionalProperties'])
                            .withValue(false)
                            .withType('source')]))
                    .build();

                const secondSomeObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(allJsonSetBuilder
                        .withOrigins([schemaOriginBuilder
                            .withPath(['.additionalProperties'])
                            .withValue(true)
                            .withType('destination')]))
                    .build();
                const resultObjectSet = firstSomeObjectSet.union(secondSomeObjectSet);

                const rootTypeRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('object')
                    .build();

                const baseAdditionalPropertiesRepresentation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withPath(['.additionalProperties'])
                        .withValue(false))
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

            it('should union same properties and track its origins when some and some object sets are unioned',
                () => {
                    const firstSomeObjectSet = someObjectSetBuilder
                        .withProperties({
                            name: emptyJsonSetBuilder
                                .withOrigins([schemaOriginBuilder
                                    .withPath(['.properties.name'])
                                    .withValue(false)
                                    .withType('source')])
                        })
                        .build();

                    const secondSomeObjectSet = someObjectSetBuilder
                        .withProperties({
                            name: allJsonSetBuilder
                                .withOrigins([schemaOriginBuilder
                                    .withPath(['.properties.name'])
                                    .withValue(true)
                                    .withType('destination')])
                        })
                        .build();

                    const resultObjectSet = firstSomeObjectSet.union(secondSomeObjectSet);

                    const basePropertyNameRepresentation = representationBuilder
                        .withSourceValue(representationValueBuilder
                            .withPath(['.properties.name'])
                            .withValue(false))
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
                        basePropertyNameRepresentation.withValue('number').build(),
                        basePropertyNameRepresentation.withValue('null').build(),
                        basePropertyNameRepresentation.withValue('string').build(),
                        basePropertyNameRepresentation.withValue('object').build(),
                        rootTypeRepresentation
                    ]);
                });

            it('should union source schema properties with destination additional properties, ' +
                'if they are missing in destination schema', () => {
                const firstSomeObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(emptyJsonSetBuilder.withOrigins([]))
                    .withProperties({
                        lastName: emptyJsonSetBuilder,
                        propertyMissingInDestination: allJsonSetBuilder
                            .withOrigins([schemaOriginBuilder
                                .withValue(true)
                                .withPath(['.properties.propertyMissingInDestination.additionalProperties'])
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

                const resultObjectSet = firstSomeObjectSet.union(secondSomeObjectSet);

                const baseMissingPropertyRepresentation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withPath(['.properties.propertyMissingInDestination.additionalProperties'])
                        .withValue(true))
                    .withDestinationValue(representationValueBuilder
                        .withPath(['.additionalProperties.type'])
                        .withValue('string'));

                const additionalPropertiesRepresentation = representationBuilder
                    .withSourceValues([])
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
                    baseMissingPropertyRepresentation.withValue('array').build(),
                    baseMissingPropertyRepresentation.withValue('boolean').build(),
                    baseMissingPropertyRepresentation.withValue('integer').build(),
                    baseMissingPropertyRepresentation.withValue('number').build(),
                    baseMissingPropertyRepresentation.withValue('null').build(),
                    baseMissingPropertyRepresentation.withValue('string').build(),
                    baseMissingPropertyRepresentation.withValue('object').build(),
                    rootTypeRepresentation,
                    additionalPropertiesRepresentation
                ]);
            });

            it('should union destination schema properties with source schema additional properties, ' +
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
                        lastName: emptyJsonSetBuilder.withOrigins([])
                    })
                    .build();

                const secondSomeObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(emptyJsonSetBuilder.withOrigins([]))
                    .withProperties({
                        lastName: emptyJsonSetBuilder,
                        propertyMissingInSource: allJsonSetBuilder
                            .withOrigins([schemaOriginBuilder
                                .withValue(true)
                                .withPath(['.properties.propertyMissingInSource'])
                                .withType('destination')])
                    })
                    .build();

                const resultObjectSet = firstSomeObjectSet.union(secondSomeObjectSet);

                const baseMissingPropertyRepresentation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withPath(['.additionalProperties.type'])
                        .withValue('string'))
                    .withDestinationValue(representationValueBuilder
                        .withPath(['.properties.propertyMissingInSource'])
                        .withValue(true));

                const additionalPropertiesRepresentation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withPath(['.additionalProperties.type'])
                        .withValue('string'))
                    .withDestinationValues([])
                    .withValue('string')
                    .build();

                const rootTypeRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('object')
                    .build();

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                    baseMissingPropertyRepresentation.withValue('array').build(),
                    baseMissingPropertyRepresentation.withValue('boolean').build(),
                    baseMissingPropertyRepresentation.withValue('integer').build(),
                    baseMissingPropertyRepresentation.withValue('number').build(),
                    baseMissingPropertyRepresentation.withValue('null').build(),
                    baseMissingPropertyRepresentation.withValue('string').build(),
                    baseMissingPropertyRepresentation.withValue('object').build(),
                    rootTypeRepresentation,
                    additionalPropertiesRepresentation
                ]);
            });
        });
    });
});
