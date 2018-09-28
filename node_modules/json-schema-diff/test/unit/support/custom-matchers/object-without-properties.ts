import * as _ from 'lodash';

export const objectWithoutProperties = <T>(object: T,
                                           properties: Array<keyof T>): Partial<T> => {
    return _.omit(object, properties);
};
