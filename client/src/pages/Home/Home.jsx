import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchAds } from "../../redux/actions";

import HomeAdvertCard from "../../components/HomeAdvertCard/HomeAdvertCard";

import css from './Home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const adverts = useSelector((state) => state.adverts);

    useEffect(() => {
        if (adverts.length === 0) {
            dispatch(fetchAds());
        }
    }, [dispatch, adverts]);

    // Filter adverts to get one of each type: alcove, fullyIntegrated, panelTruck
    const filteredAdverts = {
        alcove: null,
        fullyIntegrated: null,
        panelTruck: null,
    };

    adverts.forEach(advert => {
        if (advert.form === 'alcove' && !filteredAdverts.alcove) {
            filteredAdverts.alcove = advert;
        } else if (advert.form === 'fullyIntegrated' && !filteredAdverts.fullyIntegrated) {
            filteredAdverts.fullyIntegrated = advert;
        } else if (advert.form === 'panelTruck' && !filteredAdverts.panelTruck) {
            filteredAdverts.panelTruck = advert;
        }
    });

    // Convert object back to array
    const filteredAdvertsArray = Object.values(filteredAdverts).filter(Boolean);

    return (
        <div className={css.container}>
            <h1 className={css.title}>
                Welcome to our Camp Trail Service
            </h1>
            <p className={css.intro}>
                We offer the best camper vans for your travel needs in Ukraine.
            </p>
            <div className={css.advertsContainer}>
                {filteredAdvertsArray.map(advert => (
                    <HomeAdvertCard key={advert._id} advert={advert} />
                ))}
            </div>
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
