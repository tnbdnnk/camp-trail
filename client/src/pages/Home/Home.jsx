import { NavLink } from "react-router-dom";
import HomeAdvertCard from "../../components/HomeAdvertCard/HomeAdvertCard";

import css from './Home.module.css';

const Home = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>
                Welcome to our Camp Trail Service
            </h1>
            <p className={css.intro}>
                We offer the best camper vans for your travel needs in Ukraine.
            </p>
            <HomeAdvertCard/>
            <div>
                <NavLink
                    to="/catalog"
                    className={css.navLink}
                >
                    More in Catalog
                </NavLink>
            </div>
        </div>
    )
}

export default Home;
