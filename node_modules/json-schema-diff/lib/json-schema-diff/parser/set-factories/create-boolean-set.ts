import {AllBooleanSet, EmptyBooleanSet} from '../json-set/json-subset/boolean-set';
import {ParsedSchemaKeywords, Set} from '../json-set/set';
import {isTypeSupported} from './is-type-supported';

export const createBooleanSet = (parsedSchemaKeywords: ParsedSchemaKeywords): Set<'boolean'> =>
    isTypeSupported(parsedSchemaKeywords.type, 'boolean')
        ? new AllBooleanSet(parsedSchemaKeywords.type.origins)
        : new EmptyBooleanSet(parsedSchemaKeywords.type.origins);
