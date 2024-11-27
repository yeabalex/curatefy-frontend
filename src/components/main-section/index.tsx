import CreateTweet from "./create-tweet";
import Feed from "./feed";

const MainSection = () => {
  return (
    <div className="max-w-3xl bg-secondary">
      <CreateTweet />
      <Feed />
    </div>
  );
};

export default MainSection;
