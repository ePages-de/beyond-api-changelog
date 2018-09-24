# beyond-api-changelog
Technical diff of the OpenAPI specification of the Beyond API

## Development

```
npm install swagger-diff
```

https://www.npmjs.com/package/swagger-diff

## Generate diff

```
git show HEAD:openapi.yaml > /tmp/openapi-old.yaml

./node_modules/.bin/swagger-diff --outformat=json --outfile=diff.json /tmp/openapi-old.yaml openapi.yaml
```

## Other options
- https://bitbucket.org/atlassian/openapi-diff
- https://javalibs.com/artifact/com.deepoove/swagger-diff
- https://swagger.io/blog/api-development/using-swagger-to-detect-breaking-api-changes/
- https://github.com/Sayi/swagger-diff
