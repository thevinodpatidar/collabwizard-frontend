import axios from "axios";

export const AUTH_URL = 'https://collabwizard.herokuapp.com/api'

export function login(email, password) {
  return axios.post(`${AUTH_URL}/login`, { email, password });
}

export function register(email, password) {
  return axios.post(`${AUTH_URL}/register`, { email, password });
}

export function requestPassword(email) {
  return axios.post(`${AUTH_URL}/forgot-password`, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(`${AUTH_URL}/details`);
}
