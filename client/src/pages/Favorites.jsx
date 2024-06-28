import { useSelector } from "react-redux";
import AdvertCard from "../components/AdvertCard";

const Favorites = () => {
    const favorites = useSelector((state) => state.Favorites);
    const adverts = useSelector((state) => state.adverts.filter(advert => favorites.includes(advert._id)));

    return (
        <div>
            <h1>Favorites</h1>
            <div>
                {adverts.map((advert) => (
                    <AdvertCard key={advert._id} advert={advert} />
                ))}
            </div>
        </div>
    )
}

export default Favorites;