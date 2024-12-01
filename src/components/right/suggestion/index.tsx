import React, { useState, useEffect } from "react";
import UserRecommendation from "./people";
import type { User } from "@/types/user.type";
import APIClient from "@/lib/api/api-client";
import { BiArrowToRight } from "react-icons/bi";

const Trends = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [retryCount, setRetryCount] = useState<number>(0);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await APIClient.req("get", "/recommendation/user");

      if (response.status !== 200) {
        setError("Failed to fetch users");
      }

      const data = await response.data;
      setUsers((data as { similarUsers: User[] }).similarUsers);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (retryCount < 3) {
      setRetryCount((prev) => prev + 1);
      fetchUsers();
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="bg-secondary py-4 rounded-2xl sticky -top-80">
      <h1 className="text-[1.25rem] font-black px-4 pb-4">
        Connect with others
      </h1>

      {isLoading ? (
        <div className="flex justify-center items-center p-4">
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center p-4">
          <p className="text-red-500 mb-2">{error}</p>
          {retryCount < 3 ? (
            <button
              onClick={handleRetry}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Retry <BiArrowToRight />
            </button>
          ) : (
            <p className="text-gray-500">Max retry attempts reached</p>
          )}
        </div>
      ) : users.length > 0 ? (
        <div>
          {users.map((user) => (
            <UserRecommendation key={user.spotifyId} user={user} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center p-4">
          <p>No Users Found</p>
        </div>
      )}
    </section>
  );
};

export default Trends;
