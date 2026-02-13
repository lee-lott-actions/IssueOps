
# Add Team To Organization

## How to Submit a Request

1. In the navigation menu at the top of the page, navigate to the **Issues** tab.
![image](https://github.com/user-attachments/assets/376f5d9d-80bf-4765-ad12-44eb570e5f28)
2. Click **New Issue**.
![image](https://github.com/user-attachments/assets/83b67a95-5ad7-40b8-a618-4909a58d6e43)
3. Select the `Add Team To Organization` template.
![image](https://github.com/user-attachments/assets/a9518808-9580-4bf3-9f5b-dbb1f6500646)
4. Fill out the template with the required details.
   - Title - Replace `<Enter Team Name>` with the name of the new team.
   - Team Name - Provide the name of the new GitHub Organzation team.
   - Description - Provide a brief description of the new team.
![image](https://github.com/user-attachments/assets/3d46192f-8d31-40ad-839c-ea3f1d6d5512)
5. Click **Create**.
7. The Issue will now be created.  Upon creation, a GitHub Action will run to validate the fields.  it may take a few moments for the validation to complete.
    - If correct, a comment will be provided with instructions on how to submit the issue for review. Also, a validated label will be added to the issue.
      ![image](https://github.com/user-attachments/assets/22e7d4ac-713f-4b37-97ca-f3b82bd0b410)
    - If it fails, a comment will be provided with information as to the cause of the problem.  The problem must be resolved in order to proceed with the process.  In the example below, the team does not exist.
      ![image](https://github.com/user-attachments/assets/ad03d0a4-83ce-4ecc-adea-6f897097b040)
       - If the problem is with any of the required fields, please update them.  Upon saving, the Issue wil be re-validated automatically.
       - If the problem lies elsewhere and upon resolving the problem, please enter a new comment with the command `.validate`.  This will re-validate the Issue.
8. Once the Issue has been validated and is ready to be submitted for review, enter a new comment in the Issue with the message `.submit`.  Then, click the `Comment` button.
    ![image](https://github.com/user-attachments/assets/2c122636-cc61-42fb-bf4d-01115e7a6c06)
9. A new comment will be added notifiing the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) that the Issue is pending review.  Also, the Issue will be assigned a `submitted` label.
    ![image](https://github.com/user-attachments/assets/417bf6e0-6557-4d40-a3fc-d616eaca9992)
10. Once submitted for review, the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) will `approve` or `deny` the request.
    - If approved, a GitHub Action will process the request.  Afterwards, a comment will be added to the Issue notifiying the process completed successfully.  The Issue will be closed and an `approved` label will be added to the Issue.  Time to go enjoy the new repository.
    ![image](https://github.com/user-attachments/assets/40263564-3c1b-453a-81b4-5cf2b4d328cc)
    - If denied,  a comment will be added to the Issue noting the request was denied.  The Issue will be closed and a `denied` label will be added to the Issue.  The [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) may provide reasons for the denial.  Be sure to look for comments that may have been provided.
    ![image](https://github.com/user-attachments/assets/7f2d3c5b-f324-429f-8bf5-03a96db3bd86)
11. Regardless of the result, the `Add Team To Organization` request is now complete.
