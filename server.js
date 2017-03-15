var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Task = require('./Task')
var cors = require('cors');

require("dotenv").config({silent: true});
var DATABASE_URI = process.env.DATABASE_URI

var jsonParser = bodyParser.json()

var app = express()
app.use(cors());

//create new task
app.post("/task", jsonParser, function(req, res) {
  console.log("new task ", req.body.task);
  var newTask = new Task();
  newTask.name = req.body.name;
  newTask.end = req.body.end;
  newTask.description = req.body.description;
  newTask.createdBy = req.body.createdBy;
  newTask.save()
  .then(function(newTaskCreated) {
    return res.status(201).json(newTaskCreated);
  })
  .catch(function(err) {
    console.log("error: ", err);
    return res.status(500).json('Internal Server Error');
  });
});

//get all tasks
app.get("/task", function(req, res) {
  Task.find({}).exec()
  .then(function(tasks) {
    return res.status(200).json(tasks);
  })
  .catch(function(err) {
    console.log("error: ", err);
    return res.status(500).json('Internal Server Error');
  });
});

//update task
app.put("/task", function(req, res) {
  Task.findOneAndUpdate({_id: req._id},
  {})
})



mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URI || 'mongodb://<database name>')
.then(function() {
  var PORT = process.env.PORT || 8080
  app.listen(PORT)
  console.log("Server is listening on ", PORT)
}).catch(function(error) {
  console.log("Server error: ", error)
})
