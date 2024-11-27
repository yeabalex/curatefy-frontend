import TweetType from "@/types/post.type";
import Avatar from "../../ui/avatar";
import Heading from "./heading";
import Footer from "./footer";

type Props = {
  tweet: TweetType;
};

export const Tweet = ({ tweet }: Props) => {
  return (
    <div className="border-t-[1px] px-4 pt-3 pb-2 transition-colors duration-500 ease-out hover:cursor-pointer">
      <div className="grid grid-cols-[auto,1fr] gap-3">
        <Avatar
          src={`https://api.dicebear.com/6.x/bottts/svg?backgroundType=solid,gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffdfbf,ffd5dc&seed=${tweet.author.username}`}
          alt={tweet.author.username}
        />
        <div>
          <Heading
            name={tweet.author.name}
            username={tweet.author.username}
            time={tweet.createdAt}
          />
          <p className="whitespace-pre-wrap">{tweet.text}</p>
          <Footer likes={tweet.favourite_count} />
        </div>
      </div>
    </div>
  );
};
