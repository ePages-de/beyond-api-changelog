import {SomeJsonSet} from '../../../../../lib/json-schema-diff/parser/json-set/json-set';
import {Set} from '../../../../../lib/json-schema-diff/parser/json-set/set';
import {parsedTypeKeywordBuilder} from '../parsed-schema-keywords/parsed-type-keyword-builder';
import {schemaOriginBuilder} from '../parsed-schema-keywords/schema-origin-builder';
import {ArraySetBuilder, emptyArraySetBuilder} from './array-set-builder';
import {BooleanSetBuilder, emptyBooleanSetBuilder} from './boolean-set-builder';
import {emptyIntegerSetBuilder, IntegerSetBuilder} from './integer-set-builder';
import {emptyNullSetBuilder, NullSetBuilder} from './null-set-builder';
import {emptyNumberSetBuilder, NumberSetBuilder} from './number-set-builder';
import {emptyObjectSetBuilder, ObjectSetBuilder} from './object-set-builder';
import {
    allStringSetBuilder,
    emptyStringSetBuilder,
    StringSetBuilder
} from './string-set-builder';

interface Subsets {
    array: ArraySetBuilder;
    boolean: BooleanSetBuilder;
    null: NullSetBuilder;
    integer: IntegerSetBuilder;
    number: NumberSetBuilder;
    object: ObjectSetBuilder;
    string: StringSetBuilder;
}

export class SomeJsonSetBuilder {
    public static defaultSomeJsonSetBuilder(): SomeJsonSetBuilder {
        return new SomeJsonSetBuilder({
            array: emptyArraySetBuilder,
            boolean: emptyBooleanSetBuilder,
            integer: emptyIntegerSetBuilder,
            null: emptyNullSetBuilder,
            number: emptyNumberSetBuilder,
            object: emptyObjectSetBuilder,
            string: emptyStringSetBuilder
        });
    }

    private constructor(private readonly subsets: Subsets) {}

    public withArraySet(arraySet: ArraySetBuilder): SomeJsonSetBuilder {
        return new SomeJsonSetBuilder({
            array: arraySet,
            boolean: this.subsets.boolean,
            integer: this.subsets.integer,
            null: this.subsets.null,
            number: this.subsets.number,
            object: this.subsets.object,
            string: this.subsets.string
        });
    }

    public withBooleanSet(booleanSet: BooleanSetBuilder): SomeJsonSetBuilder {
        return new SomeJsonSetBuilder({
            array: this.subsets.array,
            boolean: booleanSet,
            integer: this.subsets.integer,
            null: this.subsets.null,
            number: this.subsets.number,
            object: this.subsets.object,
            string: this.subsets.string
        });
    }

    public withIntegerSet(integerSet: IntegerSetBuilder): SomeJsonSetBuilder {
        return new SomeJsonSetBuilder({
            array: this.subsets.array,
            boolean: this.subsets.boolean,
            integer: integerSet,
            null: this.subsets.null,
            number: this.subsets.number,
            object: this.subsets.object,
            string: this.subsets.string
        });
    }

    public withNullSet(nullSet: NullSetBuilder): SomeJsonSetBuilder {
        return new SomeJsonSetBuilder({
            array: this.subsets.array,
            boolean: this.subsets.boolean,
            integer: this.subsets.integer,
            null: nullSet,
            number: this.subsets.number,
            object: this.subsets.object,
            string: this.subsets.string
        });
    }

    public withNumberSet(numberSet: NumberSetBuilder): SomeJsonSetBuilder {
        return new SomeJsonSetBuilder({
            array: this.subsets.array,
            boolean: this.subsets.boolean,
            integer: this.subsets.integer,
            null: this.subsets.null,
            number: numberSet,
            object: this.subsets.object,
            string: this.subsets.string
        });
    }

    public withObjectSet(objectSet: ObjectSetBuilder): SomeJsonSetBuilder {
        return new SomeJsonSetBuilder({
            array: this.subsets.array,
            boolean: this.subsets.boolean,
            integer: this.subsets.integer,
            null: this.subsets.null,
            number: this.subsets.number,
            object: objectSet,
            string: this.subsets.string
        });
    }

    public withStringSet(stringSet: StringSetBuilder): SomeJsonSetBuilder {
        return new SomeJsonSetBuilder({
            array: this.subsets.array,
            boolean: this.subsets.boolean,
            integer: this.subsets.integer,
            null: this.subsets.null,
            number: this.subsets.number,
            object: this.subsets.object,
            string: stringSet
        });
    }

    public build(): Set<'json'> {
        return new SomeJsonSet({
            array: this.subsets.array.build(),
            boolean: this.subsets.boolean.build(),
            integer: this.subsets.integer.build(),
            null: this.subsets.null.build(),
            number: this.subsets.number.build(),
            object: this.subsets.object.build(),
            string: this.subsets.string.build()
        });
    }
}

export const someJsonSetBuilder = SomeJsonSetBuilder.defaultSomeJsonSetBuilder();

export const someJsonSetOfStrings = someJsonSetBuilder
    .withStringSet(allStringSetBuilder.withType(parsedTypeKeywordBuilder.withOrigins([
        schemaOriginBuilder.withType('destination').withPath(['.type']).withValue('string')
    ])));
