// tslint:disable:max-classes-per-file

import {
    Representation, SchemaOrigin, Set, toDestinationRepresentationValues,
    toSourceRepresentationValues
} from '../set';

interface BooleanSet extends Set<'boolean'> {
    intersectWithAll(otherAllSet: AllBooleanSet): BooleanSet;
    intersectWithEmpty(otherEmptySet: EmptyBooleanSet): BooleanSet;
    unionWithAll(otherAllSet: AllBooleanSet): BooleanSet;
    unionWithEmpty(otherEmptySet: EmptyBooleanSet): BooleanSet;
}

export class AllBooleanSet implements BooleanSet {
    public readonly setType = 'boolean';
    public readonly type = 'all';

    public constructor(public readonly schemaOrigins: SchemaOrigin[]) {}

    public intersect(otherSet: BooleanSet): BooleanSet {
        return otherSet.intersectWithAll(this);
    }

    public intersectWithAll(otherAllSet: AllBooleanSet): BooleanSet {
        return this.withAdditionalOrigins(otherAllSet.schemaOrigins);
    }

    public intersectWithEmpty(otherEmptySet: EmptyBooleanSet): BooleanSet {
        return new EmptyBooleanSet(this.schemaOrigins.concat(otherEmptySet.schemaOrigins));
    }

    public union(otherSet: BooleanSet): BooleanSet {
        return otherSet.unionWithAll(this);
    }

    public unionWithAll(otherAllSet: AllBooleanSet): BooleanSet {
        return this.withAdditionalOrigins(otherAllSet.schemaOrigins);
    }

    public unionWithEmpty(otherEmptySet: BooleanSet): BooleanSet {
        return this.withAdditionalOrigins(otherEmptySet.schemaOrigins);
    }

    public complement(): BooleanSet {
        return new EmptyBooleanSet(this.schemaOrigins);
    }

    public toRepresentations(): Representation[] {
        return [{
            destinationValues: toDestinationRepresentationValues(this.schemaOrigins),
            sourceValues: toSourceRepresentationValues(this.schemaOrigins),
            type: 'type',
            value: 'boolean'
        }];
    }

    private withAdditionalOrigins(origins: SchemaOrigin[]): BooleanSet {
        return new AllBooleanSet(this.schemaOrigins.concat(origins));
    }
}

export class EmptyBooleanSet implements BooleanSet {
    public readonly setType = 'boolean';
    public readonly type = 'empty';

    public constructor(public readonly schemaOrigins: SchemaOrigin[]) {}

    public intersect(otherSet: BooleanSet): BooleanSet {
        return otherSet.intersectWithEmpty(this);
    }

    public intersectWithAll(otherAllSet: BooleanSet): BooleanSet {
        return this.withAdditionalOrigins(otherAllSet.schemaOrigins);
    }

    public intersectWithEmpty(otherEmptySet: BooleanSet): BooleanSet {
        return this.withAdditionalOrigins(otherEmptySet.schemaOrigins);
    }

    public union(otherSet: BooleanSet): BooleanSet {
        return otherSet.unionWithEmpty(this);
    }

    public unionWithAll(otherAllSet: AllBooleanSet): BooleanSet {
        return new AllBooleanSet(this.schemaOrigins.concat(otherAllSet.schemaOrigins));
    }

    public unionWithEmpty(otherEmptySet: BooleanSet): BooleanSet {
        return this.withAdditionalOrigins(otherEmptySet.schemaOrigins);
    }

    public complement(): BooleanSet {
        return new AllBooleanSet(this.schemaOrigins);
    }

    public toRepresentations(): Representation[] {
        return [];
    }

    private withAdditionalOrigins(origins: SchemaOrigin[]): BooleanSet {
        return new EmptyBooleanSet(this.schemaOrigins.concat(origins));
    }
}
