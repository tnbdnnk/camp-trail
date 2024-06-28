import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addFavorite, removeFavorite } from '../redux/actions.js';

const AdvertCard = ({ advert }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const isFavorite = favorites.includes(advert._id);

    const handleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(advert._id));
        } else {
            dispatch(addFavorite(advert._id));
        }
    };

    return (
        <div>
            <h3>{advert.name}</h3>
            <p>{advert.price}</p>
            <button onClick={handleFavorite} >
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            <button>Show More</button>
        </div>
    )
}

AdvertCard.propTypes = {
    advert: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default AdvertCard;