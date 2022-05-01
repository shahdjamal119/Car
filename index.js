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
app.get('/user',async(req,res)=>{
    console.log("access");
    let [result,rows] = await db.db.connection.execute("SELECT * FROM car");
    response.status(200).json(result);
});
app.delete('/user',async(req,res)=>
{
    console.log(req.body);
    let sql = "DELETE FROM car WHERE id =?";
    let result1=await db.connection.execute(sql,[req.body.id]);
    res.status(200).json("row deleted");
})
app.put( '/user',async(req,res)=>{  
        console .log(req.body);
       let sql = "UPDATE car SET WHERE id = ? , can_be_return = ? ,year = ?, model = ?,  price = ? , color = ?  State =? "
       let result = await db.connection.execute(sql,[req.body.id, req.body.can_be_return, req.body.year ,req.body.model , req.body.price ,req.body.color,req.body.State]);
        res.status(200).json("row edited");
     });



