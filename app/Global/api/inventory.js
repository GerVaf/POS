// api.js
import axios from 'axios';

const token = "4|m0mOqbX0uciAtAkdT8fNWvtrsQjUYOLAsjfLuJ55";
const baseUrl = 'http://167.172.88.159/api/v1/';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
});

export const get = (url, params = {}) => {
  return axiosInstance.get(url, { params });
};

export const post = (url, data = {}) => {
  return axiosInstance.post(url, data);
};

export const put = (url, data = {}) => {
  return axiosInstance.put(url, data);
};

export const del = (url) => {
  return axiosInstance.delete(url);
};
