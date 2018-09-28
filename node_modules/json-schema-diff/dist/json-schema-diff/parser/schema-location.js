"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SchemaLocation {
    constructor(type, pathSegments) {
        this.type = type;
        this.pathSegments = pathSegments;
    }
    static createRoot(schemaOriginType) {
        return new SchemaLocation(schemaOriginType, []);
    }
    get path() {
        return [...this.pathSegments];
    }
    get schemaOriginType() {
        return this.type;
    }
    child(pathSegment) {
        return new SchemaLocation(this.type, [...this.pathSegments, pathSegment]);
    }
}
exports.SchemaLocation = SchemaLocation;
