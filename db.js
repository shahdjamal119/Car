
var mysql=require("mysql2/promise");

module.exports=db={};

connection();
async function connection(){
var database=await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"11923976",
    database:"rental",
});

db.connection = database;
}







