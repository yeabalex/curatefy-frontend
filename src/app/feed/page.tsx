"use client";

import MultiPageForm from "@/components/first/multi-page-form";
import MainSection from "@/components/main-section";
import RightSideBar from "@/components/right";
import { useAuth } from "@/lib/hooks/useAuth";

export default function Feed() {
  const { isAuthenticated, isNewUser } = useAuth();

  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  if (isNewUser) {
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
