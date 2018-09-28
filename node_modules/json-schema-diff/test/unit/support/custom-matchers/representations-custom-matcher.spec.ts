import {Representation, RepresentationValue} from '../../../../lib/json-schema-diff/parser/json-set/set';
import {customMatchers} from './custom-matchers';
import CustomMatcherResult = jasmine.CustomMatcherResult;

describe('toContainRepresentations', () => {

    const whenToContainRepresentationsIsCalledWith = (
        actualRepresentations: Representation[], expectedRepresentations: Representation[]
    ): CustomMatcherResult => {
        const matcher = customMatchers.toContainRepresentations();
        return matcher.compare(actualRepresentations, expectedRepresentations);
    };

    const createWellKnownRepresentationWithValue = (value: any): Representation => ({
        destinationValues: [{
            path: ['type'],
            value: ''
        }],
        sourceValues: [{
            path: ['type'],
            value: ''
        }],
        type: 'type',
        value
    });

    describe('actual and expected representations', () => {
        it('should pass when the actual result has no representations and none are expected', () => {
            const actualRepresentations: Representation[] = [];
            const expectedRepresentations: Representation[] = [];

            const result = whenToContainRepresentationsIsCalledWith(actualRepresentations, expectedRepresentations);

            expect(result.pass).toBe(true, 'matcher result');
        });

        it('should pass when there are representations and they match', () => {
            const actualRepresentation = createWellKnownRepresentationWithValue('string');
            const expectedRepresentation = createWellKnownRepresentationWithValue('string');

            const result = whenToContainRepresentationsIsCalledWith([actualRepresentation], [expectedRepresentation]);
            expect(result.pass).toBe(true);
        });

        it('should fail when there are more actual representations than expected', () => {
            const actualRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('string'),
                createWellKnownRepresentationWithValue('number')];

            const expectedRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('string')];

            const result = whenToContainRepresentationsIsCalledWith(actualRepresentations, expectedRepresentations);
            expect(result.pass).toBe(false, 'matcher result');
        });

        it('should fail when there are more expected representations than actual', () => {
            const actualRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('string')];

            const expectedRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('string'),
                createWellKnownRepresentationWithValue('number')];

            const result = whenToContainRepresentationsIsCalledWith(actualRepresentations, expectedRepresentations);
            expect(result.pass).toBe(false, 'matcher result');
        });

        it('should pass when the actual representation array matches the expected,' +
            'but representations are in a different order', () => {
            const actualRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('number'),
                createWellKnownRepresentationWithValue('string')];

            const expectedRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('string'),
                createWellKnownRepresentationWithValue('number')];

            const result = whenToContainRepresentationsIsCalledWith(actualRepresentations, expectedRepresentations);
            expect(result.pass).toBe(true, 'matcher result');
        });
    });

    describe('actual and expected representation properties', () => {

        it('should fail when actual representation value does not match representation difference value', () => {
            const actualRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('number')];

            const expectedRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('string')];

            const result = whenToContainRepresentationsIsCalledWith(actualRepresentations, expectedRepresentations);

            expect(result.pass).toBe(false, 'matcher result');

        });

        it('should compare unexpected property on actual and expected difference and pass if they match', () => {
            const actualRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('number')];
            (actualRepresentations as any)[0].newProperty = 'value 1';

            const expectedRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('number')];
            (expectedRepresentations as any)[0].newProperty = 'value 1';

            const result = whenToContainRepresentationsIsCalledWith(actualRepresentations, expectedRepresentations);

            expect(result.pass).toBe(true, 'matcher result');
        });

        it('should compare unexpected property on actual and expected representation and fail if they do not match',
            () => {
                const actualRepresentations: Representation[] = [
                    createWellKnownRepresentationWithValue('number')];
                (actualRepresentations as any)[0].newProperty = 'value 1';

                const expectedRepresentations: Representation[] = [
                    createWellKnownRepresentationWithValue('number')];
                (expectedRepresentations as any)[0].newProperty = 'value 2';

                const result = whenToContainRepresentationsIsCalledWith(actualRepresentations, expectedRepresentations);

                expect(result.pass).toBe(false, 'matcher result');
            });

        it('should pass when the actual representation match expected and sourceValues array is in different order',
            () => {
                const sourceValueA: RepresentationValue = {
                    path: ['type'],
                    value: 'string'
                };
                const sourceValueB: RepresentationValue = {
                    path: ['additionalProperties'],
                    value: true
                };

                const actualRepresentation: Representation = {
                    destinationValues: [],
                    sourceValues: [sourceValueA, sourceValueB],
                    type: 'type',
                    value: ''
                };
                const expectedRepresentation: Representation = {
                    destinationValues: [],
                    sourceValues: [sourceValueB, sourceValueA],
                    type: 'type',
                    value: ''
                };
                const result = whenToContainRepresentationsIsCalledWith(
                    [actualRepresentation],
                    [expectedRepresentation]);

                expect(result.pass).toBe(true, 'matcher result');
            });

        it('should pass when the actual representations match expected and destinationValues array has different order',
            () => {
                const destinationValueA: RepresentationValue = {
                    path: ['type'],
                    value: 'string'
                };
                const destinationValueB: RepresentationValue = {
                    path: ['additionalProperties'],
                    value: true
                };

                const actualRepresentation: Representation = {
                    destinationValues: [destinationValueA, destinationValueB],
                    sourceValues: [],
                    type: 'type',
                    value: ''
                };
                const expectedRepresentation: Representation = {
                    destinationValues: [destinationValueB, destinationValueA],
                    sourceValues: [],
                    type: 'type',
                    value: ''
                };
                const result = whenToContainRepresentationsIsCalledWith(
                    [actualRepresentation],
                    [expectedRepresentation]);

                expect(result.pass).toBe(true, 'matcher result');
            });

        it('should fail when actual representations match expected but sourceValues.value array has different order',
            () => {
                const sourceValueA: RepresentationValue = {
                    path: ['type'],
                    value: ['string', 'boolean']
                };
                const sourceValueB: RepresentationValue = {
                    path: ['type'],
                    value: ['boolean', 'string']
                };

                const actualRepresentation: Representation = {
                    destinationValues: [],
                    sourceValues: [sourceValueA],
                    type: 'type',
                    value: ''
                };
                const expectedRepresentation: Representation = {
                    destinationValues: [],
                    sourceValues: [sourceValueB],
                    type: 'type',
                    value: ''
                };
                const result = whenToContainRepresentationsIsCalledWith(
                    [actualRepresentation],
                    [expectedRepresentation]);
                expect(result.pass).toBe(false, 'matcher result');
            });
    });

    describe('actual and expected representation message', () => {
        const unmatchedActualDifferencesTitle = 'Unmatched actual representations:';
        const unmatchedExpectedDifferencesTitle = 'Unmatched expected representations:';

        it('should contain a message with formatted representations when matching fails', () => {
            const actualRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('number')];

            const expectedRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('string')];

            const result = whenToContainRepresentationsIsCalledWith(actualRepresentations, expectedRepresentations);
            expect(result.message).toContain(unmatchedActualDifferencesTitle);
            expect(result.message).toContain('"value": "number"');
            expect(result.message).toContain(unmatchedExpectedDifferencesTitle);
            expect(result.message).toContain('"value": "string"');
        });

        it('should include only unmatched actual representations if all expected representations were matched', () => {
            const actualRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('number'),
                createWellKnownRepresentationWithValue('string')];

            const expectedRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('number')];

            const result = whenToContainRepresentationsIsCalledWith(actualRepresentations, expectedRepresentations);
            expect(result.message).toContain(unmatchedActualDifferencesTitle);
            expect(result.message).toContain('string');
            expect(result.message).not.toContain(unmatchedExpectedDifferencesTitle);
            expect(result.message).not.toContain('number');
        });

        it('should include only unmatched expected representations if all actual representations were matched', () => {
            const actualRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('number')];

            const expectedRepresentations: Representation[] = [
                createWellKnownRepresentationWithValue('number'),
                createWellKnownRepresentationWithValue('string')];

            const result = whenToContainRepresentationsIsCalledWith(actualRepresentations, expectedRepresentations);

            expect(result.message).not.toContain(unmatchedActualDifferencesTitle);
            expect(result.message).not.toContain('number');
            expect(result.message).toContain(unmatchedExpectedDifferencesTitle);
            expect(result.message).toContain('string');
        });
    });
});
