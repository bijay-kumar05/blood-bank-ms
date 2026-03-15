const mysql = require("mysql2");

/* Create Connection */

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bijay@2005",
    database: "bloodbank"
});

/* Connect Database */

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed:", err);
    } else {
        console.log("MySQL Database Connected");
    }
});

module.exports = db;