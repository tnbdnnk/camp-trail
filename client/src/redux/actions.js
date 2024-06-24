import axios from "axios";

export const FETCH_ADS_SUCCESS = 'FETCH_ADS_SUCCESS';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const fetchAds = (page) => async (dispatch) => {
    try {
        const response = await axios.get(`/api/adverts?page=${page}`);
        dispatch({ type: FETCH_ADS_SUCCESS, payload: response.data });
    } catch (error) {
        console.error(error);
    }
};

export const addFavorite = (id) => ({ type: ADD_FAVORITE, payload: id });
export const removeFavorite = (id) => ({ type: REMOVE_FAVORITE, payload: id });