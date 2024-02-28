import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import mysql from "mysql";
import userRoutes from './routes/user.route.js'

dotenv.config();

// const conn = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// });

// conn.connect((err) => {
//   if (err) {
//     console.log("Error connecting: " + err);
//   }

//   console.log("MySQL is connected");
// });

// conn.end();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

const app = express();
const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use('/api/user', userRoutes)