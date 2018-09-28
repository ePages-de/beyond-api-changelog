import {parsedTypeKeywordBuilder} from '../../support/builders/parsed-schema-keywords/parsed-type-keyword-builder';
import {schemaOriginBuilder} from '../../support/builders/parsed-schema-keywords/schema-origin-builder';
import {representationBuilder} from '../../support/builders/representation-builder';
import {representationValueBuilder} from '../../support/builders/representation-value-builder';
import {allNumberSetBuilder, emptyNumberSetBuilder} from '../../support/builders/sets/number-set-builder';
import {customMatchers, CustomMatchers} from '../../support/custom-matchers/custom-matchers';

declare function expect<T>(actual: T): CustomMatchers<T>;

describe('number-set', () => {
    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    describe('complement', () => {
        it('should return an all number set when complementing an empty number set', () => {
            const emptyNumberSet = emptyNumberSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
                schemaOriginBuilder
                    .withType('source')
                    .withPath(['type'])
                    .withValue('string')]
                )).build();

            const result = emptyNumberSet.complement();

            expect(result.toRepresentations()).toContainRepresentations([
                representationBuilder
                    .withDestinationValues([])
                    .withSourceValue(representationValueBuilder
                        .withPath(['type'])
                        .withValue('string'))
                    .withValue('number')
                    .build()
            ]);
        });

        it('should return an empty number set when complementing an all number set', () => {
            const allNumberSet = allNumberSetBuilder.build();

            const result = allNumberSet.complement();

            expect(result.toRepresentations()).toContainRepresentations([]);
            expect(allNumberSet.toRepresentations()).toContainRepresentations(result.complement().toRepresentations());
        });
    });
});
