import { combineReducers } from "redux";
import {
    FETCH_ADS_SUCCESS,
    ADD_FAVORITE,
    REMOVE_FAVORITE
} from "./actions";

const adsReduser = (state = [], action) => {
    switch (action.type) {
        case FETCH_ADS_SUCCESS:
            return [...state, ...action.payload];
        default:
            return state;
    }
};

const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return [...state, action.payload];
        case REMOVE_FAVORITE:
            return state.filter(id => id !== action.payload);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    adverts: adsReduser,
    favorites: favoritesReducer
});

export default rootReducer;