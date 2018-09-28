import * as _ from 'lodash';

export const doArraysContainSameElements = <T>(array1: T[], array2: T[]): boolean =>
    array1.length === array2.length && _.differenceWith(array1, array2, _.isEqual).length === 0;
