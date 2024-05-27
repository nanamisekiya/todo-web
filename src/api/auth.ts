import axios from 'axios';

const API_URL = '<http://localhost:3000>';

axios.defaults.withCredentials = true;

export const login = (email: string, password: string) => {
  return axios.post(`${API_URL}/users/sign_in`, {
    user: { email, password }
  });
};

export const register = (email: string, password: string, nickname: string) => {
  return axios.post(`${API_URL}/users`, {
    user: { email, password, nickname }
  });
};

export const logout = () => {
  return axios.delete(`${API_URL}/users/sign_out`);
};