const mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: "remotemysql.com",
    user: "lTPoeNLw7z",
    password: "9s8kDIunGj",
    database: "lTPoeNLw7z",
    port: 3306
});

module.exports.pool = pool;