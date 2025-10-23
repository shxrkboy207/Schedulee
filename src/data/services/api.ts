import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7053/api",
});

export default api;