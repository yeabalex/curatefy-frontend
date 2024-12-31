import TweetType from "@/types/post.type";
import Avatar from "../../ui/avatar";
import Heading from "./heading";
import Footer from "./footer";

type Props = {
  tweet: TweetType;
};

export const Tweet = ({ tweet }: Props) => {
  const tweetImages = tweet.images || [];

  return (
    <div className="w-full md:max-w-3xl border-t-[1px] px-4 pt-3 pb-2 transition-colors duration-500 ease-out hover:cursor-pointer">
      <div className="grid grid-cols-[auto,1fr] gap-3">
        <Avatar
          src={`${tweet.author.author_image ? tweet.author.author_image : "/avatar.webp"}`}
          alt={tweet.author.author_name}
        />
        <div>
          <Heading
            name={tweet.author.author_name}
            username={tweet._id}
            time={new Date(tweet.createdAt).toLocaleDateString("en-US", { year: "2-digit", month: "2-digit", day: "2-digit" })}
          />
          <p className="whitespace-pre-wrap">{tweet.content}</p>
         
          {tweetImages.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-2">
              {tweetImages.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className={`
                    overflow-hidden rounded-lg
                    ${tweetImages.length === 1 ? 'col-span-2' : ''}
                    ${tweetImages.length > 1 && index === 3 ? 'relative' : ''}
                  `}
                >
                  <img
                    src={image}
                    alt={`Tweet image ${index + 1}`}
                    className="w-[15rem] object-contain"
                  />
                  {tweetImages.length > 4 && index === 3 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                      +{tweetImages.length - 4}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
         
          <Footer likes={tweet.likeCount} />
        </div>
      </div>
    </div>
  );
};