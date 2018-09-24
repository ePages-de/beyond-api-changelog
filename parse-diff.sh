#!/bin/bash

DIFF_FILE=$1

cat $DIFF_FILE | jq -r '.errors[] | "|" + .ruleId + "\n" + "|" + .message + "\n"'

echo -e "\n"

cat $DIFF_FILE | jq -r '.infos[] | "|" + .ruleId + "\n" + "|" + .message + "\n"'

echo -e "\n"

cat $DIFF_FILE | jq -r '.warnings[] | "|" + .ruleId + "\n" + "|" + .message + "\n"'

echo -e "\n"

cat $DIFF_FILE | jq -r '.unmatchDiffs[] | "|" + .ruleId + "\n" +  "|" + .message + "\n"'
