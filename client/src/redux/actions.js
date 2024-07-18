import axios from "axios";

export const FETCH_ADS_SUCCESS = 'FETCH_ADS_SUCCESS';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


const api = axios.create({
  baseURL: "https://camp-trail.onrender.com/api",
});

export const fetchAds = (location = '') => async (dispatch) => {
  try {
    const response = await api.get(`/adverts?location=${location}`);
    dispatch({ type: FETCH_ADS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error fetching ads:", error);
    dispatch({ type: 'FETCH_ADS_FAILURE', payload: error.message });
  }
};


export const addFavorite = (id) => ({ type: ADD_FAVORITE, payload: id });
export const removeFavorite = (id) => ({ type: REMOVE_FAVORITE, payload: id });