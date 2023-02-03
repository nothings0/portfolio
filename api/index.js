const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const port = 3000;
dotenv.config();

const ContactModel = require("./models/ContactModel");
const ProjectModel = require("./models/ProjectModel");

app.use(cors());
app.use(express.json());

app.get("/project", async (req, res, next) => {
  try {
    const data = await ProjectModel.find({});
    return res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, subject } = req.body;
    const newContact = new ContactModel({ name, email, subject });
    await newContact.save();
    return res.status(200).json({ success: true, msg: "send conact success" });
  } catch (err) {
    console.log(err);
  }
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

app.listen(port, () => {
  connect();
  console.log("server listen on port::", port);
});
