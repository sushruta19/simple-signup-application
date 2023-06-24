# Simple Signup Application
This is a simple Node.js Web Application that demonstrates how to send POST **requests** to store user data on Mailchimp servers and process the **response** we get from the Mailchimp server.

## Features
- Simple signup application that collects user data and sends it to Mailchimp servers via the Mailchimp API.
- Built with Express.js, a popular Node.js framework for creating web applications.

## Directory Structure
The application follows a directory structure that organizes the files as follows:
- `server.js`: This is the main file for server-side code responsible for setting up the server and handling the client and API requests.
- `package.json` and `package-lock.json`: These files contain information about the application's dependencies and metadata.
- `views/`: This directory contains the application's HTML files to be displayed.
    - `signup.html`, `success.html`, and `failure.html` are HTML files sent by the          server to display the appropriate response to the user.
- `public/`: This directory stores static assets such as images and CSS files required by the HTML pages


## How to run the project in your local system?
- First make sure that you have node and git installed in your system.
- Clone the repository to your local machine
```bash
git clone https://github.com/sushruta19/simple-signup-application.git
```
- Navigate to the `simple-signup-application` directory
```bash
cd simple-signup-application
```
- Install the required dependencies by running the following command:
```bash
npm install
```
- Once the dependencies are installed, start the server by running the command
```bash
npm start
```
- This will start our application. Our server is running at `localhost:3000`.
- Open a web browser and visit http://localhost:3000 to access the Signup-Page application.
- You will see the `signup.html` file being rendered.

### How to find out the data you collected?
- Please open a free mailchimp account and get the API keys and list ID(or Audience ID).
- Open the server.js file and replace the `MAILCHIMP_API_KEY`, `LIST_ID` and `DC` with yours (_`DC` is the characters after the hyphen`-` in your API Key_).
- Save the changes and start the application.
- Fill the signup form. You shall see the details in your audience list in your mailchimp account.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements for the Signup-Application, please do the following steps : 
- **Fork** the repository. <br>![Fork Icon](https://i.imgur.com/an7hXVR.png)
- **Clone** the repository: Clone the forked repository to your local machine using the following command:
```bash
git clone <forked-repo-url>
```
This will create a local copy of the project that you can work on.
- **Create a new branch**: Before making any changes, create a new branch to work on your changes. Naming the branch based on the feature or bug fix you're working on is a good practice. For example:
```bash
git checkout -b improvement/ui-refactoring  #for improvements
git checkout -b bugfix/login-issue          #for bugfix
git checkout -b feature/user-registration   #for new features
git checkout -b hotfix/security-vulnerable  #for hotfix
```
Here the slash(/) doesn't denote any address but its a part of the new branch name "bugfix/anything", etc.
- **Make your changes**: Make the necessary changes or additions to the project
- Stage, commit and push your changes to **your** remote forked repo at the new branch(not the master branch of your remote forked repo)
```bash
git add .
git commit -m "Add a concise commit message describing the changes"
git push origin <new-branch-you-worked-on>
```
- **Create a pull request**: Then, from your forked repository's page on GitHub, click on the "New pull request" button to create a pull request (PR) to the original repository. Provide a clear description of the changes you've made and why they are valuable. It's also helpful to reference any relevant issues or feature requests.
- The project maintainers or other contributors may provide feedback or request changes on your pull request. Be responsive and address the feedback accordingly. This may involve making additional commits to your branch based on the feedback.
- Once your pull request is approved, the project maintainers will merge your changes into the main branch. At this point, your contributions are part of the project.

Please make sure to follow these guidelines to ensure a smooth and collaborative contribution process. If you have any questions or need further assistance, feel free to reach out to us.

Thank you for your contribution!
## License
This project is licensed under the [MIT License]("./LICENSE")