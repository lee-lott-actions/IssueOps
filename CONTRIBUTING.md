# Contributing to IssueOps

Thank you for your interest in contributing to this repository!

## How to Contribute

This repository uses **IssueOps** to manage GitHub organization, team, and repository configurations.  You will want to clone the repository to an organization that needs the IssueOps functionality.

## Post-Clone Setup

Please complete the following steps after cloning to your organization:

1. Verify there is a team called `issue-ops-admins` in the organization. Create the team if it does not exist.  Add the necessary staff to the team.
2. Verify there is a team called `issue-ops-approvers` in the organization. Create the team if it does not exist.  Add the necessary staff to the team.
3. Go the the add-team-to-org-approve-request.yml in the `.github/workflows` folder.  Update the `add-members` job maintainer matrix with member names who would be maintainers for the new team.
4. In each .md file in the docs folder, update the link to the IssueOps Approvers Team with the correct organization name.
5. Create a repository variable, `ISSUEOPSBOT_APP_ID`.  Assign it the APP ID of the GitHub App `LA-ISSUEOPS`.
6. Create a repository secret, `ISSUEOPSBOT_APP_PRIVATE_KEY`.  Assign it the private key of the GitHub App `LA-ISSUEOPS`.
7. Add the `LA-ISSUEOPS` GitHub App to the organization to which the IssueOps repos was added.
8. Add the following to the About section:
    - This is an IssueOps repository that provides a centralized hub for managing operational workflows, incidents, and tasks through Git issues. It integrates automation tools, scripts, and documentation to streamline processes, track progress, and foster collaboration, treating issues as actionable units for operations.
9. Remove all labels from the repository and add the following labels with the accompanying color codes and descriptions:
    - add-member-to-team
         - This label is applied to any new request to add a new member to a team within the organization.
         - #0052cc
    - add-repo-to-org
         - This label is applied to any new request to add a new repository to the organization.
         -  #0052cc
    - add-team-to-org 
         - This label is applied to any new request to add a new team to the organization.
         -  #0052cc
    - add-team-to-repo
         - This label is applied to any new request to add an existing team to a repository.
         -  #0052cc
    - archive-repo
         - This label is applied to any new request to archive a repository within the organization.
         -  #0052cc
    - delete-repo
         - This label is applied to any new request to delete a repository from the organization.
         -  #0052cc
    - rename-repo
         - This label is applied to any new request to rename a repository within the organization.
         -  #0052cc
    - unarchive-repo
         - This label is applied to any new request to unarchive a repository within the organization.
         -  #0052cc
    - approved
         - This label is applied the issue is approved by the IssueOps Approver team.
         -  #0e8a16
    - denied
         - This label is applied once the issue is denied by the IssueOps Approver team.
         -  #b60205
    - submitted
         - This label is applied once the issue is submitted for review.
         -  #fbca04
    - validated
         - This label is applied once the fields have been successfully validated.
         -  #FFA500

See the [README.md](README.md) and docs/ directory for more details.

### Pull Requests

This repository does not accept direct code contributions. All changes must be requested and processed through Pull Requests.

## Code of Conduct

Please be respectful and considerate in all interactions. For more information, refer to the repository's Code of Conduct if available.
