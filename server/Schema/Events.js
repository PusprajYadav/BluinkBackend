const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  
});

const EventModel = mongoose.model("Event", EventSchema);
module.exports = EventModel;
