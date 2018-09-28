import {AllArraySet, EmptyArraySet} from '../json-set/json-subset/array-set';
import {ParsedSchemaKeywords, Set} from '../json-set/set';
import {isTypeSupported} from './is-type-supported';

export const createArraySet = (parsedSchemaKeywords: ParsedSchemaKeywords): Set<'array'> =>
    isTypeSupported(parsedSchemaKeywords.type, 'array')
        ? new AllArraySet(parsedSchemaKeywords.type.origins)
        : new EmptyArraySet(parsedSchemaKeywords.type.origins);
