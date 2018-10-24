exports.db_info = function() {
  const mysql = require("mysql");
  return mysql.createConnection({
    host: "localhost",
    user: "jyl",
    password: "test",
    database: "testschema"
  });
};
