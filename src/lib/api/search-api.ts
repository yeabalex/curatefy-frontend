import axios from "axios";
import { userURL } from "@/constants/url";
import { clientURL } from "@/constants/url";
import type { Artist } from "@/types/artist.type";
import type { Track } from "@/types/track.type";

export class SearchAPI {
  /**
   * Searches for artists by name.
   * @param name - The name of the artist to search for.
   * @returns A promise that resolves to an array of artists.
   */
  public async searchArtistsByName(name: string): Promise<Artist[]> {
    if (!name) {
      throw new Error("Artist name is required.");
    }

    try {
      const res = await axios.get(`${userURL}/search`, {
        headers: { Origin: clientURL },
        params: { type: "artist", name },
        withCredentials: true,
      });

      if (res.data.success) {
        const artistArray = res.data.data.artists.items;
        return artistArray as Artist[];
      } else {
        throw new Error(res.data.message || "Failed to retrieve artists.");
      }
    } catch (err) {
      throw new Error(`Failed to search artists: ${(err as Error).message}`);
    }
  }

  /**
   * Searches for tracks by name.
   * @param name - The name of the track to search for.
   * @returns A promise that resolves to an array of tracks.
   */
  public async searchTracksByName(name: string): Promise<Track[]> {
    if (!name) {
      throw new Error("Track name is required.");
    }

    try {
      const res = await axios.get(`${userURL}/search`, {
        headers: { Origin: clientURL },
        params: { type: "track", name },
        withCredentials: true,
      });

      if (res.data.success) {
        return res.data.data.tracks.items as Track[];
      } else {
        throw new Error(res.data.message || "Failed to retrieve tracks.");
      }
    } catch (err) {
      throw new Error(`Failed to search tracks: ${(err as Error).message}`);
    }
  }
}
