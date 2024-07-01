import axios from "axios";

export const FETCH_ADS_SUCCESS = 'FETCH_ADS_SUCCESS';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


const api = axios.create({
  baseURL: "https://camp-trail.onrender.com/api",
});

export const fetchAds = () => async (dispatch) => {
  try {
    const response = await api.get(`/adverts`);
    dispatch({ type: FETCH_ADS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error fetching ads:", error);
    // Handle error gracefully, e.g., show a user-friendly message
  }
};


export const addFavorite = (id) => ({ type: ADD_FAVORITE, payload: id });
export const removeFavorite = (id) => ({ type: REMOVE_FAVORITE, payload: id });