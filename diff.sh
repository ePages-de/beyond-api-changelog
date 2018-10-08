#!/bin/bash


usage () {
     cat << EOF
DESCRIPTION:
Generates a diff of the OpenAPI file from the given git commits.

SYNOPSIS:
$0 [-o output_format] commit_id_1 commit_id_2

OPTIONS:
    -o   The output format. "adoc" or "markdown" are supported. Default: markdown.
    -h   Show this message.
    -?   Show this message.

EXAMPLE:
./diff.sh 3622ffd830ba3c6e2cc22c63b75d4862b928cd7a HEAD
./diff.sh -o adoc 3622ffd830ba3c6e2cc22c63b75d4862b928cd7a HEAD
EOF
}

while getopts "o: h ?" option ; do
     case $option in
          o)   OUTPUT_FORMAT="${OPTARG}"
               ;;
          h )  usage
               exit 0;;
          ? )  usage
               exit 0;;
     esac
done

COMMIT_1=${@:$OPTIND:1}
COMMIT_2=${@:$OPTIND+1:1}

API_SPEC_FILE=openapi.yaml
SPEC_FILE_1=$(mktemp)
SPEC_FILE_2=$(mktemp)

git show ${COMMIT_1}:${API_SPEC_FILE} > ${SPEC_FILE_1}
git show ${COMMIT_2}:${API_SPEC_FILE} > ${SPEC_FILE_2}

if [[ "$OUTPUT_FORMAT" = "adoc" ]]; then
    OPEN_API_DIFF=$(mktemp)
    ./node_modules/.bin/openapi-diff ${SPEC_FILE_1} ${SPEC_FILE_2} > ${OPEN_API_DIFF} | tail -n +2 | jq -r 'delpaths([["breakingDifferencesFound"]]) | .[] | .[] | "|" + .type + "\n" + "|" + .code + "\n" + "|" + .sourceSpecEntityDetails[].location | gsub("paths."; "")'
else
    java -jar swagger-diff.jar -old ${SPEC_FILE_1} -new ${SPEC_FILE_2} -v 2.0 -output-mode markdown
fi
