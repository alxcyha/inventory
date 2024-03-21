const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema({
  item: mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  }),
  deliver: {
    departure: {
      type: Date,
      required: true,
    },
    delivery: {
      type: Date,
      required: true,
    },
  },
  employee: {
    name: {
      type: String,
      required: true,
    },
    emp_number: {
      type: Number,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Sales", SalesSchema);
