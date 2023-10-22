const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    ip: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    headers: {
      type: Object,
    },
    body: {
      type: Object,
    },
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
