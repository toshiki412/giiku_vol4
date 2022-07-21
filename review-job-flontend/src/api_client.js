import axios from 'axios';

const client = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    withCredentials: true,
  })
export default client