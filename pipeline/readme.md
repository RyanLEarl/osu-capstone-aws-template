# CI/CD Pipeline

## Overview

The Pipeline service provides cloudformation templates for creating an AWS CodePipeline setup for managing CI/CD. The CICD process will then set up the Node environment for the back end, deploying with Serverless Framework, and then updating Cloudformation stacks. 
## Sub-Prod Environments

1.  From the pipeline folder, fill out the project name(7, 131, & 135) and branch name in the **template.yml** file. Configure any additional permissions needed for project, if you need more than the defaults.  You can also remove any unecessary ones.
2.  From the root folder, build the CICD by running this command: `npm run build-cicd --stage={env}`  (For WINDOWS run `npm run build-cicd-windows --stage={env}`) 
3.  If after building the CICD you change anything in the template.yml, you can update the CICD by running: `npm run update-cicd --stage={env}`  (For WINDOWS run `npm run update-cicd-windows --stage={env}`)
   
**NOTE** *Replace {env} with your environment. Traditionally, you would use something like dev or prod, but for the purpose of this project, the branch name of your repo works. You will need your aws-cli setup in your terminal as well as your aws_profile setup (uses default profile name) for the associated account in order to run the command below. For documentation about the aws-cli https://docs.aws.amazon.com/polly/latest/dg/setup-aws-cli.html.*


