//import { clientURL } from "@/constants/url";
import { userURL } from "@/constants/url";
import axios from "axios";

class APIClient {
  static CONFIG = {
    headers: { 
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  public static async req(
    method: "get" | "post" | "put" | "delete",
    endpoint: string,
    data?:unknown
  ) {
    try {
      let res;

      switch (method) {
        case "get":
          res = await axios.get(`${userURL}/${endpoint}`, APIClient.CONFIG);
          break;
        case "post":
          res = await axios.post(
            `${userURL}/${endpoint}`,
            typeof data === "object" ? JSON.stringify(data) : data,
            APIClient.CONFIG
          );
          break;
        case "put":
          res = await axios.put(
            `${userURL}/${endpoint}`,
            typeof data === "object" ? JSON.stringify(data) : data,
            APIClient.CONFIG
          );
          break;
        case "delete":
          res = await axios.delete(`${userURL}/${endpoint}`, {
            ...APIClient.CONFIG,
            data: typeof data === "object" ? JSON.stringify(data) : data,
          });
          break;
        default:
          throw new Error(`Unsupported HTTP method: ${method}`);
      }

      return res;
    } catch (err) {
      throw err;
    }
  }
}

export default APIClient;
