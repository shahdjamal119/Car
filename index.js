/*shahd+amjad*/
var express = require("express");
var app = express();
var db = require("./db");
var cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
var bodyParserurl = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
const { response } = require("express");

/*endpoint for car table shahd hamamrah*/
app.post('/car', bodyParserurl, function (req, res) {
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

/*endpoint for log_in table shahd hamamrah*/

app.post('/log_in', bodyParserurl, function (req, res) {
    var userDetails = req.body;
   
    var sql = "INSERT INTO log_in SET ?";
    db.connection.query(sql, userDetails, function (err, data) {
        if (err) throw err
        console.log(err);
        console.log(" log_in successfully ");
    });
});

app.get('/log_in',async(req,res)=>{
    console.log("access");
    let [result,rows] = await db.db.connection.execute("SELECT * FROM log_in");
    response.status(200).json(result);
});
app.delete('/log_in',async(req,res)=>
{
    console.log(req.body);
    let sql = "DELETE FROM log_in WHERE email =?";
    let result1=await db.connection.execute(sql,[req.body.email]);
    res.status(200).json("row deleted");
})
app.put( '/log_in',async(req,res)=>{  
        console .log(req.body);
       let sql = "UPDATE log_in SET WHERE email = ? ,password = ?"
       let result = await db.connection.execute(sql,[req.body.email, req.body.password]);
        res.status(200).json("row edited");
     });

/*endpoint for car table abood ghalayini*/
app.get('/car',async(req,res)=>{
    console.log("access");
    let [result,rows] = await db.db.connection.execute("SELECT * FROM car");
    response.status(200).json(result);
});
app.delete('/car',async(req,res)=>
{
    console.log(req.body);
    let sql = "DELETE FROM car WHERE c_id =?";
    let result1=await db.connection.execute(sql,[req.body.ID]);
    res.status(200).json("row deleted");
})
app.put( '/car',async(req,res)=>{  
        console .log(req.body);
       let sql = "UPDATE car SET WHERE c_id = ? , can_be_return = ? ,year = ?, model = ?,  price = ? , color = ?  State =? "
       let result = await db.connection.execute(sql,[req.body.c_id, req.body.can_be_return, req.body.year ,req.body.model , req.body.price ,req.body.color,req.body.State]);
        res.status(200).json("row edited");
     });


/*custmor-aboodMasri*/
app.post('/custmor', bodyParserurl, function (req, res) {
    var userDetails = req.body;
   
    var sql = "INSERT INTO customer SET ?";
    db.connection.query(sql, userDetails, function (err, data) {
        if (err) throw err
        console.log(err);
        console.log(" signup successfully ");
    });
});

app.get('/custmor',async(req,res)=>{
    console.log("access");
    let [result,rows] = await db.db.connection.execute("SELECT * FROM customer");
    response.status(200).json(result);
});
app.delete('/custmor',async(req,res)=>
{
    console.log(req.body);
    let sql = "DELETE FROM customer WHERE id =?";
    let result1=await db.connection.execute(sql,[req.body.id]);
    res.status(200).json("row deleted");
})
app.put( '/custmor',async(req,res)=>{  
        console .log(req.body);
       let sql = "UPDATE customer SET WHERE id = ? , name = ? ,address = ?, phone = ? "
       let result = await db.connection.execute(sql,[req.body.id, req.body.name, req.body.address ,req.body.phone]);
        res.status(200).json("row edited");
     });


//leas_contract Tamara Awaisa

app.post('/leas_contract', bodyParserurl, function (req, res) {
    var userDetails = req.body;
   
    var sql = "INSERT INTO leas_contract SET ?";
    db.connection.query(sql, userDetails, function (err, data) {
        if (err) throw err
        console.log(err);
        console.log(" signup successfully ");
    });
});

app.get('/leas_contract',async(req,res)=>{
    console.log("access");
    let [result,rows] = await db.db.connection.execute("SELECT * FROM leas_contract");
    response.status(200).json(result);
});
app.delete('/leas_contract',async(req,res)=>
{
    console.log(req.body);
    let sql = "DELETE FROM leas_contract WHERE id_contract =?";
    let result1=await db.connection.execute(sql,[req.body.id_contract]);
    res.status(200).json("row deleted");
})
app.put( '/leas_contract',async(req,res)=>{  
        console .log(req.body);
       let sql = "UPDATE leas_contract SET WHERE id_conract = ? , payment = ? ,give_leasing = ?, contract_start_date = ?, contract_expiry_date = ?, rent_value = ? "
       let result = await db.connection.execute(sql,[req.body.id_conract, req.body.payment, req.body.give_leasing ,req.body.contract_start_date, req.body.contract_expiry_date, req.body.rent_value ]);
        res.status(200).json("row edited");
     });
/*isurance amjad*/
app.post('/isurance', bodyParserurl, function (req, res) {
    var userDetails = req.body;
   
    var sql = "INSERT INTO isurance SET ?";
    db.connection.query(sql, userDetails, function (err, data) {
        if (err) throw err
        console.log(err);
        console.log(" signup successfully ");
    });
});

app.get('/isurance',async(req,res)=>{
    console.log("access");
    let [result,rows] = await db.db.connection.execute("SELECT * FROM isurance");
    response.status(200).json(result);
});
app.delete('/isurance',async(req,res)=>
{
    console.log(req.body);
    let sql = "DELETE FROM isurance WHERE id =?";
    let result1=await db.connection.execute(sql,[req.body.id]);
    res.status(200).json("row deleted");
})
app.put( '/isurance',async(req,res)=>{  
        console .log(req.body);
       let sql = "UPDATE isurance SET WHERE id = ? , type = ? ,start_date = ?, end_date = ?"
       let result = await db.connection.execute(sql,[req.body.id, req.body.type, req.body.start_date ,req.body.end_date ]);
        res.status(200).json("row edited");
     });

/*sign_up abood ghalayini*/
app.post('/sign_up', bodyParserurl, function (req, res) {
    var userDetails = req.body;
   
    var sql = "INSERT INTO sign_up SET ?";
    db.connection.query(sql, userDetails, function (err, data) {
        if (err) throw err
        console.log(err);
        console.log(" signup successfully ");
    });
});

app.get('/sign_up',async(req,res)=>{
    console.log("access");
    let [result,rows] = await db.db.connection.execute("SELECT * FROM sign_up");
    response.status(200).json(result);
});
app.delete('/sign_up',async(req,res)=>
{
    console.log(req.body);
    let sql = "DELETE FROM sign_up WHERE email =?";
    let result1=await db.connection.execute(sql,[req.body.email]);
    res.status(200).json("row deleted");
})
app.put( '/sign_up',async(req,res)=>{  
        console .log(req.body);
       let sql = "UPDATE sign_up SET WHERE fall_name = ? , email = ? ,password = ?"
       let result = await db.connection.execute(sql,[req.body.fall_name, req.body.email, req.body.password]);
        res.status(200).json("row edited");
     });




