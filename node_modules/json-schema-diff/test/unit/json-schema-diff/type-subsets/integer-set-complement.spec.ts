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

    describe('complement', () => {
        it('should return an all integer set when complementing an empty integer set', () => {
            const emptyIntegerSet = emptyIntegerSetBuilder.withType(
                parsedTypeKeywordBuilder.withOrigins([schemaOriginBuilder
                    .withType('source')
                    .withPath(['type'])
                    .withValue('string')]))
                .build();

            const result = emptyIntegerSet.complement();

            expect(result.toRepresentations()).toContainRepresentations([
                representationBuilder
                    .withDestinationValues([])
                    .withSourceValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('string'))
                    .withValue('integer')
                    .build()
            ]);
        });

        it('should return an empty integer set when complementing an all integer set', () => {
            const allIntegerSet = allIntegerSetBuilder.build();

            const result = allIntegerSet.complement();

            expect(result.toRepresentations()).toContainRepresentations([]);
            expect(allIntegerSet.toRepresentations()).toContainRepresentations(result.complement().toRepresentations());
        });
    });
});
