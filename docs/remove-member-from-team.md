# Remove Member From Team

## How to Submit a Request

1. In the navigation menu at the top of the page, navigate to the **Issues** tab.
![image](https://github.com/user-attachments/assets/51399269-652f-4cf4-96f7-be78ddfbcb46)
2. Click **New Issue**.
![image](https://github.com/user-attachments/assets/a14ab8a9-f912-486a-ad32-016c012371c0)
3. Select the `Remove Member From Team` template.
![image](https://github.com/user-attachments/assets/8809d21f-5f8f-46e1-824b-f9b13a538b7e)
4. Fill out the template with the required details.
   - Title - Replace `<Enter User Name>` with the name of the new member. Replace `Enter Team Name` with the name of the organization team to which the member will be added.
   - Member Name - Provide the name of the GitHub Organzation member.
   - Team Name - Provide the name of the GitHub Organzation Team to which the member will be added.
![image](https://github.com/user-attachments/assets/c736daac-2920-4e18-bec1-be1ae33a8433)
5. Click **Create**.
6. The Issue will now be created.  Upon creation, a GitHub Action will run to validate the fields.  It may take a few moments for the validation to complete.
    - If correct, a comment will be provided with instructions on how to submit the issue for review. Also, a validated label will be added to the issue.
      
      ![image](https://github.com/user-attachments/assets/8825967d-196b-4786-96f0-4a1d2fd96ada)
    - If it fails, a comment will be provided with information as to the cause of the problem.  The problem must be resolved in order to proceed with the process.  In the example below, this team does not exist in the organization.
      ![image](https://github.com/user-attachments/assets/a5926956-9705-477c-ac7d-d73e26344ba9)
       - If the problem is with any of the required fields, please update them.  Upon saving, the Issue wil be re-validated automatically.
       - If the problem lies elsewhere and upon resolving the problem, please enter a new comment with the command `.validate`.  This will re-validate the Issue.
8. Once the Issue has been validated and is ready to be submitted for review, enter a new comment in the Issue with the message `.submit`.  Then, click the `Comment` button.
    ![image](https://github.com/user-attachments/assets/2c122636-cc61-42fb-bf4d-01115e7a6c06)
9. A new comment will be added notifiing the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) that the Issue is pending review.  Also, the Issue will be assigned a `submitted` label.
    ![image](https://github.com/user-attachments/assets/417bf6e0-6557-4d40-a3fc-d616eaca9992)
10. Once submitted for review, the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) will `approve` or `deny` the request.
    - If approved, a GitHub Action will process the request.  Afterwards, a comment will be added to the Issue notifiying the process completed successfully.  The Issue will be closed and an `approved` label will be added to the Issue.  Time to go enjoy the new repository.
    ![image](https://github.com/user-attachments/assets/f2a1df76-069f-4cb5-84ec-5ae2c126f204)
    - If denied,  a comment will be added to the Issue noting the request was denied.  The Issue will be closed and a `denied` label will be added to the Issue.  The [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) may provide reasons for the denial.  Be sure to look for comments that may have been provided.
    ![image](https://github.com/user-attachments/assets/7f2d3c5b-f324-429f-8bf5-03a96db3bd86)
11. Regardless of the result, the `Remove Member From Team` request is now complete.

