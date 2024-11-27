import Trending from "@/data/Trends";
import Trend from "./people";

const Trends = () => {
  return (
    <section className="bg-secondary py-4 rounded-2xl sticky -top-80">
      <h1 className="text-[1.25rem] font-black px-4 pb-4">Trends For You</h1>
      <div>
        {Trending.map((trend) => (
          <Trend key={trend.id} trend={trend} />
        ))}
      </div>
    </section>
  );
};

export default Trends;
