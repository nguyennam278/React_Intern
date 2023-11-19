import axios from "./customAxios";
const fetchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};
const createNewUser = (name, job) => {
  return axios.post(`/api/users`, { name, job });
};
const updateUser = (name, job) => {
  return axios.put(`/api/users/`, { name, job });
};
const DeleteUser = (id) => {
  return axios.delete(`/api/users/${id}`);
};
export { fetchAllUser, createNewUser, updateUser, DeleteUser };
