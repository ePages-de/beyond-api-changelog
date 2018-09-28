import {schemaOriginBuilder} from '../../support/builders/parsed-schema-keywords/schema-origin-builder';
import {representationBuilder} from '../../support/builders/representation-builder';
import {representationValueBuilder} from '../../support/builders/representation-value-builder';
import {allJsonSetBuilder} from '../../support/builders/sets/all-json-set-builder';
import {emptyArraySetBuilder} from '../../support/builders/sets/array-set-builder';
import {allBooleanSetBuilder} from '../../support/builders/sets/boolean-set-builder';
import {emptyJsonSetBuilder} from '../../support/builders/sets/empty-json-set-builder';
import {
    emptyIntegerSetBuilder
} from '../../support/builders/sets/integer-set-builder';
import {emptyNullSetBuilder} from '../../support/builders/sets/null-set-builder';
import {allNumberSetBuilder} from '../../support/builders/sets/number-set-builder';
import {emptyObjectSetBuilder} from '../../support/builders/sets/object-set-builder';
import {someJsonSetBuilder} from '../../support/builders/sets/some-json-set-builder';
import {allStringSetBuilder} from '../../support/builders/sets/string-set-builder';
import {customMatchers, CustomMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('json-set', () => {

    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('complement', () => {
        describe('all', () => {
            it('should complement an all json set and return an empty json set', () => {
                const allJsonSet = allJsonSetBuilder.withOrigins([]).build();

                const result = allJsonSet.complement();

                expect(result.toRepresentations()).toContainRepresentations([]);
            });

            it('should keep track of the schema origins when complementing an all json set', () => {
                const allJsonSet = allJsonSetBuilder.withOrigins([
                    schemaOriginBuilder.withType('source').withPath(['type']).withValue(undefined)
                ]).build();

                const result = allJsonSet.complement();

                const baseRepresentation = representationBuilder
                    .withSourceValues([representationValueBuilder
                        .withPath(['type'])
                        .withValue(undefined)
                    ])
                    .withDestinationValues([]);

                expect(result.complement().toRepresentations()).toContainRepresentations([
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

        describe('empty', () => {
            it('should complement an empty json set and return an all json set', () => {
                const emptyJsonSet = emptyJsonSetBuilder.withOrigins([]).build();

                const result = emptyJsonSet.complement();

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

            it('should keep track of the schema origins when complementing an empty json set', () => {
                const emptyJsonSet = emptyJsonSetBuilder.withOrigins([
                    schemaOriginBuilder.withType('source').withPath([]).withValue(false)
                ]).build();

                const result = emptyJsonSet.complement();

                const baseRepresentation = representationBuilder
                    .withSourceValues([representationValueBuilder
                        .withPath([])
                        .withValue(false)
                    ])
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
        });

        describe('some', () => {
            it('should complement a some json set and return new some json set with the complemented subtypes', () => {
                const someJsonSet = someJsonSetBuilder
                    .withStringSet(allStringSetBuilder)
                    .withBooleanSet(allBooleanSetBuilder)
                    .withNumberSet(allNumberSetBuilder)
                    .withArraySet(emptyArraySetBuilder)
                    .withIntegerSet(emptyIntegerSetBuilder)
                    .withNullSet(emptyNullSetBuilder)
                    .withObjectSet(emptyObjectSetBuilder)
                    .build();

                const result = someJsonSet.complement();

                const baseRepresentation = representationBuilder
                    .withSourceValues([])
                    .withDestinationValues([]);

                expect(result.toRepresentations()).toContainRepresentations([
                    baseRepresentation.withValue('array').build(),
                    baseRepresentation.withValue('integer').build(),
                    baseRepresentation.withValue('null').build(),
                    baseRepresentation.withValue('object').build()
                ]);
            });
        });
    });
});
