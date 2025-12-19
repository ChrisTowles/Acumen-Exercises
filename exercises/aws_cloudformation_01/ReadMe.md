# AWS CloudFormation

**Skills:** CloudFormation YAML, CloudWatch Logs, resource properties

**Success Criteria:** Valid template creates log group with 30-day retention.

- [AWS CloudFormation](#aws-cloudformation)
  - [Setup](#setup)
  - [Questions](#questions)
    - [Question 1](#question-1)
    - [Question 2](#question-2)
    - [Question 3](#question-3)
  - [Hands on Problem](#hands-on-problem)
    - [Problem 1](#problem-1)
    - [Problem 2](#problem-2)

## Setup

You are helping a team that isn't familiar with AWS. They have asked you to help them deploy some resources to AWS.

Feel free to use any resources you want, just as you would for normal work.

## Questions

### Question 1

What can you tell me about AWS CloudFormations and your experience with it. Talk about some examples of CloudFormations you've built and how your managed their lifecycle.

### Question 2

What strategies do you employ when deploying a lot of inter-connected AWS services to the same account with CloudFormations.

### Question 3

Talk me through the steps you took to deploy the CloudFormation templates. What did you do? Any best practices you employed?

## Hands on Problem

For simplicity, Team A needs an CloudWatch Log group created.

They have asked you to deploy a CloudFormation template that will create that resource.

### Problem 1

Modify the `cf-example.yaml` file so that it creates a CloudWatch Log group with the name `/aws/ec2/team-a-log-group`

### Problem 2

Modify the `cf-example.yaml` file so that CloudWatch Log group retains logs for 30 days.
