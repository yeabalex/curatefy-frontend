import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthAPI } from "@/lib/api/auth-api";
import { clientURL } from "@/constants/url";
import { setUser } from "@/features/user/userSlice";
import { useDispatch } from "react-redux";
import type { User } from "@/types/user.type";

export const useAuth = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const auth = new AuthAPI();
        //const status = await auth.getStatus();
        setIsAuthenticated(true);
        const user: User | null = await auth.getUser();
        dispatch(setUser(user));
        const firstTime = await auth.getNewUserStatus();
        setIsNewUser(firstTime);
      } catch (err) {
        console.error(err)
        router.push(clientURL);
      }
    };

    checkAuth();
  }, [router]);

  return { isAuthenticated, isNewUser };
};
