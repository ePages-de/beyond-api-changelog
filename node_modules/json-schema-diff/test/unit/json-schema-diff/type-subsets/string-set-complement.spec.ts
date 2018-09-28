import {parsedTypeKeywordBuilder} from '../../support/builders/parsed-schema-keywords/parsed-type-keyword-builder';
import {schemaOriginBuilder} from '../../support/builders/parsed-schema-keywords/schema-origin-builder';
import {representationBuilder} from '../../support/builders/representation-builder';
import {representationValueBuilder} from '../../support/builders/representation-value-builder';
import {
    allStringSetBuilder,
    emptyStringSetBuilder
} from '../../support/builders/sets/string-set-builder';
import {customMatchers, CustomMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('string-set', () => {
    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('complement', () => {
        it('should return an all string set when complementing an empty string set', () => {
            const emptyStringSet = emptyStringSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                schemaOriginBuilder
                    .withType('source')
                    .withPath(['type'])
                    .withValue('number')]))
                .build();

            const result = emptyStringSet.complement();

            expect(result.toRepresentations()).toContainRepresentations([
                representationBuilder
                    .withDestinationValues([])
                    .withSourceValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('number'))
                    .withValue('string')
                    .build()
            ]);
        });

        it('should return an empty string set when complementing an all string set', () => {
            const allStringSet = allStringSetBuilder.build();

            const result = allStringSet.complement();

            expect(result.toRepresentations()).toContainRepresentations([]);
            expect(allStringSet.toRepresentations()).toContainRepresentations(result.complement().toRepresentations());
        });
    });
});
