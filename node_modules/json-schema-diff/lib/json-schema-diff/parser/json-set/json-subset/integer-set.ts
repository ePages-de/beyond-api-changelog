// tslint:disable:max-classes-per-file

import {
    Representation, SchemaOrigin, Set, toDestinationRepresentationValues,
    toSourceRepresentationValues
} from '../set';

interface IntegerSet extends  Set<'integer'> {
    readonly schemaOrigins: SchemaOrigin[];
    intersectWithAll(otherAllSet: AllIntegerSet): IntegerSet;
    intersectWithEmpty(otherEmptySet: EmptyIntegerSet): IntegerSet;
    unionWithAll(otherAllSet: AllIntegerSet): IntegerSet;
    unionWithEmpty(otherEmptySet: EmptyIntegerSet): IntegerSet;
}

export class AllIntegerSet implements IntegerSet {
    public readonly setType = 'integer';
    public readonly type = 'all';

    public constructor(public readonly schemaOrigins: SchemaOrigin[]) {}

    public intersect(otherSet: IntegerSet): IntegerSet {
        return otherSet.intersectWithAll(this);
    }

    public intersectWithAll(otherAllSet: IntegerSet): IntegerSet {
        return this.withAdditionalOrigins(otherAllSet.schemaOrigins);
    }

    public intersectWithEmpty(otherEmptySet: EmptyIntegerSet): IntegerSet {
        return new EmptyIntegerSet(this.schemaOrigins.concat(otherEmptySet.schemaOrigins));
    }

    public union(otherSet: IntegerSet): IntegerSet {
        return otherSet.unionWithAll(this);
    }

    public unionWithAll(otherAllSet: IntegerSet): IntegerSet {
        return this.withAdditionalOrigins(otherAllSet.schemaOrigins);
    }

    public unionWithEmpty(otherEmptySet: IntegerSet): IntegerSet {
        return this.withAdditionalOrigins(otherEmptySet.schemaOrigins);
    }

    public complement(): IntegerSet {
        return new EmptyIntegerSet(this.schemaOrigins);
    }

    public toRepresentations(): Representation[] {
        return [{
            destinationValues: toDestinationRepresentationValues(this.schemaOrigins),
            sourceValues: toSourceRepresentationValues(this.schemaOrigins),
            type: 'type',
            value: 'integer'
        }];
    }

    private withAdditionalOrigins(origins: SchemaOrigin[]): IntegerSet {
        return new AllIntegerSet(this.schemaOrigins.concat(origins));
    }
}

export class EmptyIntegerSet implements IntegerSet {
    public readonly setType = 'integer';
    public readonly type = 'empty';

    public constructor(public readonly schemaOrigins: SchemaOrigin[]) {}

    public intersect(otherSet: IntegerSet): IntegerSet {
        return otherSet.intersectWithEmpty(this);
    }

    public intersectWithAll(otherAllSet: IntegerSet): IntegerSet {
        return this.withAdditionalOrigins(otherAllSet.schemaOrigins);
    }

    public intersectWithEmpty(otherEmptySet: IntegerSet): IntegerSet {
        return this.withAdditionalOrigins(otherEmptySet.schemaOrigins);
    }

    public union(otherSet: IntegerSet): IntegerSet {
        return otherSet.unionWithEmpty(this);
    }

    public unionWithAll(otherAllSet: AllIntegerSet): IntegerSet {
        return new AllIntegerSet(this.schemaOrigins.concat(otherAllSet.schemaOrigins));
    }

    public unionWithEmpty(otherEmptySet: IntegerSet): IntegerSet {
        return this.withAdditionalOrigins(otherEmptySet.schemaOrigins);
    }

    public complement(): IntegerSet {
        return new AllIntegerSet(this.schemaOrigins);
    }

    public toRepresentations(): Representation[] {
        return [];
    }

    private withAdditionalOrigins(origins: SchemaOrigin[]): IntegerSet {
        return new EmptyIntegerSet(this.schemaOrigins.concat(origins));
    }
}
