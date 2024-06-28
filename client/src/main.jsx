import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from "redux-persist/integration/react";

import App from './App.jsx';
import {
  store,
  // persistor
} from './redux/store.js';
// import './index.css';

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/camp-trail">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
