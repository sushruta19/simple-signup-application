// Importing the configuration file
const config = require("./config.json");

// Retrieving the API key, list ID and DC from the configuration
const MAILCHIMP_API_KEY = config.apiKey;
const LIST_ID = config.listID;
const DC = config.dc;  //characters after the hyphen in API key

// Import the required dependencies
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

// Create an instance of the Express application
let app = express();

// Middleware setup
// ----------------
// Parse incoming request bodies in a middleware before your handlers
// make use of it. Available under the `req.body` property.
app.use(bodyParser.urlencoded({extended:true}));

// Serve static files from the "public" directory
// This allows accessing static assets like CSS files, images, etc.
app.use(express.static("public"));

// Routes and Request Handling
// ---------------------------

// When a user accesses the root URL, the signup.html file will be served
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/signup.html");
});

// Handle the form submission(POST request) from user
app.post("/", function(req, res) {
  // Extract the form data from the request sent by user
  let fName = req.body.fName;
  let lName = req.body.lName;
  let email = req.body.email;

  // Prepare the data in format as given by Mailchimp API Documentation
  var data = {
    members: [
      {
        email_address : email,
        status : "subscribed",
        merge_fields : {
          FNAME : fName,
          LNAME : lName
        }
      }
    ]
  }
  //convert data object into JSON format
  var jsonData = JSON.stringify(data);

  // Configure the HTTP request options object
  var options = {
    url: `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}`,
    method : "POST",
    headers : {
      Authorization: `anystring ${MAILCHIMP_API_KEY}`
    },
    body : jsonData
  }
  
  // Send the HTTP request to Mailchimp
  request(options, function(error, response, body) {
    if(response.statusCode === 200) {
      // If the request is successful, send the success.html file
      res.sendFile(__dirname + "/views/success.html");
    }
    else {
      // If the request fails, log the status code and send the failure.html
      console.log(response.statusCode, error);
      res.sendFile(__dirname + "/views/failure.html");
    }
  });

});

// Redirect to the root URL after pressing the button on failure.html page
app.get("/failure", function(req, res) {
  res.redirect("/");
});

// Start the server and listen for incoming requests
app.listen(process.env.PORT || 3000, function() {
  console.log(`The server is running at port 3000`);
});
