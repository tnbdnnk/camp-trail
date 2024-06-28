// import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Favorites from "../pages/Favorites";
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/404" element={<NotFound/>} />
            <Route path="*" element={<Navigate to="/404"/>} />
        </Routes>
    )
}

export default AppRoutes;