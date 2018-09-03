const dotenv = require('dotenv');
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const nodemon = require("nodemon");
const request = require("request");
const sqlite = require("sqlite3");
const twit = require("twit")


//--EXPRESS CONFIG  --//
const app = express();


//--PACKAGE CONFIG --//
dotenv.config();
app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));

//--TWITTER API CONFIG --//

const twitterTokens = {
    consumer_key : process.env.TWITTER_API_KEY,
    consumer_secret : process.env.TWITTER_SECRET_KEY,
    access_token : process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret : process.env.TWITTER_ACCESS_SECRET
}
const twitterURL = "https://api.twitter.com/1.1/search/tweets.json?q=";
const T = new twit(twitterTokens);

//-- WATSON API CONFIG --//
const watsonCredential = process.env.WATSON_CREDENTIAL;
const watsonURL = process.env.WATSON_URL;


//-- TWITTER CALLS --//
const search = "#Lakers";
const params = {
    q: search,
    count: 25
}

T.get("/search/tweets", params, function(err, result){
    const responseText = []
    if (err){
        console.log(err);
    }
    console.log(result);
})