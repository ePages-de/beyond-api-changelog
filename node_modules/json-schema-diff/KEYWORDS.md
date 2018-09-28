# Json Schema Diff Supported Keywords

This is a list of all the keywords in json schema and which keywords Json Schema Diff currently supports.

## Validation Keywords for Any Instance Type

| Keyword | Supported |
|---|---|
| type | yes |
| enum | no |
| const | no |

## Validation Keywords for Numeric Instances (number and integer)

| Keyword | Supported |
|---|---|
| multipleOf | no |
| maximum | no |
| exclusiveMaximum | no |
| minimum | no |
| exclusiveMinimum | no |

## Validation Keywords for Strings

| Keyword | Supported |
|---|---|
| maxLength | no |
| minLength | no |
| pattern | no |

## Validation Keywords for Arrays

| Keyword | Supported |
|---|---|
| items | no |
| additionalItems | no |
| maxItems | no |
| minItems | no |
| uniqueItems | no |
| contains | no |


## Validation Keywords for Objects

| Keyword | Supported |
|---|---|
| maxProperties | no |
| minProperties | no |
| required | no |
| properties | yes |
| patternProperties | no |
| additionalProperties | yes |
| dependencies | no |
| propertyNames | no |


## Keywords for Applying Subschemas Conditionally

| Keyword | Supported |
|---|---|
| if | no |
| then | no |
| else | no |


## Keywords for Applying Subschemas With Boolean Logic

| Keyword | Supported |
|---|---|
| allOf | no |
| anyOf | no |
| oneOf | no |
| not | no |