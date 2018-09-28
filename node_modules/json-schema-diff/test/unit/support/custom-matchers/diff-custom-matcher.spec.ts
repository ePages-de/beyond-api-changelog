import {DiffResult, DiffResultDifference} from '../../../../lib/api-types';
import CustomMatcherResult = jasmine.CustomMatcherResult;
import {diffResultDifferenceBuilder} from '../builders/diff-result-difference-builder';
import {diffResultDifferenceValueBuilder} from '../builders/diff-result-difference-value-builder';
import {customMatchers} from './custom-matchers';

describe('toContainDifferences', () => {

    const whenToContainDifferencesIsCalledWith = (actualDiffResult: DiffResult,
                                                  expectedDifferences: DiffResultDifference[]): CustomMatcherResult => {
        const matcher = customMatchers.toContainDifferences();
        return matcher.compare(actualDiffResult, expectedDifferences);
    };

    const createDiffResultWithDifferences = (differences: DiffResultDifference[],
                                             addedByDestinationSchema: boolean,
                                             removedByDestinationSchema: boolean): DiffResult => {
        return {
            addedByDestinationSchema,
            differences,
            removedByDestinationSchema
        };
    };

    describe('actual and expected differences', () => {
        it('should pass when the actual diff result has no differences, and no differences are expected', () => {
           const actualDiffResult = createDiffResultWithDifferences([], false, false);
           const expectedDifferences: DiffResultDifference[] = [];

           const result = whenToContainDifferencesIsCalledWith(actualDiffResult, expectedDifferences);

           expect(result.pass).toBe(true, 'matcher result');
        });

        it('should pass when there are differences and actual and expected differences match', () => {
            const actualDifference = diffResultDifferenceBuilder.build();
            const actualDiffResult = createDiffResultWithDifferences([actualDifference], true, false);
            const expectedDifference = diffResultDifferenceBuilder.build();

            const result = whenToContainDifferencesIsCalledWith(actualDiffResult, [expectedDifference]);
            expect(result.pass).toBe(true);
        });

        it('should fail when there are more actual differences than expected', () => {
            const actualDiffResult = createDiffResultWithDifferences(
                [diffResultDifferenceBuilder.build()],
                true,
                false);

            const expectedDifferences: DiffResultDifference[] = [];

            const result = whenToContainDifferencesIsCalledWith(actualDiffResult, expectedDifferences);

            expect(result.pass).toBe(false, 'matcher result');
        });

        it('should fail when there are more expected differences than actual', () => {
            const actualDiffResult = createDiffResultWithDifferences([], false, false);

            const expectedDifferences: DiffResultDifference[] = [diffResultDifferenceBuilder.build()];

            const result = whenToContainDifferencesIsCalledWith(actualDiffResult, expectedDifferences);

            expect(result.pass).toBe(false, 'matcher result');
        });

        it('should pass when the actual differences in the diff result match the expected,' +
            'but differences are in a different order', () => {
            const difference1 = diffResultDifferenceBuilder.withTypeAddType().build();
            const difference2 = diffResultDifferenceBuilder.withTypeRemoveType().build();

            const actualDiffResult = createDiffResultWithDifferences([difference1, difference2], true, true);
            const expectedDifferences: DiffResultDifference[] = [difference2, difference1];

            const result = whenToContainDifferencesIsCalledWith(actualDiffResult, expectedDifferences);
            expect(result.pass).toBe(true, 'matcher result');
        });
    });

    describe('actual and expected difference properties', () => {

        it('should fail when actual difference type does not match expected difference type', () => {
            const actualDifference = diffResultDifferenceBuilder
                .withTypeAddType().build();

            const actualDiffResult = createDiffResultWithDifferences([actualDifference], true, false);

            const expectedDifference = diffResultDifferenceBuilder
                .withTypeRemoveType().build();

            const result = whenToContainDifferencesIsCalledWith(actualDiffResult, [expectedDifference]);
            expect(result.pass).toBe(false, 'matcher result');
        });

        it('should fail when actual difference value does not match expected difference value', () => {
            const actualDifference = diffResultDifferenceBuilder
                .withValue({ some: 'value'})
                .build();

            const expectedDifference = diffResultDifferenceBuilder
                .withValue({ some: 'otherValue'})
                .build();

            const actualDiffResult = createDiffResultWithDifferences([actualDifference], true, false);
            const result = whenToContainDifferencesIsCalledWith(actualDiffResult, [expectedDifference]);

            expect(result.pass).toBe(false, 'matcher result');

        });

        it('should compare unexpected property on actual and expected difference and fail if they do not match', () => {
            const actualDifference = diffResultDifferenceBuilder.build();
            (actualDifference as any).newProperty = 'value 1';

            const expectedDifference = diffResultDifferenceBuilder.build();
            (expectedDifference as any).newProperty = 'value 2';

            const actualDiffResult = createDiffResultWithDifferences([actualDifference], true, false);

            const result = whenToContainDifferencesIsCalledWith(actualDiffResult, [expectedDifference]);
            expect(result.pass).toBe(false, 'matcher result');
        });

        it('should compare unexpected property on actual and expected difference and pass if they match', () => {
            const actualDifference = diffResultDifferenceBuilder.build();
            (actualDifference as any).newProperty = 'value 1';

            const expectedDifference = diffResultDifferenceBuilder.build();
            (expectedDifference as any).newProperty = 'value 1';

            const actualDiffResult = createDiffResultWithDifferences([actualDifference], true, false);

            const result = whenToContainDifferencesIsCalledWith(actualDiffResult, [expectedDifference]);
            expect(result.pass).toBe(true, 'matcher result');
        });

        it('should pass when the actual differences match expected and sourceValues array is in different order',
            () =>  {
            const difference1 = diffResultDifferenceBuilder
                .withSourceValues([
                    diffResultDifferenceValueBuilder
                        .withValue('number'),
                    diffResultDifferenceValueBuilder
                        .withValue('string')]
                ).build();

            const difference2 = diffResultDifferenceBuilder
                .withSourceValues([
                    diffResultDifferenceValueBuilder
                        .withValue('string'),
                    diffResultDifferenceValueBuilder
                        .withValue('number')]
                ).build();

            const actualDiffResult = createDiffResultWithDifferences([difference1], true, false);
            const expectedDifferences: DiffResultDifference[] = [difference2];

            const result = whenToContainDifferencesIsCalledWith(actualDiffResult, expectedDifferences);
            expect(result.pass).toBe(true, 'matcher result');
        });

        it('should pass when the actual differences match expected and destinationValues array is in different order',
            () =>  {
            const difference1 = diffResultDifferenceBuilder
                .withDestinationValues([
                    diffResultDifferenceValueBuilder
                        .withValue('number'),
                    diffResultDifferenceValueBuilder
                        .withValue('string')]
                ).build();

            const difference2 = diffResultDifferenceBuilder
                .withDestinationValues([
                    diffResultDifferenceValueBuilder
                        .withValue('string'),
                    diffResultDifferenceValueBuilder
                        .withValue('number')]
                ).build();

            const actualDiffResult = createDiffResultWithDifferences([difference1], true, false);
            const expectedDifferences: DiffResultDifference[] = [difference2];

            const result = whenToContainDifferencesIsCalledWith(actualDiffResult, expectedDifferences);
            expect(result.pass).toBe(true, 'matcher result');
        });

        it('should fail when actual differences match expected but sourceValues.value array is in different order',
            () =>  {
            const difference1 = diffResultDifferenceBuilder
                .withSourceValue(
                    diffResultDifferenceValueBuilder
                        .withValue(['string', 'number'])
                ).build();

            const difference2 = diffResultDifferenceBuilder
                .withSourceValue(
                    diffResultDifferenceValueBuilder
                        .withValue(['number', 'string'])
                ).build();

            const actualDiffResult = createDiffResultWithDifferences([difference1], true, false);
            const expectedDifferences: DiffResultDifference[] = [difference2];

            const result = whenToContainDifferencesIsCalledWith(actualDiffResult, expectedDifferences);
            expect(result.pass).toBe(false, 'matcher result');
        });

        it('should fail when actual addedByDestinationSchema value does not match expected', () => {
            const actualDifference = diffResultDifferenceBuilder
                .withTypeAddType().build();
            const expectedDifference = diffResultDifferenceBuilder
                .withTypeAddType().build();

            const actualDiffResult = createDiffResultWithDifferences([actualDifference], false, false);

            const result = whenToContainDifferencesIsCalledWith(actualDiffResult, [expectedDifference]);

            expect(result.pass).toBe(false, 'matcher result');
        });
        it('should fail when actual removedByDestinationSchema value does not match expected', () => {
            const actualDifference = diffResultDifferenceBuilder
                .withTypeRemoveType().build();
            const expectedDifference = diffResultDifferenceBuilder
                .withTypeRemoveType().build();

            const actualDiffResult = createDiffResultWithDifferences([actualDifference], false, false);

            const result = whenToContainDifferencesIsCalledWith(actualDiffResult, [expectedDifference]);

            expect(result.pass).toBe(false, 'matcher result');
        });
    });

    describe('actual and expected differences message', () => {
        const unmatchedActualDifferencesTitle = 'Unmatched actual differences:';
        const unmatchedExpectedDifferencesTitle = 'Unmatched expected differences:';

        it('should contain a message with formatted difference when matching fails', () => {
            const actualDifference = diffResultDifferenceBuilder
                .withValue('number')
                .build();

            const expectedDifference = diffResultDifferenceBuilder
                .withValue('string')
                .build();

            const actualDifferenceResult = createDiffResultWithDifferences([actualDifference], true, false);

            const result = whenToContainDifferencesIsCalledWith(actualDifferenceResult, [expectedDifference]);
            expect(result.message).toContain(unmatchedActualDifferencesTitle);
            expect(result.message).toContain('"value": "number"');
            expect(result.message).toContain(unmatchedExpectedDifferencesTitle);
            expect(result.message).toContain('"value": "string"');
        });

        it('should include only unmatched actual differences if all expected differences were matched', () => {
            const matchedExpectedDifference = diffResultDifferenceBuilder
                .withValue('boolean')
                .build();

            const matchedActualDifference = diffResultDifferenceBuilder
                .withValue('boolean')
                .build();

            const unmatchedActualDifference = diffResultDifferenceBuilder
                .withValue('number')
                .build();

            const actualDifferenceResult = createDiffResultWithDifferences(
                [matchedActualDifference, unmatchedActualDifference], true, false);

            const result = whenToContainDifferencesIsCalledWith(actualDifferenceResult, [matchedExpectedDifference]);
            expect(result.message).toContain(unmatchedActualDifferencesTitle);
            expect(result.message).toContain('number');
            expect(result.message).not.toContain(unmatchedExpectedDifferencesTitle);
            expect(result.message).not.toContain('boolean');
        });

        it('should include only unmatched expected differences if all actual differences were matched', () => {
            const matchedExpectedDifference = diffResultDifferenceBuilder
                .withValue('boolean')
                .build();

            const unmatchedExpectedDifference = diffResultDifferenceBuilder
                .withValue('number')
                .build();

            const matchedActualDifference = diffResultDifferenceBuilder
                .withValue('boolean')
                .build();

            const actualDifferenceResult = createDiffResultWithDifferences([matchedActualDifference], true, false);

            const result = whenToContainDifferencesIsCalledWith(actualDifferenceResult,
                [unmatchedExpectedDifference, matchedExpectedDifference]);

            expect(result.message).not.toContain(unmatchedActualDifferencesTitle);
            expect(result.message).not.toContain('boolean');
            expect(result.message).toContain(unmatchedExpectedDifferencesTitle);
            expect(result.message).toContain('number');
        });

        it('should report message if expected addedByDestinationSchema does not match actual', () => {
            const actualAddedDifference = diffResultDifferenceBuilder
                .withTypeAddType().build();
            const expectedAddedDifference =  diffResultDifferenceBuilder
                .withTypeAddType().build();
            const actualDifferenceResult = createDiffResultWithDifferences([actualAddedDifference], false, false);

            const result = whenToContainDifferencesIsCalledWith(actualDifferenceResult, [expectedAddedDifference]);

            expect(result.message).toContain('Expected addedByDestinationSchema to be true but it was false');
        });

        it('should report message if expected removedByDestinationSchema does not match actual', () => {
            const actualRemovedDifference = diffResultDifferenceBuilder
                .withTypeRemoveType().build();
            const expectedRemovedDifference =  diffResultDifferenceBuilder
                .withTypeRemoveType().build();
            const actualDifferenceResult = createDiffResultWithDifferences([actualRemovedDifference], false, false);

            const result = whenToContainDifferencesIsCalledWith(actualDifferenceResult, [expectedRemovedDifference]);

            expect(result.message).toContain('Expected removedByDestinationSchema to be true but it was false');
        });
    });
});
