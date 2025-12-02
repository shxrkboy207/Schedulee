import axios from "axios";

const baseURL =
  (import.meta as any).env?.VITE_API_URL ||
  "https://localhost:7053/api";

const api = axios.create({
  baseURL,
});

console.log("AXIOS BASE URL = ", baseURL);


if (import.meta.env && (import.meta as any).env.MODE !== "production") {
  console.info("[api] baseURL:", baseURL);
}

export default api;

