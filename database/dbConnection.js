var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_matcha",
  acquireTimeout: 100000000
});

module.exports = pool;