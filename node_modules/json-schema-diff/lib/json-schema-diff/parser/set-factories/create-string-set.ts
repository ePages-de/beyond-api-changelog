import {AllStringSet, EmptyStringSet} from '../json-set/json-subset/string-set';
import {ParsedSchemaKeywords, Set} from '../json-set/set';
import {isTypeSupported} from './is-type-supported';

export const createStringSet = (parsedSchemaKeywords: ParsedSchemaKeywords): Set<'string'> =>
    isTypeSupported(parsedSchemaKeywords.type, 'string')
        ? new AllStringSet(parsedSchemaKeywords.type.origins)
        : new EmptyStringSet(parsedSchemaKeywords.type.origins);
