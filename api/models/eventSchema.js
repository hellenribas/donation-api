const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  initialDate: {
    type: Date,
    required: true,
  },
  finalDate: {
    type: Date,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  initialTime: {
    type: String,
    required: true,
  },
  finalTime: {
    type: String,
    required: true,
  },
  eventAddress: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Event", EventSchema);
