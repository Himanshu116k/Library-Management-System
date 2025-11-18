import mysql  from "mysql2/promise";


import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
//     ssl: {
//       ca: fs.readFileSync("./certificate/isrgrootx1.pem")
//     },

    host: "localhost",   
    user: "root",
    password: "123456",
    database: "library"
});

export default pool;
