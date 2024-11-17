import axios from "axios";
import { userURL } from "@/constants/url";
import type { User } from "@/types/user.type";

export class AuthAPI {
  private user: User | null = null;
  private status: boolean = false;

  private async fetchUserAPI(): Promise<User | null> {
    try {
      const res = await axios.get(`${userURL}/get-user`);
      this.user = res.data;
      return this.user;
    } catch (err) {
      throw new Error(`Failed to fetch user: ${(err as Error).message}`);
    }
  }

  private async fetchStatusAPI(): Promise<boolean> {
    try {
      const res = await axios.get(`${userURL}/status`);
      this.status = res.status === 200;
      return this.status;
    } catch (err) {
      throw new Error(`Failed to fetch status: ${(err as Error).message}`);
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
}
