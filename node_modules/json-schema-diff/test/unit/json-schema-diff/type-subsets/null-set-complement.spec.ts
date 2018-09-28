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

    describe('complement', () => {
        it('should return an all null set when complementing an empty null set', () => {
            const emptyIntegerSet = emptyNullSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                schemaOriginBuilder
                    .withType('source')
                    .withPath(['type'])
                    .withValue('string')
            ])).build();

            const result = emptyIntegerSet.complement();

            expect(result.toRepresentations()).toContainRepresentations([
                representationBuilder
                    .withDestinationValues([])
                    .withSourceValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('string'))
                    .withValue('null')
                    .build()
            ]);
        });

        it('should return an empty null set when complementing an all null set', () => {
            const allIntegerSet = allNullSetBuilder.build();

            const result = allIntegerSet.complement();

            expect(result.toRepresentations()).toContainRepresentations([]);
            expect(allIntegerSet.toRepresentations()).toContainRepresentations(result.complement().toRepresentations());
        });
    });
});
