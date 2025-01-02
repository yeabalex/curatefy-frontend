import axios from "axios";
import { userURL } from "@/constants/url";
import type { User } from "@/types/user.type";
//import { clientURL } from "@/constants/url";

export class AuthAPI {
  private user: User | null = null;
  private status: boolean = false;
  private isNewUser: boolean = false;
  static CONFIG = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  };

  private async fetchUserAPI(): Promise<User | null> {
    try {
      const res = await axios.get(`${userURL}/get-user`, AuthAPI.CONFIG);
      this.user = res.data;
      return this.user;
    } catch (err) {
      throw new Error(`Failed to fetch user: ${(err as Error).message}`);
    }
  }

  private async fetchStatusAPI(): Promise<boolean> {
    try {
      const res = await axios.get(`${userURL}/status`, AuthAPI.CONFIG);
      this.status = res.status === 200||res.status === 302||res.status === 304;
      return this.status;
    } catch (err) {
      throw new Error(`Failed to fetch status: ${(err as Error).message}`);
    }
  }

  private async fetchNewUserStatusAPI(): Promise<boolean> {
    try {
      const res = await axios.get(`${userURL}/new-user-status`, AuthAPI.CONFIG);
      this.isNewUser = res.data.isNew;
      return this.isNewUser;
    } catch (err) {
      throw new Error(`Failed to fetch new user: ${(err as Error).message}`);
    }
  }

  public async getUser(): Promise<User | null> {
    if (!this.user) {
      await this.fetchUserAPI();
    }
    return this.user;
  }

  public async getStatus(): Promise<boolean> {
    if (!this.status) {
      await this.fetchStatusAPI();
    }
    return this.status;
  }

  public async getNewUserStatus(): Promise<boolean> {
    if (!this.isNewUser) {
      await this.fetchNewUserStatusAPI();
    }
    return this.isNewUser;
  }
}
