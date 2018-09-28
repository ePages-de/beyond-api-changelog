# OpenAPI Diff
> A CLI tool to identify differences between Swagger/OpenAPI specs.

## Requirements
- nodejs 6.x or higher (tested using 6.x, 8.x and 9.x)
- npm 3.x or higher (tested using 3.x and 5x) OR yarn 1.x or higher (tested using 1.x)

## Installation

Install the tool using npm and add it to the package.json
```
npm install openapi-diff --save-dev
```

Avoid installing the tool globally as this will lead to problems when multiple codebases try to use different versions
of the tool on the same machine.

## Usage
Invoke the tool with two paths to Swagger/OpenAPI files in order to find differences between them, these paths can
either be paths to the specs in the local filesystem or URLs to the specs, both JSON and YAML are supported.
```
./node_modules/.bin/openapi-diff /path/to/source/openapi.json /path/to/destination/openapi.json
./node_modules/.bin/openapi-diff /path/to/source/openapi.yml /path/to/destination/openapi.yml
```

The tool's output will display the amount and type of changes, and then list the changes with the relevant info.
Changes are classified as follows:

* Breaking: changes that would make existing consumers incompatible with the API (deletion of paths, adding required
properties...)
* Non-breaking: changes that would **not** make existing consumers incompatible with the API (addition of paths,
turning a required property into optional...)
* Unclassified: changes that have been detected by the tool but can't be classified (modifications to X-Properties and
other unforeseen changes)

The command will exit with an exit code 1 if any breaking changes were found, so that you can fail builds in CI when
this happens.

## Feature support
See [SPEC_SUPPORT.md](SPEC_SUPPORT.md)
