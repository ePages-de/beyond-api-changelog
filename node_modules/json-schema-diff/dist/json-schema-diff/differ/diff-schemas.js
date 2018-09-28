"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const RefParser = require("json-schema-ref-parser");
const _ = require("lodash");
const util_1 = require("util");
const parse_as_json_set_1 = require("../parser/parse-as-json-set");
const representationsToAddedDifferences = (representations) => representations.map((representation) => ({
    addedByDestinationSchema: true,
    destinationValues: representation.destinationValues,
    removedByDestinationSchema: false,
    sourceValues: representation.sourceValues,
    type: 'add.type',
    value: representation.value
}));
const representationsToRemovedDifferences = (representations) => representations.map((representation) => ({
    addedByDestinationSchema: false,
    destinationValues: representation.destinationValues,
    removedByDestinationSchema: true,
    sourceValues: representation.sourceValues,
    type: 'remove.type',
    value: representation.value
}));
exports.dereferenceSchema = (schema) => __awaiter(this, void 0, void 0, function* () {
    const refParser = new RefParser();
    return util_1.isBoolean(schema)
        ? schema
        : yield refParser.dereference(schema, { dereference: { circular: false } });
});
exports.diffSchemas = (sourceSchema, destinationSchema) => __awaiter(this, void 0, void 0, function* () {
    const [dereferencedSourceSchema, dereferencedDestinationSchema] = yield Promise.all([
        exports.dereferenceSchema(sourceSchema), exports.dereferenceSchema(destinationSchema)
    ]);
    const sourceSet = parse_as_json_set_1.parseAsJsonSet(dereferencedSourceSchema, 'source');
    const destinationSet = parse_as_json_set_1.parseAsJsonSet(dereferencedDestinationSchema, 'destination');
    const intersectionOfSets = sourceSet.intersect(destinationSet);
    const intersectionOfSetsComplement = intersectionOfSets.complement();
    const addedToDestinationSet = intersectionOfSetsComplement.intersect(destinationSet);
    const removedFromDestinationSet = intersectionOfSetsComplement.intersect(sourceSet);
    const addedRepresentations = addedToDestinationSet.toRepresentations();
    const removedRepresentations = removedFromDestinationSet.toRepresentations();
    const identicalRepresentations = _.intersectionWith(addedRepresentations, removedRepresentations, _.isEqual);
    const uniqueDifferenceAddedRepresentations = _.differenceWith(addedRepresentations, identicalRepresentations, _.isEqual);
    const uniqueDifferenceRemovedRepresentations = _.differenceWith(removedRepresentations, identicalRepresentations, _.isEqual);
    const addedDifferences = representationsToAddedDifferences(uniqueDifferenceAddedRepresentations);
    const removedDifferences = representationsToRemovedDifferences(uniqueDifferenceRemovedRepresentations);
    return {
        addedByDestinationSchema: addedDifferences.length > 0,
        differences: addedDifferences.concat(removedDifferences),
        removedByDestinationSchema: removedDifferences.length > 0
    };
});
