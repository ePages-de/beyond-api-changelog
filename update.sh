
API_SPEC_URL='http://docs.beyondshop.cloud/openapi.yaml'
API_SPEC_FILE=openapi.yaml
CHANGE_LOG_FILE=beyond-api-changelog.adoc

curl -s ${API_SPEC_URL} > ${API_SPEC_FILE}
git diff --exit-code > /dev/null

if [[ $? -eq 1 ]]; then
    PREVIOUS_API_SPEC_FILE=$(mktemp)
    git show HEAD:${API_SPEC_FILE} > ${PREVIOUS_API_SPEC_FILE}

    ./prepend-diff-description.sh -o ${PREVIOUS_API_SPEC_FILE} -n ${API_SPEC_FILE} -c ${CHANGE_LOG_FILE}

    git add .
    git commit -m "Update change log"
fi
