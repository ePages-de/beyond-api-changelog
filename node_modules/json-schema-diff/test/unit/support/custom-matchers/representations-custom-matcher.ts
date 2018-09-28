import * as _ from 'lodash';
import {Representation} from '../../../../lib/json-schema-diff/parser/json-set/set';
import {doArraysContainSameElements} from './do-arrays-contain-same-elements';
import {objectWithoutProperties} from './object-without-properties';

const reportUnmatchedRepresentations = (representations: Representation[], description: string): string => {
    const representationsAsJson = representations.map((representation) => JSON.stringify(representation, null, 4));
    return representationsAsJson.length > 0
        ? `${description}\n${representationsAsJson.join('\n')}\n\n`
        : '';
};

const areRepresentationsEqual = (representation1: Representation, representation2: Representation): boolean => {
    const areSourceValuesEqual = doArraysContainSameElements(
        representation1.sourceValues, representation2.sourceValues
    );
    const areDestinationValuesEqual = doArraysContainSameElements(
        representation1.destinationValues, representation2.destinationValues
    );
    const areRestOfThePropertiesEqual = _.isEqual(
        objectWithoutProperties(representation1, ['sourceValues', 'destinationValues']),
        objectWithoutProperties(representation2, ['sourceValues', 'destinationValues'])
    );

    return areSourceValuesEqual && areDestinationValuesEqual && areRestOfThePropertiesEqual;
};

const generateCompareRepresentationsReport = (unmatchedActualRepresentations: Representation[],
                                              unmatchedExpectedRepresentations: Representation[]): string => {
    const unmatchedActualMessage = reportUnmatchedRepresentations(
        unmatchedActualRepresentations, 'Unmatched actual representations:');
    const unmatchedExpectedMessage = reportUnmatchedRepresentations(
        unmatchedExpectedRepresentations, 'Unmatched expected representations:');

    return unmatchedActualMessage + unmatchedExpectedMessage;
};
const compareRepresentations = (actualRepresentations: Representation[],
                                expectedRepresentations: Representation[]): jasmine.CustomMatcherResult => {

    const unmatchedActualRepresentations = _.differenceWith(
        actualRepresentations, expectedRepresentations, areRepresentationsEqual);

    const unmatchedExpectedRepresentations = _.differenceWith(
        expectedRepresentations, actualRepresentations, areRepresentationsEqual);

    const numberOfUnmatchedRepresentations =
        unmatchedActualRepresentations.length + unmatchedExpectedRepresentations.length;
    const pass = numberOfUnmatchedRepresentations === 0;

    return {
        message: generateCompareRepresentationsReport(unmatchedActualRepresentations, unmatchedExpectedRepresentations),
        pass
    };
};

export const compare = (actualRepresentations: Representation[],
                        expectedRepresentations: Representation[]): jasmine.CustomMatcherResult => {
    return compareRepresentations(actualRepresentations, expectedRepresentations);
};
