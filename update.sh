#!/bin/bash

################################################################################
# Update API spec
################################################################################
API_SPEC_URL='http://docs.beyondshop.cloud/openapi.yaml'
API_SPEC_FILE=openapi.yaml
CHANGE_LOG_FILE=beyond-api-changelog.md

curl -s ${API_SPEC_URL} > ${API_SPEC_FILE}
git diff --exit-code > /dev/null
if [[ $? -eq 0 ]]; then
    echo "API spec already up to date."
    exit 0
fi

git add .
git commit -m "Update API spec"

################################################################################
# Update change log
################################################################################
PREVIOUS_API_SPEC_FILE=$(mktemp)
PREVIOUS_API_SPEC_COMMIT=$(git log -1 --pretty=format:"%h" -- ${API_SPEC_FILE})

git show ${PREVIOUS_API_SPEC_COMMIT}:${API_SPEC_FILE} > ${PREVIOUS_API_SPEC_FILE}
./prepend-diff-description.sh -o ${PREVIOUS_API_SPEC_FILE} -n ${API_SPEC_FILE} -c ${CHANGE_LOG_FILE}

git add .
git commit -m "Update change log"
