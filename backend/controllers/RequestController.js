// Require the necessary packages
const express = require("express");
const router = express.Router();

// Require the necessary models
const Request = require("../models/Request");

// get any method to /:id
router.all("/:id", async (req, res) => {
  // Get the id from the url
  const id = req.params.id;

  // Get the ip address from the request
  const ip = req.ipAddress;

  // Get the method from the request
  const method = req.method;

  // Get the url from the request
  const url = req.url;

  // Get the headers from the request
  var headers = req.headers;

  // Convert headers to object for easier manipulation and so we don't modify the original headers
  headers = Object.assign({}, headers);

  // Get the body from the request
  var body = req.body;

  // Convert body to object for easier manipulation and so we don't modify the original body
  body = Object.assign({}, body);

  // Create the request
  const request = new Request({
    id: id,
    ip: ip,
    method: method,
    url: url,
    headers: headers,
    body: body,
  });

  // Save the request
  request.save();

  // Send the response
  res.send({
    success: true,
    message: "Request logged successfully",
  });
});

// Return router
module.exports = router;
