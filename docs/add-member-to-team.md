# Add Member To Team

## How to Submit a Request

1. In the navigation menu at the top of the page, navigate to the **Issues** tab.
![image](https://github.com/user-attachments/assets/51399269-652f-4cf4-96f7-be78ddfbcb46)
2. Click **New Issue**.
![image](https://github.com/user-attachments/assets/a14ab8a9-f912-486a-ad32-016c012371c0)
3. Select the `Add Member To Team` template.
![image](https://github.com/user-attachments/assets/c2446fde-9008-43bd-b7bd-60c0c005122a)
4. Fill out the template with the required details.
   - Title - Replace `<Enter User Name>` with the name of the new member. Replace `Enter Team Name` with the name of the organization team to which the member will be added.
   - Member Name - Provide the name of the GitHub Organzation member.
   - Team Name - Provide the name of the GitHub Organzation Team to which the member will be added.
   - Team Role - Select the role the member will have on the team.  If the member will need the ability to make changes to the team, select `Maintainer`, otherwise, select `Member`.
![image](https://github.com/user-attachments/assets/a069cbd7-5351-4001-b304-3f938c2aeb65)
5. Click **Create**.
6. The Issue will now be created.  Upon creation, a GitHub Action will run to validate the fields.  It may take a few moments for the validation to complete.
    - If correct, a comment will be provided with instructions on how to submit the issue for review. Also, a validated label will be added to the issue.
      ![image](https://github.com/user-attachments/assets/b6c25c99-41cd-4159-b676-d7c506c6d311)
    - If it fails, a comment will be provided with information as to the cause of the problem.  The problem must be resolved in order to proceed with the process.  In the example below, this member does not exist in the organization.
      ![image](https://github.com/user-attachments/assets/c014f954-55ee-4496-a346-cf2ab8f3c52d)
       - If the problem is with any of the required fields, please update them.  Upon saving, the Issue wil be re-validated automatically.
       - If the problem lies elsewhere and upon resolving the problem, please enter a new comment with the command `.validate`.  This will re-validate the Issue.
7. Once the Issue has been validated and is ready to be submitted for review, enter a new comment in the Issue with the message `.submit`.  Then, click the `Comment` button.
    ![image](https://github.com/user-attachments/assets/2c122636-cc61-42fb-bf4d-01115e7a6c06)
8. A new comment will be added notifiing the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) that the Issue is pending review.  Also, the Issue will be assigned a `submitted` label.
    ![image](https://github.com/user-attachments/assets/417bf6e0-6557-4d40-a3fc-d616eaca9992)
9. Once submitted for review, the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) will `approve` or `deny` the request.
    - If approved, a GitHub Action will process the request.  Afterwards, a comment will be added to the Issue notifiying the process completed successfully.  The Issue will be closed and an `approved` label will be added to the Issue.  Time to go enjoy the new repository.
    ![image](https://github.com/user-attachments/assets/f8187979-b76b-4f17-911a-9998dfcd538d)
    - If denied,  a comment will be added to the Issue noting the request was denied.  The Issue will be closed and a `denied` label will be added to the Issue.  The [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) may provide reasons for the denial.  Be sure to look for comments that may have been provided.
    ![image](https://github.com/user-attachments/assets/7f2d3c5b-f324-429f-8bf5-03a96db3bd86)
10. Regardless of the result, the `Add Member To Team` request is now complete.
