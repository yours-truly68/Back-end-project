// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();
/*

this is one way of connecting to the database- using IFFE
;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
  } catch (error) {
    console.error("ERROR:: DB_ERROR ::", error);
  }
})();

*/
