// tslint:disable:max-classes-per-file

import {
    Representation, SchemaOrigin, Set, toDestinationRepresentationValues,
    toSourceRepresentationValues
} from '../set';

interface NumberSet extends Set<'number'> {
    intersectWithAll(otherAllSet: AllNumberSet): NumberSet;
    intersectWithEmpty(otherEmptySet: EmptyNumberSet): NumberSet;
    unionWithAll(otherAllSet: AllNumberSet): NumberSet;
    unionWithEmpty(otherEmptySet: EmptyNumberSet): NumberSet;
}

export class AllNumberSet implements NumberSet {
    public readonly setType = 'number';
    public readonly type = 'all';

    public constructor(public readonly schemaOrigins: SchemaOrigin[]) {}

    public intersect(otherSet: NumberSet): NumberSet {
        return otherSet.intersectWithAll(this);
    }

    public intersectWithAll(otherAllSet: NumberSet): NumberSet {
        const mergedSchemaOrigins = this.schemaOrigins.concat(otherAllSet.schemaOrigins);
        return new AllNumberSet(mergedSchemaOrigins);
    }

    public intersectWithEmpty(otherEmptySet: NumberSet): NumberSet {
        const mergedSchemaOrigins = this.schemaOrigins.concat(otherEmptySet.schemaOrigins);
        return new EmptyNumberSet(mergedSchemaOrigins);
    }
    public union(otherSet: NumberSet): NumberSet {
        return otherSet.unionWithAll(this);
    }

    public unionWithAll(otherAllSet: NumberSet): NumberSet {
        return this.withAdditionalOrigins(otherAllSet.schemaOrigins);
    }

    public unionWithEmpty(otherEmptySet: NumberSet): NumberSet {
        return this.withAdditionalOrigins(otherEmptySet.schemaOrigins);
    }

    public complement(): NumberSet {
        return new EmptyNumberSet(this.schemaOrigins);
    }

    public toRepresentations(): Representation[] {
        return [{
            destinationValues: toDestinationRepresentationValues(this.schemaOrigins),
            sourceValues: toSourceRepresentationValues(this.schemaOrigins),
            type: 'type',
            value: 'number'
        }];
    }

    private withAdditionalOrigins(origins: SchemaOrigin[]): NumberSet {
        return new AllNumberSet(this.schemaOrigins.concat(origins));
    }
}

export class EmptyNumberSet implements NumberSet {
    public readonly setType = 'number';
    public readonly type = 'empty';

    public constructor(public readonly schemaOrigins: SchemaOrigin[]) {}

    public intersect(otherSet: NumberSet): NumberSet {
        return otherSet.intersectWithEmpty(this);
    }

    public intersectWithAll(otherAllSet: NumberSet): NumberSet {
        return this.withAdditionalOrigins(otherAllSet.schemaOrigins);
    }

    public intersectWithEmpty(otherEmptySet: EmptyNumberSet): NumberSet {
        return otherEmptySet.withAdditionalOrigins(this.schemaOrigins);
    }

    public union(otherSet: NumberSet): NumberSet {
        return otherSet.unionWithEmpty(this);
    }

    public unionWithAll(otherAllSet: AllNumberSet): NumberSet {
        return new AllNumberSet(this.schemaOrigins.concat(otherAllSet.schemaOrigins));
    }

    public unionWithEmpty(otherEmptySet: NumberSet): NumberSet {
        return this.withAdditionalOrigins(otherEmptySet.schemaOrigins);
    }

    public complement(): NumberSet {
        return new AllNumberSet(this.schemaOrigins);
    }

    public toRepresentations(): Representation[] {
        return [];
    }

    private withAdditionalOrigins(origins: SchemaOrigin[]): NumberSet {
        return new EmptyNumberSet(this.schemaOrigins.concat(origins));
    }
}
