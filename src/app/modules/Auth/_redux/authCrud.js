import axios from "axios";

export const AUTH_URL = 'https://keetabi-keedey-api.herokuapp.com/v1/api/admin'

export function login(email, password) {
  return axios.post(`${AUTH_URL}/adminLogin`, { email, password });
}

export function register(email, password) {
  return axios.post(AUTH_URL, { email, password });
}

export function requestPassword(email) {
  return axios.post(`${AUTH_URL}/forgot-password`, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(`${AUTH_URL}/me`);
}
