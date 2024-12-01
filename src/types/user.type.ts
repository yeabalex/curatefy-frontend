export type User = {
  displayName: string | null;
  email?: string | null;
  spotifyId: string | null;
  image: string | null;
  preferences?: {
    genres: string[];
    favoriteArtists: string[];
  };
  commonInterests?: string[];
  followerCount?: number;
  matchingGenres?: string[];
  matchingArtists?: string[];
};
