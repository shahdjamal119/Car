var express = require("express");
var app = express();
var db = require("./db");
var cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
var bodyParserurl = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
const { response } = require("express");


app.post("/user", bodyParserurl, function (req, res) {
    var userDetails = req.body;
   
    var sql = "INSERT INTO car SET ?";
    db.connection.query(sql, userDetails, function (err, data) {
        if (err) throw err
        console.log(err);
        console.log(" signup successfully ");
    });
});
app.listen(3000, () => {
    console.log("Server run in port 3000");
});



