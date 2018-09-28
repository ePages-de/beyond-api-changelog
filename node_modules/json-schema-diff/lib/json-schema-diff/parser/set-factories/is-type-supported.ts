import {SimpleTypes} from '../json-set/json-schema';
import {ParsedTypeKeyword} from '../json-set/set';

export const isTypeSupported = (parsedTypeKeyword: ParsedTypeKeyword, type: SimpleTypes): boolean =>
    parsedTypeKeyword.parsedValue.indexOf(type) >= 0;
