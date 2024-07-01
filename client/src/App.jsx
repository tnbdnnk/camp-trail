// import './App.css'
// import Navbar from './components/Navbar.jsx';
// import AppRoutes from './routes/routes.jsx';
import { lazy } from "react";
import { HashRouter as Route, Routes, Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    
}

export default App;
