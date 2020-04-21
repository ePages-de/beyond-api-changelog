#!/usr/bin/env bash

SCRIPT_DIR="$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

usage () {
     cat << EOF
DESCRIPTION:
Updates the given changelog file with a digest of the difference between two OpenAPI spec files.

SYNOPSIS:
$0 -o old_api_spec -n new_api_spec -c change_log [-e email_body_file]

OPTIONS:
    -o   The YAML file with the old version of the API spec.
    -n   The YAML file with the new version of the API spec.
    -c   The ADOC file with the documentation of the API changes.
    -e   The file into which the HTML code for the changelog notification email is to be pushed.
    -h   Show this message.
    -?   Show this message.
EOF
}

while getopts "o: n: c: e: h ?" option ; do
     case $option in
          o)   OLD_API_SPEC_FILE="${OPTARG}"
               ;;
          n)   NEW_API_SPEC_FILE="${OPTARG}"
               ;;
          c)   CHANGE_LOG_FILE="${OPTARG}"
               ;;
          e)   EMAIL_BODY_FILE="${OPTARG}"
               ;;
          h )  usage
               exit 0;;
          ? )  usage
               exit 0;;
     esac
done

if [[ -z ${OLD_API_SPEC_FILE} ]]; then
    echo "ERROR: parameter '-o' not set" >&2
    usage
    exit 1
fi

if [[ -z ${NEW_API_SPEC_FILE} ]]; then
    echo "ERROR: parameter '-n' not set" >&2
    usage
    exit 1
fi

if [[ -z ${CHANGE_LOG_FILE} ]]; then
    echo "ERROR: parameter '-c' not set" >&2
    usage
    exit 1
fi

################################################################################
# Build change log snippet
################################################################################
CURRENT_DATE=$(date '+%Y-%m-%d')
API_DIFF=$("${SCRIPT_DIR}/diff.sh" "${OLD_API_SPEC_FILE}" "${NEW_API_SPEC_FILE}")
CHANGE_LOG=$(cat <<EOF

## ${CURRENT_DATE}

${API_DIFF}
EOF
)

################################################################################
# Prepare change log email
################################################################################


CHANGE_LOG_EMAIL_BODY=$(cat <<EOF
<pre>
${CHANGE_LOG}
</pre>

<a href="https://docs.beyondshop.cloud/">API Documentation</a> * <a href="https://github.com/ePages-de/beyond-api-changelog/blob/master/beyond-api-changelog.md">Complete changelog</a>
EOF
)

if [[ ! -s ${EMAIL_BODY_FILE} ]]; then
  echo "${CHANGE_LOG_EMAIL_BODY}" > "${EMAIL_BODY_FILE}"
fi

################################################################################
# Insert change log
################################################################################

if [[ $API_DIFF == *"* "* ]]; then
  echo "Adding API diff into changelog file."
  ESCAPED_CHANGE_LOG=$(echo -e "${CHANGE_LOG}" | sed -e 's/[\/&|]/\\&/g')
  CHANGE_LOG_PLACEHOLDER="###CHANGE_LOG_HERE###"
  sed -i "/# Beyond API Changelog/ a ${CHANGE_LOG_PLACEHOLDER}" "${CHANGE_LOG_FILE}"
  perl -pi -e "s/${CHANGE_LOG_PLACEHOLDER}/${ESCAPED_CHANGE_LOG}/g" "${CHANGE_LOG_FILE}"
else
  echo "No changes in the API."
fi
