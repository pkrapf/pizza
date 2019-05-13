const mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DBhost,
    user: process.env.DBuser,
    password: process.env.DBpassword,
    database: process.env.DBdatabase,
    port: process.env.DBport
});

module.exports.pool = pool;