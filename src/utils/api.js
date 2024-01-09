import axios from "axios";
import { YOUTUBE_POPULAR_VIDEOS_API, YOUTUBE_VIDEO_BY_ID } from "./constants";

export const getPopularVideos = async () => {
    const resp = await axios.get(YOUTUBE_POPULAR_VIDEOS_API);
    return resp;
}

export const getVideoById = async () => {
  const resp = await axios.get(YOUTUBE_VIDEO_BY_ID);
  return resp;
}