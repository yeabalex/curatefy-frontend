import dotenv from "dotenv";

dotenv.config();

export const userURL =
  process.env.NODE_ENV === "development" ? "http://35.162.119.64" : "http://35.162.119.64";

export const clientURL =
  process.env.NODE_ENV === "development" ? "https://curatefy.vercel.app/" : "https://curatefy.vercel.app/";
