"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
exports.allSchemaTypes = ['string', 'number', 'boolean', 'integer', 'array', 'object', 'null'];
exports.toSourceRepresentationValues = (schemaOrigins) => toRepresentationValues(schemaOrigins, 'source');
exports.toDestinationRepresentationValues = (schemaOrigins) => toRepresentationValues(schemaOrigins, 'destination');
const toRepresentationValues = (schemaOrigins, origin) => {
    const representationValuesWithDuplications = schemaOrigins
        .filter((schemaOrigin) => schemaOrigin.type === origin)
        .map((schemaOrigin) => ({
        path: schemaOrigin.path,
        value: schemaOrigin.value
    }));
    return _.uniqWith(representationValuesWithDuplications, _.isEqual);
};
