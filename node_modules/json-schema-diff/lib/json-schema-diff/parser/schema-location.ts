import {Path} from '../../api-types';
import {SchemaOriginType} from './json-set/set';

export class SchemaLocation {
    public static createRoot(schemaOriginType: SchemaOriginType): SchemaLocation {
        return new SchemaLocation(schemaOriginType, []);
    }
    private constructor(private readonly type: SchemaOriginType, private readonly pathSegments: Path) {}

    public get path(): Path {
        return [...this.pathSegments];
    }

    public get schemaOriginType(): SchemaOriginType {
        return this.type;
    }

    public child(pathSegment: string | number): SchemaLocation {
        return new SchemaLocation(this.type, [...this.pathSegments, pathSegment]);
    }
}
