"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthAPI } from "@/lib/api/auth-api";
import { clientURL } from "@/constants/url";
import MultiPageForm from "@/components/first/multi-page-form";
import MainSection from "@/components/main-section";
import RightSideBar from "@/components/right";

export default function Feed() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);
  //const [error, setError] = useState<string | null>(null);
  const auth = new AuthAPI();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const status = await auth.getStatus();
        setIsAuthenticated(status);
        const firstTime = await auth.getNewUserStatus();
        setIsNewUser(firstTime);
      } catch (err) {
        router.push(clientURL);
      }
    };

    checkAuth();
  }, [router]);

  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  if (!isNewUser) {
    return (
      <div className="max-w-7xl flex justify-center items-center bg-dark h-[100vh]">
        <MultiPageForm />
      </div>
    );
  } else {
    return (
      <div className="px-0 md:px-28 flex justify-between">
        <MainSection />
        <RightSideBar />
      </div>
    );
  }
}
