const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    subject: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
