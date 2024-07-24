import axios from 'axios';

let productionUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:7000/api'
    : 'https://https://optilogix.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});
