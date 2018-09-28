"use strict";
const json_schema_diff_factory_1 = require("./json-schema-diff-factory");
const jsonSchemaDiff = {
    diffSchemas: (options) => json_schema_diff_factory_1.JsonSchemaDiffFactory.create().diffSchemas(options)
};
module.exports = jsonSchemaDiff;
