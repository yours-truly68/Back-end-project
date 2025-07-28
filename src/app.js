import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //this accepts json data that is from forms and at max limit of 16kb

app.use(express.urlencoded({ extended: true, limit: "16kb" })); //accpets requets from URLs along with their different encoding

app.use(express.static("public")); //accepts public assets, also that is the link to the public folder

app.use(cookieParser()); //setting the browser cookie

export { app };
