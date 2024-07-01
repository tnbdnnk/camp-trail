// import React from "react";
// import Catalog from "./Catalog";
// import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to our Camp Trail Service</h1>
            <p>We offer the best camper vans for your travel needs in Ukraine.</p>
            <div>
                <NavLink to="/catalog" >Catalog</NavLink>
            </div>
        </div>
    )
}

export default Home;