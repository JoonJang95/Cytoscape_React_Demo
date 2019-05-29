const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Middleware

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

// Set Up Port Number

const port = process.env.PORT || 9000;

//REST API endpoints

//Start the Node web server

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
