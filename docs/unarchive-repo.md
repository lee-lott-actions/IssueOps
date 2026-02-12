# Unarchive A Repository

## How to Submit a Request

1. In the navigation menu at the top of the page, navigate to the **Issues** tab.
![image](https://github.com/user-attachments/assets/376f5d9d-80bf-4765-ad12-44eb570e5f28)
2. Click **New Issue**.
![image](https://github.com/user-attachments/assets/83b67a95-5ad7-40b8-a618-4909a58d6e43)
3. Select the `Unarchive A Repository` template.
![image](https://github.com/user-attachments/assets/616a22e4-e06e-4a9f-bd1b-fb7f32f73528)
4. Fill out the template with the required details.
   - Title - Replace `<Enter Repository Name>` with the name of the repository to be unarchived.
   - Repository Name - Provide the name of the repository to be unarchived.
   - Reason For Archiving - Provide a brief description as to why the repository should be unarchived.
![image](https://github.com/user-attachments/assets/ceabee1e-018f-492b-b1e0-8018548eea67)
5. Click **Create**.
6. The Issue will now be created.  Upon creation, a GitHub Action will run to validate the fields.  It may take a few moments for the validation to complete.
    - If correct, a comment will be provided with instructions on how to submit the issue for review.  Also, a `validated` label will be added to the issue.
      ![image](https://github.com/user-attachments/assets/40958c56-c893-4696-ad92-f5eb3600440a)
    - If it fails, a comment will be provided with information as to the cause of the problem.  The problem must be resolved in order to proceed with the process.  In the example below, the fields in the template were left blank.
      ![image](https://github.com/user-attachments/assets/6dc4154a-6e53-40a8-aff6-ece66c13231f)
       - If the problem is with any of the required fields, please update them.  Upon saving, the Issue wil be re-validated automatically.
       - If the problem lies elsewhere and upon resolving the problem, please enter a new comment with the command `.validate`.  This will re-validate the Issue.
8. Once the Issue has been validated and is ready to be submitted for review, enter a new comment in the Issue with the message `.submit`.  Then, click the `Comment` button.
    ![image](https://github.com/user-attachments/assets/6b8b2a93-d70a-464d-adf6-68c0fd981136)
9. A new comment will be added notifiing the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) that the Issue is pending review.  Also, the Issue will be assigned a `submitted` label.
    ![image](https://github.com/user-attachments/assets/3d240bb3-a2dc-44aa-b8d5-f63963b27a28)
10. Once submitted for review, the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) will `approve` or `deny` the request.
    - If approved, a GitHub Action will process the request.  Afterwards, a comment will be added to the Issue notifiying the process completed successfully.  The Issue will be closed and an `approved` label will be added to the Issue.  Time to go enjoy the new repository.
    ![image](https://github.com/user-attachments/assets/39dc83ce-e9d8-4cc8-b7f3-b65e6e54e33d)
    - If denied,  a comment will be added to the Issue noting the request was denied.  The Issue will be closed and a `denied` label will be added to the Issue.  The [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) may provide reasons for the denial.  Be sure to look for comments that may have been provided.
    ![image](https://github.com/user-attachments/assets/57c66365-49fe-4e90-95f4-2d489a42e70b)
11. Regardless of the result, the `Unarchive A Repository` request is now complete.
