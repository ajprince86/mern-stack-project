const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Exercise = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("exercises", Exercise);
