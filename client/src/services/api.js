import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchAds = (page) => api.get(`/adverts?page=${page}`);

export const addFavorite = (id) => api.post(`/favorites`, { id });

export const removeFavorite = (id) => api.delete(`/favorites/${id}`);
