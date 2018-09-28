"use strict";
// tslint:disable:max-classes-per-file
Object.defineProperty(exports, "__esModule", { value: true });
const create_object_set_1 = require("../set-factories/create-object-set");
const array_set_1 = require("./json-subset/array-set");
const boolean_set_1 = require("./json-subset/boolean-set");
const integer_set_1 = require("./json-subset/integer-set");
const null_set_1 = require("./json-subset/null-set");
const number_set_1 = require("./json-subset/number-set");
const string_set_1 = require("./json-subset/string-set");
const set_1 = require("./set");
class AllJsonSet {
    constructor(schemaOrigins) {
        this.schemaOrigins = schemaOrigins;
        this.setType = 'json';
        this.type = 'all';
    }
    complement() {
        return new EmptyJsonSet(this.schemaOrigins);
    }
    intersect(other) {
        return other.intersectWithAll(this);
    }
    intersectWithAll(other) {
        return new AllJsonSet(this.schemaOrigins.concat(other.schemaOrigins));
    }
    intersectWithEmpty(other) {
        return new EmptyJsonSet(this.schemaOrigins.concat(other.schemaOrigins));
    }
    intersectWithSome(other) {
        return new SomeJsonSet({
            array: other.subsets.array.intersect(new array_set_1.AllArraySet(this.schemaOrigins)),
            boolean: other.subsets.boolean.intersect(new boolean_set_1.AllBooleanSet(this.schemaOrigins)),
            integer: other.subsets.integer.intersect(new integer_set_1.AllIntegerSet(this.schemaOrigins)),
            null: other.subsets.null.intersect(new null_set_1.AllNullSet(this.schemaOrigins)),
            number: other.subsets.number.intersect(new number_set_1.AllNumberSet(this.schemaOrigins)),
            object: other.subsets.object.intersect(create_object_set_1.createAllObjectSet(this)),
            string: other.subsets.string.intersect(new string_set_1.AllStringSet(this.schemaOrigins))
        });
    }
    union(other) {
        return other.unionWithAll(this);
    }
    unionWithSome(other) {
        return new AllJsonSet(this.schemaOrigins.concat(other.schemaOrigins));
    }
    unionWithAll(other) {
        return new AllJsonSet(this.schemaOrigins.concat(other.schemaOrigins));
    }
    unionWithEmpty(other) {
        return new AllJsonSet(this.schemaOrigins.concat(other.schemaOrigins));
    }
    toRepresentations() {
        return set_1.allSchemaTypes
            .map((value) => ({
            destinationValues: set_1.toDestinationRepresentationValues(this.schemaOrigins),
            sourceValues: set_1.toSourceRepresentationValues(this.schemaOrigins),
            type: 'type',
            value
        }));
    }
}
exports.AllJsonSet = AllJsonSet;
class EmptyJsonSet {
    constructor(schemaOrigins) {
        this.schemaOrigins = schemaOrigins;
        this.setType = 'json';
        this.type = 'empty';
    }
    complement() {
        return new AllJsonSet(this.schemaOrigins);
    }
    intersect(other) {
        return other.intersectWithEmpty(this);
    }
    intersectWithEmpty(other) {
        return new EmptyJsonSet(this.schemaOrigins.concat(other.schemaOrigins));
    }
    intersectWithAll(other) {
        return new EmptyJsonSet(this.schemaOrigins.concat(other.schemaOrigins));
    }
    intersectWithSome(other) {
        return new EmptyJsonSet(this.schemaOrigins.concat(other.schemaOrigins));
    }
    union(other) {
        return other.unionWithEmpty(this);
    }
    unionWithEmpty(other) {
        return new EmptyJsonSet(this.schemaOrigins.concat(other.schemaOrigins));
    }
    unionWithSome(other) {
        return other.unionWithEmpty(this);
    }
    unionWithAll(other) {
        return new AllJsonSet(this.schemaOrigins.concat(other.schemaOrigins));
    }
    toRepresentations() {
        return [];
    }
}
exports.EmptyJsonSet = EmptyJsonSet;
class SomeJsonSet {
    constructor(subsets) {
        this.subsets = subsets;
        this.setType = 'json';
        this.type = 'some';
    }
    get schemaOrigins() {
        return Object.keys(this.subsets).reduce((allOrigins, subsetName) => allOrigins.concat(this.subsets[subsetName].schemaOrigins), []);
    }
    complement() {
        return new SomeJsonSet({
            array: this.subsets.array.complement(),
            boolean: this.subsets.boolean.complement(),
            integer: this.subsets.integer.complement(),
            null: this.subsets.null.complement(),
            number: this.subsets.number.complement(),
            object: this.subsets.object.complement(),
            string: this.subsets.string.complement()
        });
    }
    intersect(other) {
        return other.intersectWithSome(this);
    }
    intersectWithAll(other) {
        return new SomeJsonSet({
            array: this.subsets.array.intersect(new array_set_1.AllArraySet(other.schemaOrigins)),
            boolean: this.subsets.boolean.intersect(new boolean_set_1.AllBooleanSet(other.schemaOrigins)),
            integer: this.subsets.integer.intersect(new integer_set_1.AllIntegerSet(other.schemaOrigins)),
            null: this.subsets.null.intersect(new null_set_1.AllNullSet(other.schemaOrigins)),
            number: this.subsets.number.intersect(new number_set_1.AllNumberSet(other.schemaOrigins)),
            object: this.subsets.object.intersect(create_object_set_1.createAllObjectSet(other)),
            string: this.subsets.string.intersect(new string_set_1.AllStringSet(other.schemaOrigins))
        });
    }
    intersectWithEmpty(other) {
        return new EmptyJsonSet(this.schemaOrigins.concat(other.schemaOrigins));
    }
    intersectWithSome(other) {
        return new SomeJsonSet({
            array: this.subsets.array.intersect(other.subsets.array),
            boolean: this.subsets.boolean.intersect(other.subsets.boolean),
            integer: this.subsets.integer.intersect(other.subsets.integer),
            null: this.subsets.null.intersect(other.subsets.null),
            number: this.subsets.number.intersect(other.subsets.number),
            object: this.subsets.object.intersect(other.subsets.object),
            string: this.subsets.string.intersect(other.subsets.string)
        });
    }
    union(other) {
        return other.unionWithSome(this);
    }
    unionWithEmpty(other) {
        return new SomeJsonSet({
            array: this.subsets.array.union(new array_set_1.EmptyArraySet(other.schemaOrigins)),
            boolean: this.subsets.boolean.union(new boolean_set_1.EmptyBooleanSet(other.schemaOrigins)),
            integer: this.subsets.integer.union(new integer_set_1.EmptyIntegerSet(other.schemaOrigins)),
            null: this.subsets.null.union(new null_set_1.EmptyNullSet(other.schemaOrigins)),
            number: this.subsets.number.union(new number_set_1.EmptyNumberSet(other.schemaOrigins)),
            object: this.subsets.object.union(create_object_set_1.createEmptyObjectSet(this)),
            string: this.subsets.string.union(new string_set_1.EmptyStringSet(other.schemaOrigins))
        });
    }
    unionWithSome(other) {
        return new SomeJsonSet({
            array: this.subsets.array.union(other.subsets.array),
            boolean: this.subsets.boolean.union(other.subsets.boolean),
            integer: this.subsets.integer.union(other.subsets.integer),
            null: this.subsets.null.union(other.subsets.null),
            number: this.subsets.number.union(other.subsets.number),
            object: this.subsets.object.union(other.subsets.object),
            string: this.subsets.string.union(other.subsets.string)
        });
    }
    unionWithAll(other) {
        return new AllJsonSet(this.schemaOrigins.concat(other.schemaOrigins));
    }
    toRepresentations() {
        return Object.keys(this.subsets).reduce((allRepresentations, subsetName) => allRepresentations.concat(this.subsets[subsetName].toRepresentations()), []);
    }
}
exports.SomeJsonSet = SomeJsonSet;
