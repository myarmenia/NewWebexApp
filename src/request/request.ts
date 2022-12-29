import axios from "axios";

export const baseURL: string = "https://jsonplaceholder.typicode.com";

export const instance = axios.create({
  baseURL,
});
