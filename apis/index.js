import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CERTI_API_SERVER_HOST,
});
