// tslint:disable:max-classes-per-file

import {
    Representation, SchemaOrigin, Set, toDestinationRepresentationValues,
    toSourceRepresentationValues
} from '../set';

interface NullSet extends Set<'null'> {
    intersectWithAll(otherAllSet: AllNullSet): NullSet;
    intersectWithEmpty(otherEmptySet: EmptyNullSet): NullSet;
    unionWithAll(otherAllSet: AllNullSet): NullSet;
    unionWithEmpty(otherEmptySet: EmptyNullSet): NullSet;
}

export class AllNullSet implements NullSet {
    public readonly setType = 'null';
    public readonly type = 'all';

    public constructor(public readonly schemaOrigins: SchemaOrigin[]) {}

    public intersect(otherSet: NullSet): NullSet {
        return otherSet.intersectWithAll(this);
    }

    public intersectWithAll(otherAllSet: NullSet): NullSet {
        return this.withAdditionalOrigins(otherAllSet.schemaOrigins);
    }

    public intersectWithEmpty(otherEmptySet: EmptyNullSet): NullSet {
        return new EmptyNullSet(this.schemaOrigins.concat(otherEmptySet.schemaOrigins));
    }

    public union(otherSet: NullSet): NullSet {
        return otherSet.unionWithAll(this);
    }

    public unionWithAll(otherAllSet: NullSet): NullSet {
        return this.withAdditionalOrigins(otherAllSet.schemaOrigins);
    }

    public unionWithEmpty(otherEmptySet: NullSet): NullSet {
        return this.withAdditionalOrigins(otherEmptySet.schemaOrigins);
    }

    public complement(): NullSet {
        return new EmptyNullSet(this.schemaOrigins);
    }

    public toRepresentations(): Representation[] {
        return [{
            destinationValues: toDestinationRepresentationValues(this.schemaOrigins),
            sourceValues: toSourceRepresentationValues(this.schemaOrigins),
            type: 'type',
            value: 'null'
        }];
    }

    private withAdditionalOrigins(origins: SchemaOrigin[]): NullSet {
        return new AllNullSet(this.schemaOrigins.concat(origins));
    }
}

export class EmptyNullSet implements NullSet {
    public readonly setType = 'null';
    public readonly type = 'empty';

    public constructor(public readonly schemaOrigins: SchemaOrigin[]) {}

    public intersect(otherSet: NullSet): NullSet {
        return otherSet.intersectWithEmpty(this);
    }

    public intersectWithAll(otherAllSet: NullSet): NullSet {
        return this.withAdditionalOrigins(otherAllSet.schemaOrigins);
    }

    public intersectWithEmpty(otherEmptySet: EmptyNullSet): NullSet {
        return otherEmptySet.withAdditionalOrigins(this.schemaOrigins);
    }

    public union(otherSet: NullSet): NullSet {
        return otherSet.unionWithEmpty(this);
    }

    public unionWithAll(otherAllSet: AllNullSet): NullSet {
        return new AllNullSet(this.schemaOrigins.concat(otherAllSet.schemaOrigins));
    }

    public unionWithEmpty(otherEmptySet: NullSet): NullSet {
        return this.withAdditionalOrigins(otherEmptySet.schemaOrigins);
    }

    public complement(): NullSet {
        return new AllNullSet(this.schemaOrigins);
    }

    public toRepresentations(): Representation[] {
        return [];
    }

    private withAdditionalOrigins(origins: SchemaOrigin[]): NullSet {
        return new EmptyNullSet(this.schemaOrigins.concat(origins));
    }
}
