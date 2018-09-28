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

### openapi-diff

https://bitbucket.org/atlassian/openapi-diff

```
$ ./node_modules/.bin/openapi-diff ${PREVIOUS_API_SPEC_FILE} ${API_SPEC_FILE} | tail -n +2 | jq -r 'delpaths([["breakingDifferencesFound"]]) | .[] | .[] | "|" + .type + "\n" + "|" + .code + "\n" + "|" + .sourceSpecEntityDetails[].location | gsub("paths."; "")'
```


### Java based
- https://github.com/Sayi/swagger-diff

```
java -jar swagger-diff.jar -old ${PREVIOUS_API_SPEC_FILE} -new ${API_SPEC_FILE} -v 2.0 -output-mode markdown
```
