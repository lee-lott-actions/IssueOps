# Rename A Repository

## How to Submit a Request

1. In the navigation menu at the top of the page, navigate to the **Issues** tab.
![image](https://github.com/user-attachments/assets/51399269-652f-4cf4-96f7-be78ddfbcb46)
2. Click **New Issue**.
![image](https://github.com/user-attachments/assets/a14ab8a9-f912-486a-ad32-016c012371c0)
3. Select the `Rename A Repository` template.
![image](https://github.com/user-attachments/assets/a102c0f1-44df-4d7e-a055-a9795b74ba74)
4. Fill out the template with the required details.
   - Title - Replace `<Enter Current Repository Name>` with the name of the repository to be renamed.  Replace `<Enter New Repository Name>` with the name the will now be called.
   - Current Repository Name - Provide the name of the repository to be renamed.
   - New Repository Name - Provide the new name the repository will be called.
![image](https://github.com/user-attachments/assets/5c08c844-5a97-4069-a6db-1c2ea4bd7b48)
5. Click **Create**.
6. The Issue will now be created.  Upon creation, a GitHub Action will run to validate the fields.  It may take a few moments for the validation to complete.
    - If correct, a comment will be provided with instructions on how to submit the issue for review. Also, a validated label will be added to the issue.
      ![image](https://github.com/user-attachments/assets/a621fd80-c4de-441d-9316-706c328b0f51)
    - If it fails, a comment will be provided with information as to the cause of the problem.  The problem must be resolved in order to proceed with the process.  In the example below, the repository to rename does not exist.
      ![image](https://github.com/user-attachments/assets/2167900f-531b-4943-af99-9b31cc4e4c03)
       - If the problem is with any of the required fields, please update them.  Upon saving, the Issue wil be re-validated automatically.
       - If the problem lies elsewhere and upon resolving the problem, please enter a new comment with the command `.validate`.  This will re-validate the Issue.
7. Once the Issue has been validated and is ready to be submitted for review, enter a new comment in the Issue with the message `.submit`.  Then, click the `Comment` button.
    ![image](https://github.com/user-attachments/assets/2c122636-cc61-42fb-bf4d-01115e7a6c06)
8. A new comment will be added notifiing the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) that the Issue is pending review.  Also, the Issue will be assigned a `submitted` label.
    ![image](https://github.com/user-attachments/assets/417bf6e0-6557-4d40-a3fc-d616eaca9992)
9. Once submitted for review, the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) will `approve` or `deny` the request.
    - If approved, a GitHub Action will process the request.  Afterwards, a comment will be added to the Issue notifiying the process completed successfully.  The Issue will be closed and an `approved` label will be added to the Issue.  Time to go enjoy the new repository.
    ![image](https://github.com/user-attachments/assets/83930d6f-9c53-4fba-8764-9ee6f055547f)
    - If denied,  a comment will be added to the Issue noting the request was denied.  The Issue will be closed and a `denied` label will be added to the Issue.  The [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) may provide reasons for the denial.  Be sure to look for comments that may have been provided.
    ![image](https://github.com/user-attachments/assets/7f2d3c5b-f324-429f-8bf5-03a96db3bd86)
10. Regardless of the result, the `Rename A Repository` request is now complete.
