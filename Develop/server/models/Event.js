 const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
     eventName: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    eventSummary: {
        type: String,
        required: true,
    },
    volunteers: {
        type: String,
    },
})

const Event = model("Event", eventSchema);

module.exports = Event;