// tslint:disable:max-classes-per-file

import {
    Representation, SchemaOrigin, Set, toDestinationRepresentationValues,
    toSourceRepresentationValues
} from '../set';

interface StringSet extends Set<'string'> {
    intersectWithAll(otherAllSet: AllStringSet): StringSet;
    intersectWithEmpty(otherEmptySet: EmptyStringSet): StringSet;
    unionWithAll(otherAllSet: AllStringSet): StringSet;
    unionWithEmpty(otherEmptySet: EmptyStringSet): StringSet;
}

export class AllStringSet implements StringSet {
    public readonly setType = 'string';
    public readonly type = 'all';

    public constructor(public readonly schemaOrigins: SchemaOrigin[]) {}

    public intersect(otherSet: StringSet): StringSet {
        return otherSet.intersectWithAll(this);
    }

    public intersectWithAll(otherAllSet: StringSet): StringSet {
        const mergedSchemaOrigins = this.schemaOrigins.concat(otherAllSet.schemaOrigins);
        return new AllStringSet(mergedSchemaOrigins);
    }

    public intersectWithEmpty(otherEmptySet: StringSet): StringSet {
        const mergedSchemaOrigins = this.schemaOrigins.concat(otherEmptySet.schemaOrigins);
        return new EmptyStringSet(mergedSchemaOrigins);
    }

    public union(otherSet: StringSet): StringSet {
        return otherSet.unionWithAll(this);
    }

    public unionWithAll(otherAllSet: StringSet): StringSet {
        const mergedSchemaOrigins = this.schemaOrigins.concat(otherAllSet.schemaOrigins);
        return new AllStringSet(mergedSchemaOrigins);
    }

    public unionWithEmpty(otherEmptySet: StringSet): StringSet {
        const mergedSchemaOrigins = this.schemaOrigins.concat(otherEmptySet.schemaOrigins);
        return new AllStringSet(mergedSchemaOrigins);
    }

    public complement(): StringSet {
        return new EmptyStringSet(this.schemaOrigins);
    }

    public toRepresentations(): Representation[] {
        return [{
            destinationValues: toDestinationRepresentationValues(this.schemaOrigins),
            sourceValues: toSourceRepresentationValues(this.schemaOrigins),
            type: 'type',
            value: 'string'
        }];
    }
}

export class EmptyStringSet implements StringSet {
    public readonly setType = 'string';
    public readonly type = 'empty';

    public constructor(public readonly schemaOrigins: SchemaOrigin[]) {}

    public intersect(otherSet: StringSet): StringSet {
        return otherSet.intersectWithEmpty(this);
    }

    public intersectWithAll(otherAllSet: StringSet): StringSet {
        const mergedSchemaOrigins = this.schemaOrigins.concat(otherAllSet.schemaOrigins);
        return new EmptyStringSet(mergedSchemaOrigins);
    }

    public intersectWithEmpty(otherEmptySet: StringSet): StringSet {
        const mergedSchemaOrigins = this.schemaOrigins.concat(otherEmptySet.schemaOrigins);
        return new EmptyStringSet(mergedSchemaOrigins);
    }

    public union(otherSet: StringSet): StringSet {
        return otherSet.unionWithEmpty(this);
    }

    public unionWithAll(otherAllSet: StringSet): StringSet {
        const mergedSchemaOrigins = this.schemaOrigins.concat(otherAllSet.schemaOrigins);
        return new AllStringSet(mergedSchemaOrigins);
    }

    public unionWithEmpty(otherEmptySet: StringSet): StringSet {
        const mergedSchemaOrigins = this.schemaOrigins.concat(otherEmptySet.schemaOrigins);
        return new EmptyStringSet(mergedSchemaOrigins);
    }

    public complement(): StringSet {
        return new AllStringSet(this.schemaOrigins);
    }

    public toRepresentations(): Representation[] {
        return [];
    }
}
