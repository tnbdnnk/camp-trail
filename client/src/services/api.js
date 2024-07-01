import axios from "axios";

const api = axios.create({
  baseURL: "https://camp-trail.onrender.com/api",
});

export const fetchAds = () => api.get(`/adverts`);

export const addFavorite = (id) => api.post(`/favorites`, { id });

export const removeFavorite = (id) => api.delete(`/favorites/${id}`);
