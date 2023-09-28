import axios from "axios";

export default axios.create({
  baseURL: 'https://mysql-api.onrender.com/api',
  headers: {
    "Content-type": "application/json"
  }
});