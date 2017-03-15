var mongoose = require('mongoose')

var taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  end: {
    type: Date,
    default: Date(Date.now + (1000*60*60*24))
  },
  description: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: String,
    required: true
  }
})

var Task = mongoose.model('Task', taskSchema)
module.exports = Task
