import { useEffect, useState } from "react";
import CreateTweet from "./create-tweet";
import Feed from "./feed";
//import { useRouter } from "next/router";

const MainSection = () => {
  const [e, setE] = useState(false);
  //const router = useRouter();

  useEffect(() => {
    if (e) {
      console.log("Reloading...");
      window.location.reload()
    }
  }, [e]);

  return (
    <div className="w-full md:max-w-3xl bg-secondary">
      <CreateTweet setE={setE} />
      <Feed />
    </div>
  );
};

export default MainSection;
