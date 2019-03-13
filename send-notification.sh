#!/bin/bash

curl --user "api:${API_KEY}" \
  https://api.mailgun.net/v3/${MAILBOX}/messages \
  -F subject="Beyond API Changelog" \
  -F from="noreply@epages.com" \
  -F html="<-" "$@"
