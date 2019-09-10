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
export MAILGUN_API_TOKEN=xxx
export MAILBOX=xxx

cat /tmp/change-log.html | ./send-notification.sh -F to="jdoe@example.com"
```

## Dependencies

Before you do so, make sure that the following tools are installed:

### Swagger diff

The diff is getting generated with the help of this tool: https://github.com/Sayi/swagger-diff

```
java -jar swagger-diff.jar -old ${PREVIOUS_API_SPEC_FILE} -new ${API_SPEC_FILE} -v 2.0 -output-mode markdown
```

### Command-line utils

- git
- jq
- GNU core utils


## Alternatives

If the simple and effective diff creation functionality of the Java library mentioned above turns
out to be not sufficient, here are some other tools which can create a diff from OpenAPI specifications:

- https://www.npmjs.com/package/swagger-diff
- https://bitbucket.org/atlassian/openapi-diff
- https://javalibs.com/artifact/com.deepoove/swagger-diff
- https://swagger.io/blog/api-development/using-swagger-to-detect-breaking-api-changes/
