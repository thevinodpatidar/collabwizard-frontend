import axios from "axios";

export const URL = "https://collabwizard.herokuapp.com/api/details";

export function getAllProfiles() {
  return axios.get(URL);
}

export function getProfileById(id) {
  return axios.get(`${URL}/${id}`);
}

export function updateProfile(profile) {
  return axios.put(`${URL}/${profile.id}`, { ...profile });
}

// export function deleteProfile(id) {
//   return axios.delete(`${URL}/${id}`);
// }