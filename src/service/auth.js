import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://foodboock-server.onrender.com/",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("jwt"),
  },
});
