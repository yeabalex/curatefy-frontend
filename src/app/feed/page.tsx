"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthAPI } from "@/lib/api/auth-api";
import { clientURL } from "@/constants/url";

export default function Feed() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = new AuthAPI();
      const status = await auth.getStatus();
      setIsAuthenticated(status);

      if (!status) {
        router.push(clientURL);
      }
    };

    checkAuth();
  }, [router]);

  if (isAuthenticated === null) {
    return null;
  }

  return <h1>FeedPage</h1>;
}
