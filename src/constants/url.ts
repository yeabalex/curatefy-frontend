import dotenv from "dotenv";

dotenv.config();

export const userURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3001/api/v1" : "";

export const clientURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";
