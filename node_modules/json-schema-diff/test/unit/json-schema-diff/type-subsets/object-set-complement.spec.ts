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
import {customMatchers, CustomMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('object-set', () => {
    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('complement', () => {
        it('should return an all object set when complementing an empty object set', () => {
            const emptyObjectSet = emptyObjectSetBuilder
                .withType(parsedTypeKeywordBuilder.withOrigins([schemaOriginBuilder
                    .withType('source')
                    .withPath(['type'])
                    .withValue('string')
                ])).build();

            const resultObjectSet = emptyObjectSet.complement();

            expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                representationBuilder
                    .withDestinationValues([])
                    .withSourceValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('string'))
                    .withValue('object')
                    .build()
            ]);
        });

        it('should return an empty object set when complementing an all object set', () => {
            const allObjectSet = allObjectSetBuilder.build();

            const resultObjectSet = allObjectSet.complement();

            expect(resultObjectSet.toRepresentations()).toContainRepresentations([]);
            expect(allObjectSet.toRepresentations())
                .toContainRepresentations(resultObjectSet.complement().toRepresentations());
        });

        describe('some object set', () => {
            it('should return a some object set with complemented properties', () => {
                const someObjectSet = someObjectSetBuilder
                    .withProperties({
                        name: emptyJsonSetBuilder
                            .withOrigins([schemaOriginBuilder
                                .withPath(['properties', 'name'])
                                .withValue(false)
                                .withType('source')])
                    })
                    .withAdditionalProperties(allJsonSetBuilder)
                    .build();

                const resultObjectSet = someObjectSet.complement();

                const baseNamePropertyRepresentation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withValue(false)
                        .withPath(['properties', 'name']))
                    .withDestinationValues([]);

                const representation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('object')
                    .build();

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                    baseNamePropertyRepresentation.withValue('boolean').build(),
                    baseNamePropertyRepresentation.withValue('array').build(),
                    baseNamePropertyRepresentation.withValue('integer').build(),
                    baseNamePropertyRepresentation.withValue('null').build(),
                    baseNamePropertyRepresentation.withValue('number').build(),
                    baseNamePropertyRepresentation.withValue('object').build(),
                    baseNamePropertyRepresentation.withValue('string').build(),
                    representation
                ]);
            });

            it('should return a some object set with complemented additional properties', () => {
                const someObjectSet = someObjectSetBuilder
                    .withAdditionalProperties(emptyJsonSetBuilder
                        .withOrigins([schemaOriginBuilder
                            .withPath(['additionalProperties'])
                            .withValue(false)
                            .withType('source')]))
                    .withProperties({
                        name: allJsonSetBuilder.withOrigins([])
                    })
                    .build();

                const resultObjectSet = someObjectSet.complement();

                const baseAdditionalPropertiesRepresentation = representationBuilder
                    .withSourceValue(representationValueBuilder
                        .withValue(false)
                        .withPath(['additionalProperties']))
                    .withDestinationValues([]);

                const representation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([])
                    .withValue('object')
                    .build();

                expect(resultObjectSet.toRepresentations()).toContainRepresentations([
                    baseAdditionalPropertiesRepresentation.withValue('boolean').build(),
                    baseAdditionalPropertiesRepresentation.withValue('array').build(),
                    baseAdditionalPropertiesRepresentation.withValue('integer').build(),
                    baseAdditionalPropertiesRepresentation.withValue('null').build(),
                    baseAdditionalPropertiesRepresentation.withValue('number').build(),
                    baseAdditionalPropertiesRepresentation.withValue('object').build(),
                    baseAdditionalPropertiesRepresentation.withValue('string').build(),
                    representation
                ]);
            });
        });
    });
});
