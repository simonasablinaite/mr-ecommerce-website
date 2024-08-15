const port = 7000;
const express = require("express");
const app = express();
const mogoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(express.json());
app.use(cors());

// DB connetion with MongoDB:
mongoose.connect("mongodb+srv://MR:duomeNysMdB22@cluster0.adl5x.mongodb.net/ecommerce");

// API creation:
app.get("/", (req, res) => {
   res.send("Express programa veikia");
});

app.listen(port, (error) => {
   if (!error) {
      console.log("Serveris sukasi ant " + port + " porto");
   } else {
      console.log("Error: " + error);
   }
});
