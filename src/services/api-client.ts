import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2a780f29730649f6828f47b76dbba8eb",
  },
});
