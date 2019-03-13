# Beyond API Changelog

Generated description of changes in the ePages Beyond API.

## Usage

In order to insert the latest changes into the change log, just call the update
script and then push the changes to GitHub.

```
./update.sh
git push upstream master
```

## Sending notifications

```
export API_KEY=xxx
export MAILBOX=xxx

cat /tmp/test.html | ./send-notification.sh -F to="jdoe@example.com"
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

$ OPEN_API_DIFF=$(mktemp)
$ ./node_modules/.bin/openapi-diff ${PREVIOUS_API_SPEC_FILE} ${API_SPEC_FILE} > ${OPEN_API_DIFF} | tail -n +2 | jq -r 'delpaths([["breakingDifferencesFound"]]) | .[] | .[] | "|" + .type + "\n" + "|" + .code + "\n" + "|" + .sourceSpecEntityDetails[].location | gsub("paths."; "")'
```


### Java based
- https://github.com/Sayi/swagger-diff

```
java -jar swagger-diff.jar -old ${PREVIOUS_API_SPEC_FILE} -new ${API_SPEC_FILE} -v 2.0 -output-mode markdown
```

### Manual update of OpenAPI spec

```
{
API_SPEC_URL='http://docs.beyondshop.cloud/openapi.yaml'
API_SPEC_FILE=openapi.yaml
CHANGE_LOG_FILE=beyond-api-changelog.adoc

curl -s ${API_SPEC_URL} > ${API_SPEC_FILE}

git add .
git commit -m "Update API spec"
git push upstream master
}
```
