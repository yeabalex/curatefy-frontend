import { BsThreeDots } from "react-icons/bs";
import TrendType from "@/types/trend.type";

type Props = {
  trend: TrendType;
};

const Trend = ({ trend }: Props) => {
  return (
    <div className="py-4 px-4 flex items-center justify-between cursor-pointer hover-transition">
      <div>
        <h5 className="font-semibold text-neutral-500">{trend.category}</h5>
        <h3 className="font-bold text-base ">{trend.title}</h3>
        <span className="font-semibold text-neutral-500">
          {trend.tweetCount} Tweets
        </span>
      </div>
      <div className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
        <BsThreeDots />
      </div>
    </div>
  );
};

export default Trend;
