# Beyond API Changelog

Generated description of changes in the ePages Beyond API.

## Usage

In order to insert the latest changes into the change log, just call the update
script and then push the changes to GitHub.

```
./update.sh
git push
```

## Dependencies

Before you do so, make sure that the following tools are installed:

- git
- jq
- GNU core utils
- node

## OpenAPI diff generation

The API diff generation is based upon the NPM package [swagger-diff](https://www.npmjs.com/package/swagger-diff).
Other options might be:

- https://bitbucket.org/atlassian/openapi-diff
- https://javalibs.com/artifact/com.deepoove/swagger-diff
- https://swagger.io/blog/api-development/using-swagger-to-detect-breaking-api-changes/
- https://github.com/Sayi/swagger-diff
