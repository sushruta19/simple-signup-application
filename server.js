//it is my API key, List ID and dc. Replace it with yours.
const MAILCHIMP_API_KEY = "7a11f318b2f22e09fd3a414df8560b2c-us21";
const LIST_ID = "e43ade486f";
const DC = "us21";  //characters after the hyphen in API key

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/signup.html");
});

app.post("/", function(req, res) {
  let fName = req.body.fName;
  let lName = req.body.lName;
  let email = req.body.email;

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
  var jsonData = JSON.stringify(data);

  var options = {
    url: `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}`,
    method : "POST",
    headers : {
      Authorization: `jj ${MAILCHIMP_API_KEY}`
    },
    body : jsonData
  }
  
  request(options, function(error, response, body) {
    if(response.statusCode === 200) {
      res.sendFile(__dirname + "/views/success.html");
    }
    else {
      console.log(response.statusCode);
      res.sendFile(__dirname + "/views/failure.html");
    }
  });

});

app.get("/failure", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log(`The server is running at port 3000`);
});
