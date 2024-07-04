import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addFavorite, removeFavorite } from '../../redux/actions.js';
import AdvertCardCategories from './AdvertCardCategories/AdvertCardCategories.jsx';
// import { ReactComponent as IconHeart } from '../../icons/heart.svg';
// import IconHeart from '../../icons/heart.svg';
import icons from '../../icons/symbol-defs.svg';

import css from './AdvertCard.module.css';

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

    // const formatPrice = (price) => {
    //     return new Intl.NumberFormat(
    //         'de-DE',
    //         {
    //             style: 'currency',
    //             currency: 'EUR'
    //         }
    //     ).format(price);
    // };

    const formatPrice = (price) => {
        return `€${price.toFixed(2)}`;
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    }

    return (
        <div className={css.card}>
            <img src={advert.gallery[0]} alt="camper van image" />

            <div className={css.cardInfo}>
                <section>
                    <h3>{advert.name}</h3>
                    <div className={css.price}>
                        <p>{formatPrice(advert.price)}</p>
                        <button
                            onClick={handleFavorite}
                            className={css.favoriteButton}
                        >
                            {/* <IconHeart className={isFavorite ? css.favorite : css.notFavorite} /> */}
                            {/* <img
                                src={IconHeart} alt="heart icon"
                                className={isFavorite ? css.favorite : css.notFavorite}
                            /> */}
                            <svg
                                width="20"
                                height="20"
                            >
                                <use
                                    className={isFavorite ? css.favorite : css.notFavorite}
                                    href={icons + '#icon-heart'}
                                    width="20"
                                    height="20"
                                ></use>
                            </svg>
                        </button>
                    </div>
                    
                </section>

                <section>
                    <p>
                        {advert.rating}({advert.reviews.length} rewievs)
                    </p>
                    <p>{advert.location}</p>
                </section>

                <p>{truncateText(advert.description, 60)}</p>

                <AdvertCardCategories advert={advert}/>

                <button>Show More</button>
            </div>
        </div>
    );
};

AdvertCard.propTypes = {
    advert: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
        rating: PropTypes.number.isRequired,
        reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default AdvertCard;
