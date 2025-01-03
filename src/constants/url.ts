import dotenv from "dotenv";

dotenv.config();

export const userURL =
  process.env.NODE_ENV === "development" ? "https://curatefy-backend-production.up.railway.app/api/v1" : "https://curatefy-backend-production.up.railway.app/api/v1";

export const clientURL = "https://curatefy.vercel.app"
