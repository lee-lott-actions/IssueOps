# Add Member To Team

## How to Submit a Request

1. In the navigation menu at the top of the page, navigate to the **Issues** tab.
![image](https://github.com/user-attachments/assets/376f5d9d-80bf-4765-ad12-44eb570e5f28)
2. Click **New Issue**.
![image](https://github.com/user-attachments/assets/83b67a95-5ad7-40b8-a618-4909a58d6e43)
3. Select the `Add Member To Team` template.
![image](https://github.com/user-attachments/assets/231bfd77-c6e8-4965-8f6a-2684ecb15162)
4. Fill out the template with the required details.
   - Title - Replace `<Enter User Name>` with the name of the new member. Replace `Enter Team Name` with the name of the organization team to which the member will be added.
   - Member Name - Provide the name of the GitHub Organzation member.
   - Team Name - Provide the name of the GitHub Organzation Team to which the member will be added.
   - Team Role - Select the role the member will have on the team.  If the member will need the ability to make changes to the team, select `Maintainer`, otherwise, select `Member`.
![image](https://github.com/user-attachments/assets/92a82577-1c29-4a01-9e51-abfd50cdb4c2)
5. Click **Create**.
6. The Issue will now be created.  Upon creation, a GitHub Action will run to validate the fields.  It may take a few moments for the validation to complete.
    - If correct, a comment will be provided with instructions on how to submit the issue for review. Also, a validated label will be added to the issue.
      
      ![image](https://github.com/user-attachments/assets/9856a15f-3e72-4098-a23c-51e5734ba425)
    - If it fails, a comment will be provided with information as to the cause of the problem.  The problem must be resolved in order to proceed with the process.  In the example below, this member does not exist in the organization.
      ![image](https://github.com/user-attachments/assets/75b88674-617c-4ded-9603-987e9762ec16)
       - If the problem is with any of the required fields, please update them.  Upon saving, the Issue wil be re-validated automatically.
       - If the problem lies elsewhere and upon resolving the problem, please enter a new comment with the command `.validate`.  This will re-validate the Issue.
7. Once the Issue has been validated and is ready to be submitted for review, enter a new comment in the Issue with the message `.submit`.  Then, click the `Comment` button.
    ![image](https://github.com/user-attachments/assets/6b8b2a93-d70a-464d-adf6-68c0fd981136)
8. A new comment will be added notifiing the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) that the Issue is pending review.  Also, the Issue will be assigned a `submitted` label.
   
    ![image](https://github.com/user-attachments/assets/3d240bb3-a2dc-44aa-b8d5-f63963b27a28)
9. Once submitted for review, the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) will `approve` or `deny` the request.
    - If approved, a GitHub Action will process the request.  Afterwards, a comment will be added to the Issue notifiying the process completed successfully.  The Issue will be closed and an `approved` label will be added to the Issue.
   
    ![image](https://github.com/user-attachments/assets/eaec8523-572f-429e-ab7c-009b7f9f23f8)
    - If denied,  a comment will be added to the Issue noting the request was denied.  The Issue will be closed and a `denied` label will be added to the Issue.  The [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) may provide reasons for the denial.  Be sure to look for comments that may have been provided.
    ![image](https://github.com/user-attachments/assets/57c66365-49fe-4e90-95f4-2d489a42e70b)
11. Regardless of the result, the `Add Member To Team` request is now complete.
