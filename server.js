var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var cors = require('cors');

require("dotenv").config({silent: true});
var DATABASE_URI = process.env.DATABASE_URI

var jsonParser = bodyParser.json()

var app = express()
app.use(cors());


mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URI || 'mongodb://<database name>')
.then(function() {
  var PORT = process.env.PORT || 8080
  app.listen(PORT)
  console.log("Server is listening on ", PORT)
}).catch(function(error) {
  console.log("Server error: ", error)
})
