const mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    databases: process.env.database,
    port: 3306
});

module.exports.pool = pool;