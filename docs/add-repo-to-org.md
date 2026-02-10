# Add Repository To Organization

## How to Submit a Request

1. In the navigation menu at the top of the page, navigate to the **Issues** tab.
![image](https://github.com/user-attachments/assets/376f5d9d-80bf-4765-ad12-44eb570e5f28)
2. Click **New Issue**.
![image](https://github.com/user-attachments/assets/83b67a95-5ad7-40b8-a618-4909a58d6e43)
3. Select the `Add Repository To Organization` template.
![image](https://github.com/user-attachments/assets/95c09a6e-aea1-4fd4-a3ab-70990d23a271)
4. Fill out the template with the required details.
   - Title - Replace `<Enter Repository Name>` with the name of the new repository.
   - Repository Name - Provide the name of the new repository.
   - Repository Description - Provide a brief description as to the purpose of the new repository.
   - Template Repository - Provide the name of the repository on which to base the new repository.
   - Is Repository a Template Repository? - Select Yes/No to mark the repository as a template repository.
![image](https://github.com/user-attachments/assets/bc99d904-ffa5-4654-8d86-9d03eb8894e7)
5. Click **Create**.
6. The Issue will now be created.  Upon creation, a GitHub Action will run to validate the fields.  It may take a few moments for the validation to complete.
    - If correct, a comment will be provided with instructions on how to submit the issue for review. Also, a validated label will be added to the issue.
      
      ![image](https://github.com/user-attachments/assets/15d6604c-67dd-449d-bfdc-eba9780a1525)
    - If it fails, a comment will be provided with information as to the cause of the problem.  The problem must be resolved in order to proceed with the process.  In the example below, the repository is not a valid template repository.
      ![image](https://github.com/user-attachments/assets/e6dbf352-3ffb-4c4f-a5ee-266d5c007f18)
       - If the problem is with any of the required fields, please update them.  Upon saving, the Issue wil be re-validated automatically.
       - If the problem lies elsewhere and upon resolving the problem, please enter a new comment with the command `.validate`.  This will re-validate the Issue.
7. Once the Issue has been validated and is ready to be submitted for review, enter a new comment in the Issue with the message `.submit`.  Then, click the `Comment` button.   
    ![image](https://github.com/user-attachments/assets/6b8b2a93-d70a-464d-adf6-68c0fd981136)
8. A new comment will be added notifiing the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) that the Issue is pending review.  Also, the Issue will be assigned a `submitted` label.
    
    ![image](https://github.com/user-attachments/assets/3d240bb3-a2dc-44aa-b8d5-f63963b27a28)
9. Once submitted for review, the [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) will `approve` or `deny` the request.
    - If approved, a GitHub Action will process the request.  Afterwards, a comment will be added to the Issue notifiying the process completed successfully.  The Issue will be closed and an `approved` label will be added to the Issue.  Time to go enjoy the new repository.
    
    ![image](https://github.com/user-attachments/assets/7ff394a2-7059-49b0-a267-e0a2404c0c9d)
    - If denied,  a comment will be added to the Issue noting the request was denied.  The Issue will be closed and a `denied` label will be added to the Issue.  The [IssueOps Approvers Team](https://github.com/orgs/lee-lott-actions/teams/issue-ops-approvers) may provide reasons for the denial.  Be sure to look for comments that may have been provided.
      
    ![image](https://github.com/user-attachments/assets/57c66365-49fe-4e90-95f4-2d489a42e70b)
10. Regardless of the result, the `Add Repository To Organization` request is now complete.
