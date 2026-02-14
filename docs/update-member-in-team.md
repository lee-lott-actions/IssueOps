# Update Member In Team

## How to Submit a Request

1. In the navigation menu at the top of the page, navigate to the **Issues** tab.
![image](https://github.com/user-attachments/assets/376f5d9d-80bf-4765-ad12-44eb570e5f28)
2. Click **New Issue**.
![image](https://github.com/user-attachments/assets/83b67a95-5ad7-40b8-a618-4909a58d6e43)
3. Select the `Update Member In Team` template.
![image](https://github.com/user-attachments/assets/4a89cd71-c89e-44e9-9ca0-1f91ca703657)
4. Fill out the template with the required details.
   - Title - Replace `<Enter User Name>` with the name of the new member. Replace `Enter Team Name` with the name of the organization team to which the member will be added.
   - Member Name - Provide the name of the GitHub Organzation member.
   - Team Name - Provide the name of the GitHub Organzation Team to which the member will be added.
   - Team Role - Select the role the member will have on the team.  If the member will need the ability to make changes to the team, select `Maintainer`, otherwise, select `Member`.
![image](https://github.com/user-attachments/assets/3c7042d4-7545-4c0c-93b0-2179d4f39579)
6. Click **Create**.
7. The Issue will now be created.  Upon creation, a GitHub Action will run to validate the fields.  It may take a few moments for the validation to complete.
    - If correct, a comment will be provided with instructions on how to submit the issue for review. Also, a validated label will be added to the issue.
   
      ![image](https://github.com/user-attachments/assets/69941323-d427-482e-b51c-d7fb0bd22d4e)
    - If it fails, a comment will be provided with information as to the cause of the problem.  The problem must be resolved in order to proceed with the process.  In the example below, this team does not exist in the organization.
      ![image](https://github.com/user-attachments/assets/9f576246-42dd-4bc3-8013-c988ee0aaf9a)
       - If the problem is with any of the required fields, please update them.  Upon saving, the Issue wil be re-validated automatically.
       - If the problem lies elsewhere and upon resolving the problem, please enter a new comment with the command `.validate`.  This will re-validate the Issue.
8. Once the Issue has been validated and is ready to be submitted for review, enter a new comment in the Issue with the message `.submit`.  Then, click the `Comment` button.
    ![image](https://github.com/user-attachments/assets/6b8b2a93-d70a-464d-adf6-68c0fd981136)
9. A new comment will be added notifiing the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) that the Issue is pending review.  Also, the Issue will be assigned a `submitted` label.
    ![image](https://github.com/user-attachments/assets/3d240bb3-a2dc-44aa-b8d5-f63963b27a28)
10. Once submitted for review, the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) will `approve` or `deny` the request.
    - If approved, a GitHub Action will process the request.  Afterwards, a comment will be added to the Issue notifiying the process completed successfully.  The Issue will be closed and an `approved` label will be added to the Issue.  Time to go enjoy the new repository.
    ![image](https://github.com/user-attachments/assets/e9beb671-5867-4a16-85ea-fea7dadc3aa7)
    - If denied,  a comment will be added to the Issue noting the request was denied.  The Issue will be closed and a `denied` label will be added to the Issue.  The [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) may provide reasons for the denial.  Be sure to look for comments that may have been provided.
    ![image](https://github.com/user-attachments/assets/57c66365-49fe-4e90-95f4-2d489a42e70b)
11. Regardless of the result, the `Update Member In Team` request is now complete.


