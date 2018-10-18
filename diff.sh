#!/bin/bash


usage () {
     cat << EOF
DESCRIPTION:
Generates a diff of the OpenAPI file from the given git commits.

SYNOPSIS:
$0 [-o output_format] file_old file_new

OPTIONS:
    -o   The output format. "adoc" or "markdown" are supported. Default: markdown.
    -h   Show this message.
    -?   Show this message.

EXAMPLE:
SPEC_FILE_1=$(mktemp)
SPEC_FILE_2=$(mktemp)
git show HEAD~5:openapi.yaml > ${SPEC_FILE_1}
git show HEAD:openapi.yaml > ${SPEC_FILE_2}

./diff.sh ${SPEC_FILE_1} ${SPEC_FILE_2}
./diff.sh -o adoc ${SPEC_FILE_1} ${SPEC_FILE_2}
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

SPEC_FILE_1=${@:$OPTIND:1}
SPEC_FILE_2=${@:$OPTIND+1:1}

if [[ "$OUTPUT_FORMAT" = "adoc" ]]; then
    OPEN_API_DIFF=$(mktemp)
    ./node_modules/.bin/openapi-diff ${SPEC_FILE_1} ${SPEC_FILE_2} > ${OPEN_API_DIFF}

    echo "|==="
    echo "|Change |Description"
    cat ${OPEN_API_DIFF} | tail -n +2 | jq -r 'delpaths([["breakingDifferencesFound"]]) | .[] | .[] | "\n|" + .code + "\n" + "|" + .sourceSpecEntityDetails[].location | gsub("paths."; "")'
    echo
    echo "|==="
else
    java -jar swagger-diff.jar -old ${SPEC_FILE_1} -new ${SPEC_FILE_2} -v 2.0 -output-mode markdown
fi
