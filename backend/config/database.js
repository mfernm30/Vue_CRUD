import mysql from "mysql2";

// Create database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "products_db",
});

export default db;