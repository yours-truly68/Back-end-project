// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 8000;


connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MONGODB CONNECTION FAILED", err);
  });

/*

this is one way of connecting to the database- using IFFE
;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", error)
        app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });
  } catch (error) {
    console.error("ERROR:: DB_ERROR ::", error);
  }
})();

*/
