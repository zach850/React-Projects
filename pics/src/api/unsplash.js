import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID l_KDIi6Esb4IHYwVuIYvRZM-BtjEmt65HON-823VDLw",
  },
});
