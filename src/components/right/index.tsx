import React, { Suspense } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Trends = React.lazy(() => import("./suggestion"));

const TrendsLoading = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded"></div>
    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
  </div>
);

const RightSideBar = () => {
  return (
    <div className="hidden md:block px-8 space-y-2 w-[28rem]">
      <section className="sticky top-0 py-3 bg-secondary z-10 rounded-full">
        <div className="flex items-center gap-4 px-4 py-2 bg-secondary rounded-full">
          <IoSearchOutline />
          <input
            type="text"
            placeholder="Search Music"
            className="text-base placeholder:text-base focus:outline-none bg-transparent"
          />
        </div>
      </section>
      <Suspense fallback={<TrendsLoading />}>
        <Trends />
      </Suspense>
    </div>
  );
};

export default RightSideBar;
