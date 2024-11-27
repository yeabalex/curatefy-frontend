import { LikeIcon, ShareIcon } from "@/components/ui/custom-icon";
import TweetOption from "../create-tweet/tweet-option";

type Props = {
  likes: number;
};

const Footer = ({ likes }: Props) => {
  return (
    <div className="flex justify-between mt-3 max-w-md cursor-pointer">
      <div className="flex gap-1 items-center group tablet px-4">
        <TweetOption
          Icon={<LikeIcon className="group-hover:fill-rose-500" />}
          color="group-hover:bg-rose-100"
        />
        <p className="text-sm group-hover:text-rose-500">{likes}</p>
      </div>
      <div className="flex gap-1 items-center group tablet pl-4">
        <TweetOption
          Icon={<ShareIcon className="group-hover:fill-sky-500" />}
          color="group-hover:bg-sky-100"
        />
      </div>
    </div>
  );
};

export default Footer;
