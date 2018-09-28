# Json Schema Diff
> A language agnostic CLI tool and nodejs api to identify differences between two json schema files.

## Requirements
- nodejs 6.x or higher (tested using 6.x, 8.x and 9.x)
- npm 2.x or higher (tested using 2.x, 3.x and 5x)

## Installation

Install the tool using npm and add it to the package.json   
```
npm install json-schema-diff --save-dev
```

## Usage

This tool identifies differences between two json schema files.
[KEYWORDS.md](KEYWORDS.md) contains the details of what json schema keywords are supported.
Differences are classified into two broad groups, added and removed.

Added differences are areas where the destination schema has become more permissive relative to the source schema. For example `{"type": "string"}` -> `{"type": ["string", "number"]}`.


Removed differences are areas where the destination schema has become more restrictive relative to the source schema. For example `{"type": ["string", "number"]}` -> `{"type": "string"}`.

### Usage as a cli tool

Invoke the tool with a file path to the source schema file and the destination schema file. 
These files should be in JSON format and be valid according to the json schema draft-07 specification.

```
json-schema-diff /path/to/source-spec.json /path/to/destination-spec.json
```

The command will return a collection of any differences found in a human readable format. 

The tool will fail if any removed differences are detected.

### Usage as a nodejs api

Invoke the library with the source schema and the destination schema. 
These objects should be simple javascript objects and we valid according to the json schema draft-07 specification.

```
const jsonSchemaDiff = require('json-schema-diff');

const source = {type: 'string'};
const destination = {type: ['string', 'number']};

const result = await jsonSchemaDiff.diffSchemas({
    sourceSchema: source, 
    destinationSchema: destination
});

if (result.removedByDestinationSchema) {
    console.log('Something was removed!');
}

if (result.addedByDestinationSchema) {
    console.log('Something was added!');
}
```

For full details of the nodejs api please refer to [api-types.d.ts](lib/api-types.d.ts)

## Changelog
See [CHANGELOG.md](CHANGELOG.md)

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)

## License
See [LICENSE.txt](LICENSE.txt)
