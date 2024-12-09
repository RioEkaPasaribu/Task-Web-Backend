const mysql = require("mysql");
const dotenv = require("dotenv");

// Load environment variables dari file .env
dotenv.config();

// Buat koneksi ke database
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// Cek koneksi
db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    process.exit(1); // Keluar jika gagal koneksi
  }
  console.log("Connected to the database!");
});

module.exports = db;
