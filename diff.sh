#!/usr/bin/env bash

set -e

usage () {
     cat << EOF
DESCRIPTION:
Generates a diff description for the given OpenAPI spec files.

SYNOPSIS:
$0 file_old file_new

OPTIONS:
    -h   Show this message.
    -?   Show this message.

EXAMPLE:
SPEC_FILE_1=$(mktemp)
SPEC_FILE_2=$(mktemp)
git show HEAD~5:openapi.yaml > ${SPEC_FILE_1}
git show HEAD:openapi.yaml > ${SPEC_FILE_2}

./diff.sh ${SPEC_FILE_1} ${SPEC_FILE_2}
EOF
}

while getopts ":h" option ; do
     case $option in
          h )  usage
               exit 0;;
          \? )  usage
               exit 0;;
     esac
done

shift $((OPTIND -1))
SPEC_FILE_1=$1
SPEC_FILE_2=$2

if [[ ! -s ${SPEC_FILE_1} ]]; then
    echo "Invalid first positional parameter for the old OpenAPI spec file: $SPEC_FILE_1" >&2
    exit 1
fi

if [[ ! -s ${SPEC_FILE_2} ]]; then
    echo "Invalid second positional parameter for the new OpenAPI spec file: $SPEC_FILE_2" >&2
    exit 1
fi

java -jar swagger-diff.jar -old "${SPEC_FILE_1}" -new "${SPEC_FILE_2}" -v 2.0 -output-mode markdown
