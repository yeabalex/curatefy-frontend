type Nullable<T> = T | null;

type TweetType = {
  id: number;
  text: string;
  favourite_count: number;
  retweet_count: number;
  tweet_id: string;
  tweet_created_at: string;
  source: string;
  createdAt: string;
  updatedAt: string;
  timeless: Nullable<boolean>;
  entities: Nullable<{}>;
  extendedEntities: Nullable<{}>;
  author: {
    id: number;
    name: string;
    username: string;
    profile_image_url: string;
    profile_created_at: string;
    createdAt: string;
    updatedAt: string;
    enabled: Nullable<boolean>;
    bio: Nullable<string>;
    type: Nullable<string>;
    profileID: string;
    classificationDate: Nullable<string>;
    contentScore: Nullable<number>;
    daysThatDid200Tweets: Nullable<number>;
  };
};

export default TweetType;
