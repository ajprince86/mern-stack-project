const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: { type: String, required: true },
    current_height: { type: String, required: true },
    current_weight: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(`users`, User);
