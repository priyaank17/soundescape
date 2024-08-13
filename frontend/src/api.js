import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const register = async (email, password) => {
  return axios.post(`${API_URL}/auth/register`, { email, password });
};

export const login = async (email, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
};

export const getBeats = async (token) => {
  return axios.get(`${API_URL}/beats`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};