//Dependecies
const express = require("express");
const cors = require("cors");
const path = require("path");
const { Sequelize } = require("sequelize");
const app = express();

//Configuration and Middleware
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Controllers
const booksController = require("./controllers/books_controller");
app.use("/api/books", booksController);

//Listen
app.listen(4005, () => {
  console.log("Server is running on port 4005...");
});
