import axios from "axios";

const KEY = "AIzaSyAowdwLHVK3MmgV7TosE4YuF64S5aaBXNg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
