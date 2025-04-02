# Candidate Search
  ![License](https://img.shields.io/badge/License-MIT-blue.svg)

  ## Description
The Candidate Search Application is a dynamic React project enhanced with TypeScript that empowers employers to quickly and reliably review candidate profiles sourced from the GitHub API. By leveraging a custom API endpoint to retrieve GitHub user data, the application displays key information including the candidate's name, username, location, avatar, email, GitHub profile URL, and company. Employers can easily save promising candidates by clicking the "+" button, skip profiles with the "-" button, and view a persisted list of accepted candidates. As a bonus, additional features like sorting and filtering potential candidates may be implemented to further streamline the hiring process.

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Screenshots](#screenshots)
  - [Walkthrough Video](#walkthrough-video)
  - [URL Link](#url-link)
  - [Contributing](#contributing)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  
  1. Git clone: git@github.com:Treevyy/Candidate-Search.git

  2. Navigate to the project directory: cd Candidate-Search

  3. Right click the root package.json file and click open in integrated terminal

  4. Inside the terminal install the dependencies with the command: npm i

  5. After dependencies are installed build the application with the command: npm run build

  6. After the build is finished run the command: npm run dev

  7. Set Up Environment Variables in your .env file

  8. Create a .env file in the environment folder (or in the project root if instructed).

  9. Generate a GitHub Personal Access Token (with default permissions) by following the instructions on creating a fine-grained token.

  10. Add your token to the .env file as follows: VITE_GITHUB_TOKEN=your_personal_access_token_here

  11. Deploy to Render (Optional):
For deployment, follow the Render documentation on setting environment variables and deploying a full-stack application.

  ## Usage
  To run the Candidate Search:

  1. Start the development server (commonly via Vite) with: npm run dev

  2. When the candidate search page loads, it displays one candidate's details (name, username, location, avatar, email, GitHub profile URL, and company).

  3. Click the "+" button to save the current candidate and load the next candidate’s information.

  4. Click the "- button" to skip the current candidate without saving and display the next candidate.

  5. View the list of saved candidates, which persists via local storage.

  6. If no candidates have been saved or if there are no candidates available to review, the application will display an appropriate message.

  7. Optionally, sort and filter the list of potential candidates to further refine your hiring process.

  ## Technologies
 

 ![Vite Badge](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

 ![npm Badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

 ![TypeScript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

 ![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

 ![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

 ![VSCode Badge](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
 
  ## Screenshots
  
  <img src="assets/Screenshot 2025-04-01 233331.png" alt="Photo of the home page" width="600" style="margin-bottom: 20px;">

  <img src="assets/Screenshot 2025-04-01 233411.png" alt="Photo of the home page" width="600" style="margin-bottom: 20px;">

  ## Walkthrough Video
  A demo of the application can be found at the following link: No walkthrough video is needed.

  ## URL Link
  Here is the URL Link to the application: https://candidate-search-fgfk.onrender.com/
  
  ## Contributing
  No contributions are needed for this project

  ## Contributors
  Thank you to all the Professor, TA's and tutors for your help making this application!

  1. Trevor Moore aka Treevyy

  2. Quentin Jones - TA

  3. Charlie Puente - TA

  4. Dan Mueller - Professor

  ## Tests
  
  1. Make sure the latest version of node is installed, check by using the command: node -v in your terminal

  2. Start the development server using: npm run dev

  3. Verifying that the candidate search page loads with the correct candidate details.

  4. Using the "+" and "-" buttons to save or skip candidates.

  5. Checking that the list of saved candidates persists after page reloads.

  6. Confirming that appropriate messages are displayed when no more candidates are available or when no candidates have been accepted.

  ## License
  This project is licensed under the MIT license.

  ## Questions
  If you have any additonal questions, you can contact me at:
  - GitHub: [Treevyy](https://github.com/Treevyy)
  - Email: [aarontrevormoore@gmail.com](mailto:aarontrevormoore@gmail.com)
