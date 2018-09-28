import {parsedTypeKeywordBuilder} from '../../support/builders/parsed-schema-keywords/parsed-type-keyword-builder';
import {schemaOriginBuilder} from '../../support/builders/parsed-schema-keywords/schema-origin-builder';
import {representationBuilder} from '../../support/builders/representation-builder';
import {representationValueBuilder} from '../../support/builders/representation-value-builder';
import {
    allArraySetBuilder,
    emptyArraySetBuilder
} from '../../support/builders/sets/array-set-builder';
import {customMatchers, CustomMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('array-set', () => {
    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('complement', () => {
        it('should return an all array set when complementing an empty array set', () => {
            const emptyArraySet = emptyArraySetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                schemaOriginBuilder
                    .withType('source')
                    .withPath(['type'])
                    .withValue('string')
            ])).build();

            const result = emptyArraySet.complement();

            expect(result.toRepresentations()).toContainRepresentations([
                representationBuilder
                    .withDestinationValues([])
                    .withSourceValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('string'))
                    .withValue('array')
                    .build()
            ]);
        });

        it('should return an empty array set when complementing an all array set', () => {
            const allArraySet = allArraySetBuilder.build();

            const result = allArraySet.complement();

            expect(result.toRepresentations()).toContainRepresentations([]);
            expect(allArraySet.toRepresentations()).toContainRepresentations(result.complement().toRepresentations());
        });
    });
});
