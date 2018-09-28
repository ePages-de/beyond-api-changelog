import * as _ from 'lodash';
import {DiffResult, DiffResultDifference, DiffResultDifferenceType} from '../../../../lib/api-types';
import {doArraysContainSameElements} from './do-arrays-contain-same-elements';
import {objectWithoutProperties} from './object-without-properties';

const areDifferencesEqual = (diff1: DiffResultDifference, diff2: DiffResultDifference): boolean => {
    const areSourceValuesEqual = doArraysContainSameElements(diff1.sourceValues, diff2.sourceValues);
    const areDestinationValuesEqual = doArraysContainSameElements(diff1.destinationValues, diff2.destinationValues);
    const areRestOfThePropertiesEqual = _.isEqual(
        objectWithoutProperties(diff1, ['sourceValues', 'destinationValues']),
        objectWithoutProperties(diff2, ['sourceValues', 'destinationValues'])
    );

    return areSourceValuesEqual && areRestOfThePropertiesEqual && areDestinationValuesEqual;
};

const reportUnmatchedDifferences = (differences: DiffResultDifference[], description: string): string => {
    const differencesAsJson = differences.map((difference) => JSON.stringify(difference, null, 4));
    return differencesAsJson.length > 0
        ? `${description}\n${differencesAsJson.join('\n')}\n\n`
        : '';
};

const expectedTypeValue = (expectedDifferences: DiffResultDifference[], type: DiffResultDifferenceType): boolean => {
    return expectedDifferences.some((difference) => {
        return difference.type === type;
    });
};

const generateCompareDifferencesReport = (unmatchedActualDifferences: DiffResultDifference[],
                                          unmatchedExpectedDifferences: DiffResultDifference[]): string => {
    const unmatchedActualMessage = reportUnmatchedDifferences(
        unmatchedActualDifferences, 'Unmatched actual differences:');
    const unmatchedExpectedMessage = reportUnmatchedDifferences(
        unmatchedExpectedDifferences, 'Unmatched expected differences:');

    return unmatchedActualMessage + unmatchedExpectedMessage;
};

const compareDifferences = (actualDiffResult: DiffResult,
                            expectedDifferences: DiffResultDifference[]): jasmine.CustomMatcherResult => {
    const unmatchedActualDifferences = _.differenceWith(
        actualDiffResult.differences, expectedDifferences, areDifferencesEqual);
    const unmatchedExpectedDifferences = _.differenceWith(
        expectedDifferences, actualDiffResult.differences, areDifferencesEqual);

    const numberOfUnmatchedDifferences =
        unmatchedActualDifferences.length + unmatchedExpectedDifferences.length;
    const pass = numberOfUnmatchedDifferences === 0;

    return {
        message: generateCompareDifferencesReport(unmatchedActualDifferences, unmatchedExpectedDifferences),
        pass
    };
};

const compareType = (actualTypeValue: boolean,
                     expectedDifferences: DiffResultDifference[],
                     type: DiffResultDifferenceType): jasmine.CustomMatcherResult => {

    const expectedValue = expectedTypeValue(expectedDifferences, type);
    const pass = expectedValue === actualTypeValue;

    const propertyNames = {
        'add.type': 'addedByDestinationSchema',
        'remove.type': 'removedByDestinationSchema'
    };
    const unmatchedTypeMessage: string = !pass
        ? `Expected ${propertyNames[type]} to be ` +
        `${expectedValue} but it was ${actualTypeValue}`
        : '';

    return {
        message: unmatchedTypeMessage,
        pass
    };
};

export const compare = (actualDiffResult: DiffResult,
                        expectedDifferences: DiffResultDifference[]): jasmine.CustomMatcherResult => {

    const differencesCheck = compareDifferences(actualDiffResult, expectedDifferences);
    const addedByDestinationCheck = compareType(
        actualDiffResult.addedByDestinationSchema, expectedDifferences, 'add.type'
    );
    const removedByDestinationCheck = compareType(
        actualDiffResult.removedByDestinationSchema, expectedDifferences, 'remove.type'
    );

    const pass = differencesCheck.pass && addedByDestinationCheck.pass && removedByDestinationCheck.pass;
    const message = [
        differencesCheck.message, addedByDestinationCheck.message, removedByDestinationCheck.message
    ].join('\n');

    return {
        message, pass
    };
};
