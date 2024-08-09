// src/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev.backend-api.goldady.com/user-api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
