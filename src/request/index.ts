import axios from "axios";
const token = "";
export const baseURL: string = "http://localhost:8000/";

export const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
