#!/bin/bash
RED=`tput setaf 1`
RESET=`tput sgr0`
REGION="us-west-2"

name=$1
type=$2
env=$3

if [[ -n "$env" ]]; then
    echo "CICD BUIlD NAME:${name}"
    aws cloudformation ${type}-stack --stack-name "${name}-${env}-cicd" --template-body file://./pipeline/template.yml \
    --parameters ParameterKey=GitHubRepo,ParameterValue="${name}" ParameterKey=GitHubBranch,ParameterValue="${env}" \
    --profile default --region us-west-2 --capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND
else
    echo "${RED} Missing arguement --stage={env}${RESET}"
fi