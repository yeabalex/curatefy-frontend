import { IoSearchOutline } from "react-icons/io5";
import Trends from "./suggestion";

const RightSideBar = () => {
  return (
    <div className="hidden md:block px-8 space-y-2">
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
      <Trends />
    </div>
  );
};

export default RightSideBar;
