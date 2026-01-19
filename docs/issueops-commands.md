# IssueOps Commands

This section describes the commands used in the comments of an issue to manage the IssueOps request process. There are separate commands for general users and for the IssueOps Approvers Team.

## User Commands

- **`.validate`**
  - **Purpose**: Triggers re-validation of the issue fields if a previous validation attempt failed due to an issue outside of the required fields (e.g., an invalid input).
  - **When to Use**: Use this command after resolving any issues mentioned in a validation failure comment to re-run the validation process.
  - **How to Use**:
    1. Add a new comment to the issue.
    2. Type `.validate` in the comment box.
    3. Click the `Comment` button.
  - **Outcome**: A GitHub Action will re-validate the issue fields, and a comment will be added indicating whether the validation passed or failed. If successful, a `validated` label is added, and instructions for submission will be provided.

- **`.submit`**
  - **Purpose**: Submits a validated issue for review by the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers).
  - **When to Use**: Use this command after the issue has been successfully validated (i.e., it has a `validated` label) and is ready for review.
  - **How to Use**:
    1. Add a new comment to the issue.
    2. Type `.submit` in the comment box.
    3. Click the `Comment` button.
  - **Outcome**: A comment will be added notifying the IssueOps Approvers Team that the issue is pending review, and a `submitted` label will be added to the issue.

## Approver Commands

The following commands are restricted to members of the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) for reviewing submitted issues.

- **`.approve`**
  - **Purpose**: Approves a submitted issue, triggering the processing of the request.
  - **When to Use**: Use this command after reviewing the issue details and confirming that the request meets all requirements.
  - **How to Use**:
    1. Add a new comment to the issue.
    2. Type `.approve` in the comment box.
    3. Optionally, include any additional comments for the requester.
    4. Click the `Comment` button.
  - **Outcome**: A GitHub Action will process the request. Upon completion, a comment will be added to the issue notifying that the process completed successfully, the issue will be closed, and an `approved` label will be added.

- **`.deny`**
  - **Purpose**: Denies a submitted issue, rejecting the request.
  - **When to Use**: Use this command if the request does not meet the requirements or cannot be approved for other reasons.
  - **How to Use**:
    1. Add a new comment to the issue.
    2. Type `.deny` in the comment box.
    3. Optionally, include reasons for the denial to provide feedback to the requester.
    4. Click the `Comment` button.
  - **Outcome**: A comment will be added to the issue noting that the request was denied, the issue will be closed, and a `denied` label will be added. Any provided reasons for denial will be included in the comment.

## Notes
- Ensure all commands are used in the context of an IssueOps issue created from the appropriate template.
- Validation, submission, and approval/denial processes are automated via GitHub Actions, and responses may take a few moments to appear.
- If an issue fails validation, users should review the comment provided by the GitHub Action for details on the error before using the `.validate` command.
- Approvers should verify the issue details carefully before using `.approve` or `.deny` to ensure accurate processing of the request.
