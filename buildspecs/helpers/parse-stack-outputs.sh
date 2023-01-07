#!/bin/bash

# Grabs the value for the key specified 
# (passed in as the only argument)
# and strips the starting and ending quotes
cat ${CODEBUILD_SRC_DIR}/stack-outputs.json | jq -c '.Stacks[0].Outputs | .[] | select (.OutputKey=="'${1}'").OutputValue' | sed -e 's/^"//' -e 's/"$//'