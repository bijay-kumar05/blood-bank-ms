const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

/* Middleware */

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

/* MySQL Connection */

const db = mysql.createConnection({

host: "localhost",
user: "root",
password: "Bijay@2005",
database: "bloodbank"

});

db.connect((err)=>{

if(err){
console.log("Database connection failed");
}
else{
console.log("MySQL Connected");
}

});


/* Register Donor */

app.post("/add-donor",(req,res)=>{

const {name,age,blood_group,city,contact} = req.body;

const sql="INSERT INTO donors (name,age,blood_group,city,contact) VALUES (?,?,?,?,?)";

db.query(sql,[name,age,blood_group,city,contact],(err,result)=>{

if(err){
console.log(err);
res.send("Error");
}
else{
res.send("Donor Registered Successfully");
}

});

});


/* Search Donor */

app.get("/search/:blood",(req,res)=>{

const blood=req.params.blood;

const sql="SELECT * FROM donors WHERE blood_group=?";

db.query(sql,[blood],(err,result)=>{

if(err){
console.log(err);
}
else{
res.json(result);
}

});

});


/* Blood Request */

app.post("/request-blood",(req,res)=>{

const {patient_name,blood_group,units,hospital,contact}=req.body;

const sql="INSERT INTO requests (patient_name,blood_group,units,hospital,contact) VALUES (?,?,?,?,?)";

db.query(sql,[patient_name,blood_group,units,hospital,contact],(err,result)=>{

if(err){
console.log(err);
res.send("Error submitting request");
}
else{
res.send("Blood Request Submitted");
}

});

});


/* Show All Donors (Optional) */

app.get("/donors",(req,res)=>{

db.query("SELECT * FROM donors",(err,result)=>{

if(err){
console.log(err);
}
else{
res.json(result);
}

});

});


/* Start Server */

app.listen(3000,()=>{

console.log("Server running on http://localhost:3000");

});


