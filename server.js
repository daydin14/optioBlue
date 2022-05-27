require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const methodOverride = require("method-override");
const PORT = 3000;
const app = express();

app.listen(PORT);