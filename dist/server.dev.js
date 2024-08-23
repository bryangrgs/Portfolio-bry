"use strict";

var express = require("express");

var router = express.Router();

var cors = require("cors");

var nodemailer = require("nodemailer"); // server used to send send emails


var app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, function () {
  return console.log("Server Running");
});
var contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "********@gmail.com",
    pass: ""
  }
});
contactEmail.verify(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});
router.post("/contact", function (req, res) {
  var name = req.body.firstName + req.body.lastName;
  var email = req.body.email;
  var message = req.body.message;
  var phone = req.body.phone;
  var mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: "<p>Name: ".concat(name, "</p>\n           <p>Email: ").concat(email, "</p>\n           <p>Phone: ").concat(phone, "</p>\n           <p>Message: ").concat(message, "</p>")
  };
  contactEmail.sendMail(mail, function (error) {
    if (error) {
      res.json(error);
    } else {
      res.json({
        code: 200,
        status: "Message Sent"
      });
    }
  });
});