#!/bin/bash

################################################################################
# Update API spec
################################################################################
API_SPEC_URL='http://docs.beyondshop.cloud/openapi-public.yaml'
API_SPEC_FILE=openapi.yaml
CHANGE_LOG_FILE=beyond-api-changelog.md

PREVIOUS_API_SPEC_FILE=$(mktemp)
PREVIOUS_API_SPEC_COMMIT=$(git log -1 --pretty=format:"%h" -- ${CHANGE_LOG_FILE})

curl -s ${API_SPEC_URL} > ${API_SPEC_FILE}
git diff --exit-code > /dev/null
if [[ $? -eq 0 ]]; then
    echo "API spec already up to date."
    exit 0
fi

################################################################################
# Update change log
################################################################################
git show ${PREVIOUS_API_SPEC_COMMIT}:${API_SPEC_FILE} > ${PREVIOUS_API_SPEC_FILE}
EMAIL_BODY_FILE=$(mktemp)
./prepend-diff-description.sh -o ${PREVIOUS_API_SPEC_FILE} -n ${API_SPEC_FILE} -c ${CHANGE_LOG_FILE} -e ${EMAIL_BODY_FILE}

git diff --exit-code --name-only ${CHANGE_LOG_FILE} > /dev/null
if [[ $? -eq 1 ]]; then
    git add .
    git commit -m "Update change log"

    if [[ -s ${EMAIL_BODY_FILE} ]] && [[ -n ${MAILGUN_API_TOKEN} ]] && [[ -n ${MAILBOX} ]] ; then
      echo "Sending out email with changelog"
      cat ${EMAIL_BODY_FILE} | ./send-notification.sh -F to="jan.mewes@experimental-software.com"
    else
      echo "Cannot send out email with changelog."
    fi
fi

rm ${EMAIL_BODY_FILE}
