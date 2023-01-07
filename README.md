# OSU Capstone AWS Template

## Initial Setup

1. In the Github page for the template, press the `Use this template` button. Select the visibility level and press `create repository from template`.
2. Now Clone it to your local machine

## Full Configuration Instructions

Note: Each service folder has its own README file for specific setup directions and notes.  

1. From the root folder, fill out the project name in the **package.json** file. 
2. From the root folder, run `npm install` to install your linting packages.
3. Navigate to the back-end folder and follow the instructions.
4. Navigate to the buildspecs folder and follow the instructions.
5. Commit changes to Github.
6. Navigate to the pipeline folder and follow the instructions.
7. Verify your CICD has completed successfully from the AWS Cloudformation console.  Once it has completed building, your project stack will automatically start building.  
8. Verify your project has built successfully by going to the AWS Codepipeline console and finding your project CICD pipeline.

## Git Management

With proper setup, the CI/CD process should be automated. This process requires managing sourcecode through git and the use of webhooks to trigger that automation through the AWS CodePipeline. 

## Serverless Commands

### Full Deploy

You can deploy the serverless project by merging changes into your CI/CD targeted github branch or manually in your cli.<br>
`sls deploy --aws-profile <REPLACE_AWS_PROFILE> --stage <REPLACE_STAGE>`<br>
**NOTE:** you will need your AWS_PROFILE that you setup in the CI/CD Pipeline instructions.

### Partial Deploy

At times during development you may wish to deploy changes to just one lambda. To do this run the following:<br>
`sls deploy function --aws-profile <REPLACE_AWS_PROFILE> --stage <REPLACE_STAGE> -f <REPLACE_FUNCTION_NAME>`<br>