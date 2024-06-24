import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';

import rootReducer from "./reducers.js";

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware],
});

export default store;