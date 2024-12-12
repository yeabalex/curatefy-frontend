import type TweetType from "@/types/post.type";
import { Tweet } from "./post/index";
import APIClient from "@/lib/api/api-client";
import { useEffect, useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState<TweetType[]>([])

  useEffect(()=>{
    async function fetchPosts(){
      const posts:{data:{posts: TweetType[]}} = (await APIClient.req("get", "/posts")) as unknown as {data:{posts: TweetType[]}}
      setPosts(posts.data.posts)
    }
    fetchPosts()
  },[])

  console.log(posts)
  return (
    <section>
      {posts.map((tweet) => (
        <Tweet key={tweet._id} tweet={tweet} />
      ))}
    </section>
  );
};

export default Feed;
