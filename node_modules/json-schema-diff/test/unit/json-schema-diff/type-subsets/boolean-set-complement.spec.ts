import {parsedTypeKeywordBuilder} from '../../support/builders/parsed-schema-keywords/parsed-type-keyword-builder';
import {schemaOriginBuilder} from '../../support/builders/parsed-schema-keywords/schema-origin-builder';
import {representationBuilder} from '../../support/builders/representation-builder';
import {representationValueBuilder} from '../../support/builders/representation-value-builder';
import {
    allBooleanSetBuilder,
    emptyBooleanSetBuilder
} from '../../support/builders/sets/boolean-set-builder';
import {customMatchers, CustomMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('boolean-set', () => {
    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('complement', () => {
        it('should return an all boolean set when complementing an empty boolean set', () => {
            const emptyBooleanSet = emptyBooleanSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                schemaOriginBuilder
                    .withType('source')
                    .withPath(['type'])
                    .withValue('string')
            ])).build();

            const result = emptyBooleanSet.complement();

            expect(result.toRepresentations()).toContainRepresentations([
                representationBuilder
                    .withDestinationValues([])
                    .withSourceValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('string'))
                    .withValue('boolean')
                    .build()
            ]);
        });

        it('should return an empty boolean set when complementing an all boolean set', () => {
            const allABooleanSet = allBooleanSetBuilder.build();

            const result = allABooleanSet.complement();

            expect(result.toRepresentations()).toContainRepresentations([]);
            expect(allABooleanSet.toRepresentations())
                .toContainRepresentations(result.complement().toRepresentations());
        });
    });
});
