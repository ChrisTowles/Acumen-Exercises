# AWS IAM Question

- [AWS IAM Question](#aws-iam-question)
  - [Setup](#setup)
  - [Questions](#questions)
    - [Question 1](#question-1)
    - [Question 2](#question-2)
  - [Hands on Problem](#hands-on-problem)
    - [Problem 1](#problem-1)
    - [Problem 2](#problem-2)

## Setup

You are helping a team that isn't familiar with AWS. They have asked you to help them troubleshoot a problem.

Feel free to use any resources you want, just as you would for normal work.

## Questions

### Question 1

What can you tell me about AWS IAM and your experience with it. Talk about some examples of IAM policies and how they work.

### Question 2

Describe when you use a IAM policy vs resource policy.

## Hands on Problem

Team A reports they can see the list of other teams AWS buckets in the console but can not create their own bucket.

Using the given IAM Polices:

- [bu-team-a-dev-role.json](./roles/bu-team-a-dev-role.json)
- [team-a-manage-s3-policy.json](./policies/team-a-manage-s3-policy.json)

Talk through each of the following IAM tasks and work out how you would address them

### Problem 1

Modify the policy to allow `bu-team-a-dev-role` to create a s3 bucket but only if the prefixed with `team-a-nonprod`.

### Problem 2

Grant `bu-team-a-dev-role` access read, right and delete files from their bucket.
