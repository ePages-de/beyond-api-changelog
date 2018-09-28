"use strict";
// tslint:disable:max-classes-per-file
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const set_1 = require("../set");
const getUniquePropertyNames = (thisPropertyNames, otherPropertyNames) => _.uniq(thisPropertyNames.concat(otherPropertyNames));
class AllObjectSet {
    constructor(schemaOrigins, properties, additionalProperties) {
        this.schemaOrigins = schemaOrigins;
        this.properties = properties;
        this.additionalProperties = additionalProperties;
        this.setType = 'object';
        this.type = 'all';
    }
    intersect(otherSet) {
        return otherSet.intersectWithAll(this);
    }
    intersectWithSome(otherSomeObjectSet) {
        return intersectAllAndSome(this, otherSomeObjectSet);
    }
    intersectWithAll(otherAllSet) {
        return new AllObjectSet(this.schemaOrigins.concat(otherAllSet.schemaOrigins), intersectProperties(this, otherAllSet), this.additionalProperties.intersect(otherAllSet.additionalProperties));
    }
    intersectWithEmpty(otherEmptySet) {
        return intersectEmptyWithOtherObjectSet(otherEmptySet, this);
    }
    union(otherSet) {
        return otherSet.unionWithAll(this);
    }
    unionWithAll(otherAllSet) {
        return unionAllWithOtherObjectSet(otherAllSet, this);
    }
    unionWithEmpty(otherEmptySet) {
        return new AllObjectSet(this.schemaOrigins.concat(otherEmptySet.schemaOrigins), unionProperties(this, otherEmptySet), this.additionalProperties.union(otherEmptySet.additionalProperties));
    }
    unionWithSome(otherSomeSet) {
        return unionAllWithOtherObjectSet(this, otherSomeSet);
    }
    complement() {
        return new EmptyObjectSet(this.schemaOrigins, complementProperties(this), this.additionalProperties.complement());
    }
    toRepresentations() {
        return [{
                destinationValues: set_1.toDestinationRepresentationValues(this.schemaOrigins),
                sourceValues: set_1.toSourceRepresentationValues(this.schemaOrigins),
                type: 'type',
                value: 'object'
            }];
    }
    getPropertyNames() {
        return Object.keys(this.properties);
    }
    getProperty(propertyName) {
        return this.properties[propertyName] ? this.properties[propertyName] : this.additionalProperties;
    }
}
exports.AllObjectSet = AllObjectSet;
class EmptyObjectSet {
    constructor(schemaOrigins, properties, additionalProperties) {
        this.schemaOrigins = schemaOrigins;
        this.properties = properties;
        this.additionalProperties = additionalProperties;
        this.setType = 'object';
        this.type = 'empty';
    }
    intersect(otherSet) {
        return otherSet.intersectWithEmpty(this);
    }
    intersectWithAll(otherAllSet) {
        return intersectEmptyWithOtherObjectSet(this, otherAllSet);
    }
    intersectWithSome(otherSomeSet) {
        return intersectEmptyWithOtherObjectSet(this, otherSomeSet);
    }
    intersectWithEmpty(otherEmptySet) {
        return intersectEmptyWithOtherObjectSet(this, otherEmptySet);
    }
    union(otherSet) {
        return otherSet.unionWithEmpty(this);
    }
    unionWithAll(otherAllSet) {
        return unionAllWithOtherObjectSet(otherAllSet, this);
    }
    unionWithEmpty(otherEmptySet) {
        return new EmptyObjectSet(this.schemaOrigins.concat(otherEmptySet.schemaOrigins), unionProperties(this, otherEmptySet), this.additionalProperties.intersect(otherEmptySet.additionalProperties));
    }
    unionWithSome(otherSomeSet) {
        return unionSomeAndEmpty(otherSomeSet, this);
    }
    complement() {
        return new AllObjectSet(this.schemaOrigins, complementProperties(this), this.additionalProperties.complement());
    }
    toRepresentations() {
        return [];
    }
    getProperty(propertyName) {
        return this.properties[propertyName] ? this.properties[propertyName] : this.additionalProperties;
    }
    getPropertyNames() {
        return Object.keys(this.properties);
    }
}
exports.EmptyObjectSet = EmptyObjectSet;
class SomeObjectSet {
    constructor(schemaOrigins, properties, additionalProperties) {
        this.schemaOrigins = schemaOrigins;
        this.properties = properties;
        this.additionalProperties = additionalProperties;
        this.setType = 'object';
        this.type = 'some';
    }
    intersect(otherSet) {
        return otherSet.intersectWithSome(this);
    }
    intersectWithSome(otherSomeSet) {
        const mergedSchemaOrigins = this.schemaOrigins.concat(otherSomeSet.schemaOrigins);
        const mergedProperties = intersectProperties(this, otherSomeSet);
        const mergedAdditionalProperties = this.additionalProperties.intersect(otherSomeSet.additionalProperties);
        return new SomeObjectSet(mergedSchemaOrigins, mergedProperties, mergedAdditionalProperties);
    }
    intersectWithAll(otherAllSet) {
        return intersectAllAndSome(otherAllSet, this);
    }
    intersectWithEmpty(otherEmptySet) {
        return intersectEmptyWithOtherObjectSet(otherEmptySet, this);
    }
    union(otherSet) {
        return otherSet.unionWithSome(this);
    }
    unionWithAll(otherAllSet) {
        return unionAllWithOtherObjectSet(otherAllSet, this);
    }
    unionWithEmpty(otherEmptySet) {
        return unionSomeAndEmpty(this, otherEmptySet);
    }
    unionWithSome(otherSomeSet) {
        const mergedSchemaOrigins = this.schemaOrigins.concat(otherSomeSet.schemaOrigins);
        const mergedProperties = unionProperties(this, otherSomeSet);
        const mergedAdditionalProperties = this.additionalProperties.union(otherSomeSet.additionalProperties);
        return new SomeObjectSet(mergedSchemaOrigins, mergedProperties, mergedAdditionalProperties);
    }
    complement() {
        return new SomeObjectSet(this.schemaOrigins, complementProperties(this), this.additionalProperties.complement());
    }
    toRepresentations() {
        const representations = [];
        this.getPropertyNames().forEach((property) => {
            representations.push(...this.properties[property].toRepresentations());
        });
        representations.push(...this.additionalProperties.toRepresentations());
        representations.push({
            destinationValues: set_1.toDestinationRepresentationValues(this.schemaOrigins),
            sourceValues: set_1.toSourceRepresentationValues(this.schemaOrigins),
            type: 'type',
            value: 'object'
        });
        return representations;
    }
    getProperty(propertyName) {
        return this.properties[propertyName] ? this.properties[propertyName] : this.additionalProperties;
    }
    getPropertyNames() {
        return Object.keys(this.properties);
    }
}
exports.SomeObjectSet = SomeObjectSet;
const unionProperties = (objectSet1, objectSet2) => {
    const mergedProperties = {};
    const allPropertyNames = getUniquePropertyNames(objectSet1.getPropertyNames(), objectSet2.getPropertyNames());
    allPropertyNames.forEach((propertyName) => {
        mergedProperties[propertyName] = objectSet1.getProperty(propertyName)
            .union(objectSet2.getProperty(propertyName));
    });
    return mergedProperties;
};
const intersectProperties = (objectSet1, objectSet2) => {
    const mergedProperties = {};
    const allPropertyNames = getUniquePropertyNames(objectSet1.getPropertyNames(), objectSet2.getPropertyNames());
    allPropertyNames.forEach((propertyName) => {
        mergedProperties[propertyName] = objectSet1.getProperty(propertyName)
            .intersect(objectSet2.getProperty(propertyName));
    });
    return mergedProperties;
};
const intersectAllAndSome = (allObjectSet, someObjectSet) => {
    const mergedSchemaOrigins = allObjectSet.schemaOrigins.concat(someObjectSet.schemaOrigins);
    const mergedProperties = intersectProperties(allObjectSet, someObjectSet);
    const mergedAdditionalProperties = allObjectSet.additionalProperties.intersect(someObjectSet.additionalProperties);
    return new SomeObjectSet(mergedSchemaOrigins, mergedProperties, mergedAdditionalProperties);
};
const intersectEmptyWithOtherObjectSet = (emptyObjectSet, otherObjectSet) => {
    const mergedSchemaOrigins = emptyObjectSet.schemaOrigins.concat(otherObjectSet.schemaOrigins);
    const mergedProperties = intersectProperties(emptyObjectSet, otherObjectSet);
    const mergedAdditionalProperties = emptyObjectSet.additionalProperties
        .intersect(otherObjectSet.additionalProperties);
    return new EmptyObjectSet(mergedSchemaOrigins, mergedProperties, mergedAdditionalProperties);
};
const unionAllWithOtherObjectSet = (allObjectSet, otherObjectSet) => {
    const mergedSchemaOrigins = allObjectSet.schemaOrigins.concat(otherObjectSet.schemaOrigins);
    const mergedProperties = unionProperties(allObjectSet, otherObjectSet);
    const mergedAdditionalProperties = allObjectSet.additionalProperties.union(otherObjectSet.additionalProperties);
    return new AllObjectSet(mergedSchemaOrigins, mergedProperties, mergedAdditionalProperties);
};
const unionSomeAndEmpty = (someObjectSet, emptyObjectSet) => {
    const mergedSchemaOrigins = someObjectSet.schemaOrigins.concat(emptyObjectSet.schemaOrigins);
    const mergedProperties = unionProperties(someObjectSet, emptyObjectSet);
    const mergedAdditionalProperties = someObjectSet.additionalProperties.union(emptyObjectSet.additionalProperties);
    return new SomeObjectSet(mergedSchemaOrigins, mergedProperties, mergedAdditionalProperties);
};
const complementProperties = (objectSet) => {
    const complementedProperties = {};
    objectSet.getPropertyNames().forEach((property) => {
        complementedProperties[property] = objectSet.properties[property].complement();
    });
    return complementedProperties;
};
