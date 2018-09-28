import {AllNumberSet, EmptyNumberSet} from '../json-set/json-subset/number-set';
import {ParsedSchemaKeywords, Set} from '../json-set/set';
import {isTypeSupported} from './is-type-supported';

export const createNumberSet = (parsedSchemaKeywords: ParsedSchemaKeywords): Set<'number'> =>
    isTypeSupported(parsedSchemaKeywords.type, 'number')
        ? new AllNumberSet(parsedSchemaKeywords.type.origins)
        : new EmptyNumberSet(parsedSchemaKeywords.type.origins);
