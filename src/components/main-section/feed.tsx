import Tweets from "../../data/Tweets";
import { Tweet } from "./post/index";

const Feed = () => {
  return (
    <section>
      {Tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </section>
  );
};

export default Feed;
