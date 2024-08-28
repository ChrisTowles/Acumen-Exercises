# AWS IAM Question

## Setup

You are helping a team that isn't familiar with AWS. They have asked you to help them troubleshoot a problem.

Feel free to use any resources you want, just as you would for normal work.

## Problem

Team A reports they can see the list of other teams AWS buckets in the console but can not create their own bucket.

Using the given IAM Polices:

[bu-team-a-dev-role.json](./roles/bu-team-a-dev-role.json)
[team-a-manage-s3-policy.json](./policies/team-a-manage-s3-policy.json)

## Tasks

Talk through each of the following IAM tasks and work out how you would address them

### Problem 1

Modify the policy to allow `bu-team-a-dev-role` to create a s3 bucket but only if the prefixed with `team-a-nonprod`.

### Problem 2

Grant `bu-team-a-dev-role` access read, right and delete files from their bucket.
