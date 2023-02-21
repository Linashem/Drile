import axios from 'axios';

export const networkInstanse = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 10000,
});
