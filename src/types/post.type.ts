type TweetType = {
  _id: string;
  content: string;
  retweet_count: number;
  likeCount: number,
  commentCount: number,
  images: string[] | null
  author: {
    author_name: string;
    author_image: string | null
  };
  createdAt: string
};

export default TweetType;
