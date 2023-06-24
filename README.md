# Signup-Application
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
- You will see the signup.html file being rendered.

### How to find out the data you collected?
- Please open a free mailchimp account and get the API keys and list ID(or Audience ID).
- Open the server.js file and replace the `MAILCHIMP_API_KEY`, `LIST_ID` and `DC` with yours (_`DC` is the characters after the hyphen`-` in your API Key_).
- Save the changes and start the application.
- Fill the signup form. You shall see the details in your audience list in your mailchimp account.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements for the Signup-Application, please do the following steps : 


## License
This project is licensed under the MIT License.