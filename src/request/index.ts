import axios from 'axios';
const token = '';
// export const baseURL: string = "http://localhost:8000/";
// export const baseURL: string = "https://jsonplaceholder.typicode.com/";
export const baseURL: string = 'http://courses.am/api/';
//http://178.160.195.53:5000/api/
export const instance = axios.create({
  baseURL,
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // },
  // headers: { 'Content-Type': 'multipart/form-data' },

  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
