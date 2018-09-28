import {AllNullSet, EmptyNullSet} from '../json-set/json-subset/null-set';
import {ParsedSchemaKeywords, Set} from '../json-set/set';
import {isTypeSupported} from './is-type-supported';

export const createNullSet = (parsedSchemaKeywords: ParsedSchemaKeywords): Set<'null'> =>
    isTypeSupported(parsedSchemaKeywords.type, 'null')
        ? new AllNullSet(parsedSchemaKeywords.type.origins)
        : new EmptyNullSet(parsedSchemaKeywords.type.origins);
