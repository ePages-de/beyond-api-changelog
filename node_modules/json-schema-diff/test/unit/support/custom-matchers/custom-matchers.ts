import {DiffResultDifference} from '../../../../lib/api-types';
import {Representation} from '../../../../lib/json-schema-diff/parser/json-set/set';
import {compare as toContainDifferencesCompare} from './diff-custom-matcher';
import {compare as toContainRepresentationsCompare} from './representations-custom-matcher';

export const customMatchers = {
    toContainDifferences: (): jasmine.CustomMatcher => ({
        compare: toContainDifferencesCompare
    }),
    toContainRepresentations: (): jasmine.CustomMatcher => ({
        compare: toContainRepresentationsCompare
    })
};

export interface CustomMatchers<T> extends jasmine.Matchers<T> {
    toContainDifferences(expected: DiffResultDifference[]): boolean;
    toContainRepresentations(expected: Representation[]): boolean;
}
