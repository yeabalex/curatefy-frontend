import Avatar from "@/components/ui/avatar";
import TweetTextBox from "./tweet-text-box";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

const CreateTweet = () => {
  const selector = useSelector(
    (state: RootState) => state.userReducer.userData
  );
  return (
    <div>
      <div className="flex w-full justify-around text-center text-md text-gray-600">
        <div className="py-3 w-full hover:bg-primary hover:cursor-pointer text-white font-bold underline decoration-blue-400 decoration-4 underline-offset-[0.8rem]">
          Posts
        </div>
        <div className="py-3 w-full hover:bg-primary hover:cursor-pointer">
          Playlists
        </div>
      </div>
      <section className="px-4 py-4 grid grid-cols-[auto,1fr] gap-4 border-t">
        <Avatar
          src={
            selector.image
              ? selector.image
              : "https://avatars.githubusercontent.com/u/21146643?s=400&u=8f4932274619bcbee8f811f9e1dde0f2c6290af3&v=4"
          }
          alt="Profile"
        />
        <div className="w-full">
          <TweetTextBox />
          <div className="flex items-center justify-between gap-4">
            <div className="hover:bg-sky-100 p-2 rounded-full transition-colors duration-500 ease-out cursor-pointer mobile:hidden"></div>
          </div>
          <button className="bg-sky-500 hover:bg-sky-400 hover-transition px-5 py-2 text-white font-bold rounded-full max-w-2xl mobile:w-auto">
            Post
          </button>
        </div>
      </section>
    </div>
  );
};

export default CreateTweet;
