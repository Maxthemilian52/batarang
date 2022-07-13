const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
     eventName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    voulunteers: {
        type: String,
    },
})

const Event = model("Event", eventSchema);

module.exports = Event;