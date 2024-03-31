const {createPool, createConnection} = require('mysql2');

const pool = createPool({
    port : 3306,
    host : "sql6.freesqldatabase.com",
    user : "sql6695475",
    password : "qweITTWpFM",
    database : "sql6695475",
    connectionLimit : 10
})

var con = createConnection({
    port : 3306,
    host : "sql6.freesqldatabase.com",
    user : "sql6695475",
    password : "qweITTWpFM",
    database : "sql6695475",
    connectionLimit : 10
});
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = pool;
