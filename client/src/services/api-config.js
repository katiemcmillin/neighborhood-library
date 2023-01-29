import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://library-backend-s55f.onrender.com/"
    : "http://localhost:3000";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
