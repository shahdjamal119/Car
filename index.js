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
    let sql = "DELETE FROM car WHERE c_id =?";
    let result1=await db.connection.execute(sql,[req.body.ID]);
    res.status(200).json("row deleted");
})
app.put( '/user',async(req,res)=>{  
        console .log(req.body);
       let sql = "UPDATE car SET WHERE c_id = ? , can_be_return = ? ,year = ?, model = ?,  price = ? , color = ?  State =? "
       let result = await db.connection.execute(sql,[req.body.c_id, req.body.can_be_return, req.body.year ,req.body.model , req.body.price ,req.body.color,req.body.State]);
        res.status(200).json("row edited");
     });

/*custmor-aboodMasri*/
app.post("/user", bodyParserurl, function (req, res) {
    var userDetails = req.body;
   
    var sql = "INSERT INTO customer SET ?";
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
    let [result,rows] = await db.db.connection.execute("SELECT * FROM customer");
    response.status(200).json(result);
});
app.delete('/user',async(req,res)=>
{
    console.log(req.body);
    let sql = "DELETE FROM customer WHERE id =?";
    let result1=await db.connection.execute(sql,[req.body.id]);
    res.status(200).json("row deleted");
})
app.put( '/user',async(req,res)=>{  
        console .log(req.body);
       let sql = "UPDATE customer SET WHERE id = ? , name = ? ,address = ?, phone = ? "
       let result = await db.connection.execute(sql,[req.body.id, req.body.name, req.body.address ,req.body.phone]);
        res.status(200).json("row edited");
     });


//leas_contract Tamara Awaisa

app.post("/user", bodyParserurl, function (req, res) {
    var userDetails = req.body;
   
    var sql = "INSERT INTO leas_contract SET ?";
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
    let [result,rows] = await db.db.connection.execute("SELECT * FROM leas_contract");
    response.status(200).json(result);
});
app.delete('/user',async(req,res)=>
{
    console.log(req.body);
    let sql = "DELETE FROM leas_contract WHERE id_contract =?";
    let result1=await db.connection.execute(sql,[req.body.id_contract]);
    res.status(200).json("row deleted");
})
app.put( '/user',async(req,res)=>{  
        console .log(req.body);
       let sql = "UPDATE leas_contract SET WHERE id_conract = ? , payment = ? ,give_leasing = ?, contract_start_date = ?, contract_expiry_date = ?, rent_value = ? "
       let result = await db.connection.execute(sql,[req.body.id_conract, req.body.payment, req.body.give_leasing ,req.body.contract_start_date, req.body.contract_expiry_date, req.body.rent_value ]);
        res.status(200).json("row edited");
     });
/*isurance amjad*/
app.post("/user", bodyParserurl, function (req, res) {
    var userDetails = req.body;
   
    var sql = "INSERT INTO isurance SET ?";
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
    let [result,rows] = await db.db.connection.execute("SELECT * FROM isurance");
    response.status(200).json(result);
});
app.delete('/user',async(req,res)=>
{
    console.log(req.body);
    let sql = "DELETE FROM isurance WHERE id =?";
    let result1=await db.connection.execute(sql,[req.body.id]);
    res.status(200).json("row deleted");
})
app.put( '/user',async(req,res)=>{  
        console .log(req.body);
       let sql = "UPDATE isurance SET WHERE id = ? , type = ? ,start_date = ?, end_date = ?"
       let result = await db.connection.execute(sql,[req.body.id, req.body.type, req.body.start_date ,req.body.end_date ]);
        res.status(200).json("row edited");
     });

/*sign_up abood ghalayini*/
app.post("/user", bodyParserurl, function (req, res) {
    var userDetails = req.body;
   
    var sql = "INSERT INTO sign_up SET ?";
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
    let [result,rows] = await db.db.connection.execute("SELECT * FROM sign_up");
    response.status(200).json(result);
});
app.delete('/user',async(req,res)=>
{
    console.log(req.body);
    let sql = "DELETE FROM sign_up WHERE email =?";
    let result1=await db.connection.execute(sql,[req.body.email]);
    res.status(200).json("row deleted");
})
app.put( '/user',async(req,res)=>{  
        console .log(req.body);
       let sql = "UPDATE sign_up SET WHERE fall_name = ? , email = ? ,password = ?"
       let result = await db.connection.execute(sql,[req.body.fall_name, req.body.email, req.body.password]);
        res.status(200).json("row edited");
     });
