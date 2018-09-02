const dotenv = require('dotenv');
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const nodemon = require("nodemon");
const request = require("request");
const sqlite = require("sqlite3");


//--EXPRESS CONFIG  --//
const app = express();


//--PACKAGE CONFIG --//
dotenv.config();
app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));