// tslint:disable:max-classes-per-file
import {
    Representation, SchemaOrigin, Set, toDestinationRepresentationValues,
    toSourceRepresentationValues
} from '../set';

interface ArraySet extends Set<'array'> {
    intersectWithAll(otherAllSet: AllArraySet): ArraySet;
    intersectWithEmpty(otherEmptySet: EmptyArraySet): ArraySet;
    unionWithAll(otherAllSet: AllArraySet): ArraySet;
    unionWithEmpty(otherEmptySet: EmptyArraySet): ArraySet;
}

export class AllArraySet implements ArraySet {
    public readonly setType = 'array';
    public readonly type = 'all';

    public constructor(public readonly schemaOrigins: SchemaOrigin[]) {
    }

    public intersect(otherSet: ArraySet): ArraySet {
        return otherSet.intersectWithAll(this);
    }

    public intersectWithAll(otherAllSet: ArraySet): ArraySet {
        return this.withAdditionalOrigins(otherAllSet.schemaOrigins);
    }

    public intersectWithEmpty(otherEmptySet: EmptyArraySet): ArraySet {
        return new EmptyArraySet(this.schemaOrigins.concat(otherEmptySet.schemaOrigins));
    }

    public union(otherSet: ArraySet): ArraySet {
        return otherSet.unionWithAll(this);
    }

    public unionWithAll(otherAllArraySet: AllArraySet): ArraySet {
        return this.withAdditionalOrigins(otherAllArraySet.schemaOrigins);
    }

    public unionWithEmpty(otherEmptySet: EmptyArraySet): ArraySet {
        return this.withAdditionalOrigins(otherEmptySet.schemaOrigins);
    }

    public complement(): ArraySet {
        return new EmptyArraySet(this.schemaOrigins);
    }

    public toRepresentations(): Representation[] {
        return [{
            destinationValues: toDestinationRepresentationValues(this.schemaOrigins),
            sourceValues: toSourceRepresentationValues(this.schemaOrigins),
            type: 'type',
            value: 'array'
        }];
    }

    private withAdditionalOrigins(origins: SchemaOrigin[]): ArraySet {
        return new AllArraySet(this.schemaOrigins.concat(origins));
    }
}

export class EmptyArraySet implements ArraySet {
    public readonly setType = 'array';
    public readonly type = 'empty';

    public constructor(public readonly schemaOrigins: SchemaOrigin[]) {
    }

    public intersect(otherSet: ArraySet): ArraySet {
        return otherSet.intersectWithEmpty(this);
    }

    public intersectWithAll(otherAllSet: ArraySet): ArraySet {
        return this.withAdditionalOrigins(otherAllSet.schemaOrigins);
    }

    public intersectWithEmpty(otherEmptySet: EmptyArraySet): ArraySet {
        return otherEmptySet.withAdditionalOrigins(this.schemaOrigins);
    }

    public union(otherSet: ArraySet): ArraySet {
        return otherSet.unionWithEmpty(this);
    }

    public unionWithAll(otherAllArraySet: AllArraySet): ArraySet {
        return new AllArraySet(this.schemaOrigins.concat(otherAllArraySet.schemaOrigins));
    }

    public unionWithEmpty(otherEmptySet: ArraySet): ArraySet {
        return this.withAdditionalOrigins(otherEmptySet.schemaOrigins);
    }

    public complement(): ArraySet {
        return new AllArraySet(this.schemaOrigins);
    }

    public toRepresentations(): Representation[] {
        return [];
    }

    private withAdditionalOrigins(origins: SchemaOrigin[]): ArraySet {
        return new EmptyArraySet(this.schemaOrigins.concat(origins));
    }
}
