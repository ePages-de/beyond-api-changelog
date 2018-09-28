// tslint:disable:max-classes-per-file

import _ = require('lodash');
import {
    ParsedPropertiesKeyword, Representation, SchemaOrigin, Set,
    toDestinationRepresentationValues, toSourceRepresentationValues
} from '../set';

export interface ObjectSet extends Set<'object'> {
    additionalProperties: Set<'json'>;
    properties: ParsedPropertiesKeyword;
    intersectWithAll(otherAllSet: AllObjectSet): ObjectSet;
    intersectWithEmpty(otherEmptySet: EmptyObjectSet): ObjectSet;
    intersectWithSome(otherSomeSet: SomeObjectSet): ObjectSet;
    unionWithAll(otherAllSet: AllObjectSet): ObjectSet;
    unionWithEmpty(otherEmptySet: EmptyObjectSet): ObjectSet;
    unionWithSome(otherSomeSet: SomeObjectSet): ObjectSet;
    getProperty(propertyName: string): Set<'json'>;
    getPropertyNames(): string[];
}

const getUniquePropertyNames = (thisPropertyNames: string[], otherPropertyNames: string[]): string[] =>
    _.uniq(thisPropertyNames.concat(otherPropertyNames));

export class AllObjectSet implements ObjectSet {
    public readonly setType = 'object';
    public readonly type = 'all';

    public constructor(
        public readonly schemaOrigins: SchemaOrigin[],
        public readonly properties: ParsedPropertiesKeyword,
        public additionalProperties: Set<'json'>
    ) {}

    public intersect(otherSet: ObjectSet): ObjectSet {
        return otherSet.intersectWithAll(this);
    }

    public intersectWithSome(otherSomeObjectSet: SomeObjectSet): ObjectSet {
        return intersectAllAndSome(this, otherSomeObjectSet);
    }

    public intersectWithAll(otherAllSet: AllObjectSet): ObjectSet {
        return new AllObjectSet(
            this.schemaOrigins.concat(otherAllSet.schemaOrigins),
            intersectProperties(this, otherAllSet),
            this.additionalProperties.intersect(otherAllSet.additionalProperties)
        );
    }

    public intersectWithEmpty(otherEmptySet: EmptyObjectSet): ObjectSet {
        return intersectEmptyWithOtherObjectSet(otherEmptySet, this);
    }

    public union(otherSet: ObjectSet): ObjectSet {
        return otherSet.unionWithAll(this);
    }

    public unionWithAll(otherAllSet: AllObjectSet): ObjectSet {
        return unionAllWithOtherObjectSet(otherAllSet, this);
    }

    public unionWithEmpty(otherEmptySet: EmptyObjectSet): ObjectSet {
        return new AllObjectSet(
            this.schemaOrigins.concat(otherEmptySet.schemaOrigins),
            unionProperties(this, otherEmptySet),
            this.additionalProperties.union(otherEmptySet.additionalProperties)
        );
    }

    public unionWithSome(otherSomeSet: SomeObjectSet): ObjectSet {
        return unionAllWithOtherObjectSet(this, otherSomeSet);
    }

    public complement(): ObjectSet {
        return new EmptyObjectSet(
            this.schemaOrigins,
            complementProperties(this),
            this.additionalProperties.complement()
        );
    }

    public toRepresentations(): Representation[] {
        return [{
            destinationValues: toDestinationRepresentationValues(
                this.schemaOrigins
            ),
            sourceValues: toSourceRepresentationValues(
                this.schemaOrigins
            ),
            type: 'type',
            value: 'object'
        }];
    }

    public getPropertyNames(): string[] {
        return Object.keys(this.properties);
    }

    public getProperty(propertyName: string): Set<'json'> {
        return this.properties[propertyName] ? this.properties[propertyName] : this.additionalProperties;
    }
}

export class EmptyObjectSet implements ObjectSet {
    public readonly setType = 'object';
    public readonly type = 'empty';

    public constructor(
        public readonly schemaOrigins: SchemaOrigin[],
        public readonly properties: ParsedPropertiesKeyword,
        public additionalProperties: Set<'json'>
    ) {
    }

    public intersect(otherSet: ObjectSet): ObjectSet {
        return otherSet.intersectWithEmpty(this);
    }

    public intersectWithAll(otherAllSet: AllObjectSet): ObjectSet {
        return intersectEmptyWithOtherObjectSet(this, otherAllSet);
    }

    public intersectWithSome(otherSomeSet: SomeObjectSet): ObjectSet {
        return intersectEmptyWithOtherObjectSet(this, otherSomeSet);
    }

    public intersectWithEmpty(otherEmptySet: EmptyObjectSet): ObjectSet {
        return intersectEmptyWithOtherObjectSet(this, otherEmptySet);
    }

    public union(otherSet: ObjectSet): ObjectSet {
        return otherSet.unionWithEmpty(this);
    }

    public unionWithAll(otherAllSet: AllObjectSet): ObjectSet {
        return unionAllWithOtherObjectSet(otherAllSet, this);
    }

    public unionWithEmpty(otherEmptySet: EmptyObjectSet): ObjectSet {
        return new EmptyObjectSet(
            this.schemaOrigins.concat(otherEmptySet.schemaOrigins),
            unionProperties(this, otherEmptySet),
            this.additionalProperties.intersect(otherEmptySet.additionalProperties)
        );
    }

    public unionWithSome(otherSomeSet: SomeObjectSet): ObjectSet {
        return unionSomeAndEmpty(otherSomeSet, this);
    }

    public complement(): ObjectSet {
        return new AllObjectSet(
            this.schemaOrigins,
            complementProperties(this),
            this.additionalProperties.complement()
        );
    }

    public toRepresentations(): Representation[] {
        return [];
    }

    public getProperty(propertyName: string): Set<'json'> {
        return this.properties[propertyName] ? this.properties[propertyName] : this.additionalProperties;
    }

    public getPropertyNames(): string[] {
        return Object.keys(this.properties);
    }
}

export class SomeObjectSet implements ObjectSet {
    public readonly setType = 'object';
    public readonly type = 'some';

    public constructor(public readonly schemaOrigins: SchemaOrigin[],
                       public readonly properties: ParsedPropertiesKeyword,
                       public readonly additionalProperties: Set<'json'>) {
    }

    public intersect(otherSet: ObjectSet): ObjectSet {
        return otherSet.intersectWithSome(this);
    }

    public intersectWithSome(otherSomeSet: SomeObjectSet): ObjectSet {
        const mergedSchemaOrigins = this.schemaOrigins.concat(otherSomeSet.schemaOrigins);
        const mergedProperties = intersectProperties(this, otherSomeSet);
        const mergedAdditionalProperties = this.additionalProperties.intersect(otherSomeSet.additionalProperties);

        return new SomeObjectSet(mergedSchemaOrigins, mergedProperties, mergedAdditionalProperties);
    }

    public intersectWithAll(otherAllSet: AllObjectSet): ObjectSet {
        return intersectAllAndSome(otherAllSet, this);
    }

    public intersectWithEmpty(otherEmptySet: EmptyObjectSet): ObjectSet {
        return intersectEmptyWithOtherObjectSet(otherEmptySet, this);
    }

    public union(otherSet: ObjectSet): ObjectSet {
        return otherSet.unionWithSome(this);
    }

    public unionWithAll(otherAllSet: AllObjectSet): ObjectSet {
        return unionAllWithOtherObjectSet(otherAllSet, this);
    }

    public unionWithEmpty(otherEmptySet: EmptyObjectSet): ObjectSet {
        return unionSomeAndEmpty(this, otherEmptySet);
    }

    public unionWithSome(otherSomeSet: SomeObjectSet): ObjectSet {
        const mergedSchemaOrigins = this.schemaOrigins.concat(otherSomeSet.schemaOrigins);
        const mergedProperties = unionProperties(this, otherSomeSet);
        const mergedAdditionalProperties = this.additionalProperties.union(otherSomeSet.additionalProperties);

        return new SomeObjectSet(mergedSchemaOrigins, mergedProperties, mergedAdditionalProperties);
    }

    public complement(): ObjectSet {
        return new SomeObjectSet(
            this.schemaOrigins,
            complementProperties(this),
            this.additionalProperties.complement()
        );
    }

    public toRepresentations(): Representation[] {
        const representations: Representation[] = [];
        this.getPropertyNames().forEach((property) => {
            representations.push(...this.properties[property].toRepresentations());
        });

        representations.push(...this.additionalProperties.toRepresentations());
        representations.push({
            destinationValues: toDestinationRepresentationValues(this.schemaOrigins),
            sourceValues: toSourceRepresentationValues(this.schemaOrigins),
            type: 'type',
            value: 'object'
        });

        return representations;
    }

    public getProperty(propertyName: string): Set<'json'> {
        return this.properties[propertyName] ? this.properties[propertyName] : this.additionalProperties;
    }

    public getPropertyNames(): string[] {
        return Object.keys(this.properties);
    }
}

const unionProperties = (objectSet1: ObjectSet, objectSet2: ObjectSet) => {
    const mergedProperties: ParsedPropertiesKeyword = {};
    const allPropertyNames = getUniquePropertyNames(objectSet1.getPropertyNames(), objectSet2.getPropertyNames());
    allPropertyNames.forEach((propertyName) => {
        mergedProperties[propertyName] = objectSet1.getProperty(propertyName)
            .union(objectSet2.getProperty(propertyName));
    });
    return mergedProperties;
};

const intersectProperties = (objectSet1: ObjectSet, objectSet2: ObjectSet) => {
    const mergedProperties: ParsedPropertiesKeyword = {};
    const allPropertyNames = getUniquePropertyNames(objectSet1.getPropertyNames(), objectSet2.getPropertyNames());
    allPropertyNames.forEach((propertyName) => {
        mergedProperties[propertyName] = objectSet1.getProperty(propertyName)
            .intersect(objectSet2.getProperty(propertyName));
    });
    return mergedProperties;
};

const intersectAllAndSome = (allObjectSet: ObjectSet, someObjectSet: ObjectSet): SomeObjectSet => {
    const mergedSchemaOrigins = allObjectSet.schemaOrigins.concat(someObjectSet.schemaOrigins);
    const mergedProperties = intersectProperties(allObjectSet, someObjectSet);
    const mergedAdditionalProperties = allObjectSet.additionalProperties.intersect(someObjectSet.additionalProperties);

    return new SomeObjectSet(mergedSchemaOrigins, mergedProperties, mergedAdditionalProperties);
};

const intersectEmptyWithOtherObjectSet = (
    emptyObjectSet: EmptyObjectSet, otherObjectSet: ObjectSet
): EmptyObjectSet => {
    const mergedSchemaOrigins = emptyObjectSet.schemaOrigins.concat(otherObjectSet.schemaOrigins);
    const mergedProperties = intersectProperties(emptyObjectSet, otherObjectSet);
    const mergedAdditionalProperties = emptyObjectSet.additionalProperties
        .intersect(otherObjectSet.additionalProperties);

    return new EmptyObjectSet(mergedSchemaOrigins, mergedProperties, mergedAdditionalProperties);
};

const unionAllWithOtherObjectSet = (allObjectSet: AllObjectSet, otherObjectSet: ObjectSet): AllObjectSet => {
    const mergedSchemaOrigins = allObjectSet.schemaOrigins.concat(otherObjectSet.schemaOrigins);
    const mergedProperties = unionProperties(allObjectSet, otherObjectSet);
    const mergedAdditionalProperties = allObjectSet.additionalProperties.union(otherObjectSet.additionalProperties);

    return new AllObjectSet(mergedSchemaOrigins, mergedProperties, mergedAdditionalProperties);
};

const unionSomeAndEmpty = (someObjectSet: SomeObjectSet, emptyObjectSet: EmptyObjectSet): SomeObjectSet => {
    const mergedSchemaOrigins = someObjectSet.schemaOrigins.concat(emptyObjectSet.schemaOrigins);
    const mergedProperties = unionProperties(someObjectSet, emptyObjectSet);
    const mergedAdditionalProperties = someObjectSet.additionalProperties.union(emptyObjectSet.additionalProperties);

    return new SomeObjectSet(mergedSchemaOrigins, mergedProperties, mergedAdditionalProperties);
};

const complementProperties = (objectSet: ObjectSet): ParsedPropertiesKeyword => {
    const complementedProperties: ParsedPropertiesKeyword = {};
    objectSet.getPropertyNames().forEach((property) => {
        complementedProperties[property] = objectSet.properties[property].complement();
    });
    return complementedProperties;
};
