import {AllIntegerSet, EmptyIntegerSet} from '../json-set/json-subset/integer-set';
import {ParsedSchemaKeywords, Set} from '../json-set/set';
import {isTypeSupported} from './is-type-supported';

export const createIntegerSet = (parsedSchemaKeywords: ParsedSchemaKeywords): Set<'integer'> =>
    isTypeSupported(parsedSchemaKeywords.type, 'integer')
        ? new AllIntegerSet(parsedSchemaKeywords.type.origins)
        : new EmptyIntegerSet(parsedSchemaKeywords.type.origins);
