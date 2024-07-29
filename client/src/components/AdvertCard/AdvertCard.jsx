import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addFavorite, removeFavorite } from '../../redux/actions.js';
import { renderItem, renderItemQuantity, renderItemValue } from '../../hooks/renderItems.jsx';
import { formatPrice, truncateText } from '../../hooks/hooks.js';
import AdvertModal from '../AdvertModal/AdvertModal.jsx';
import icons from '../../icons/symbol-defs.svg';

import css from './AdvertCard.module.css';

const AdvertCard = ({ advert }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const isFavorite = favorites.includes(advert._id);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(advert._id));
        } else {
            dispatch(addFavorite(advert._id));
        }
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleBookingSubmit = (bookingData) => {
        console.log('Booking submitted:', bookingData);
    }

    return (
        <div className={css.card}>
            <section className={css.imageContaner}>
                <img
                    src={advert.gallery[0]}
                    alt="camper van image"
                    
                />
            </section>

            <div className={css.cardInfo}>
                <section  className={css.sectionNameAndPrice}>
                    <h2 className={css.advertName}>{advert.name}</h2>
                    <div className={css.price}>
                        <p>{formatPrice(advert.price)}</p>
                        <button
                            onClick={handleFavorite}
                            className={css.favoriteButton}
                        >
                            <svg className={css.favoriteIcon}>
                                <use
                                    className={isFavorite ? css.favorite : css.notFavorite}
                                    href={icons + '#icon-heart'}
                                    width="26"
                                    height="26"
                                ></use>
                            </svg>
                        </button>
                    </div>
                    
                </section>

                <div className={css.cardInfo2}>
                    <section className={css.sectionRatingAdnLocation}>
                        <p className={css.rating}>
                            <svg
                                width='16'
                                height='16'
                            >
                                <use
                                    href={icons + '#icon-star'}
                                    width='16'
                                    height='16'
                                ></use>
                            </svg>
                            {advert.rating}({advert.reviews.length} rewievs)
                        </p>
                        <p className={css.location}>
                            <svg
                                width='16'
                                height='16'
                            >
                                <use
                                    href={icons + '#icon-map-pin'}
                                    width='16'
                                    height='16'
                                    fill='none'
                                    stroke='#000'
                                ></use>
                            </svg>
                            {advert.location}
                        </p>
                    </section>

                    <section className={css.sectionDescription}>
                        <p className={css.description}>{truncateText(advert.description, 72)}</p>
                    </section>

                    <section className={css.categories}>
                        <ul className={css.categoriesList}>
                            {renderItemQuantity(advert, 'adults', 'icon-adults', 'Adults')}
                            {renderItemValue(advert, 'transmission', 'icon-transmission')}
                            {renderItemValue(advert, 'engine', 'icon-fuel')}
                            {renderItem(advert, 'kitchen', 'icon-kitchen', 'Kitchen')}
                            {renderItemQuantity(advert, 'beds', 'icon-beds', 'Beds')}
                            {renderItem(advert, 'airConditioner', 'icon-wind', 'AC', 'AC')}
                        </ul>
                    </section>
                </div>

                    
                <section className={css.showMore}>
                    <button
                        className={css.showMoreButton}
                        onClick={handleOpenModal}
                    >
                        Show More
                    </button>
                    {isModalOpen && (
                        <AdvertModal
                            advert={advert}
                            onClose={handleCloseModal}
                            onBookingSubmit={handleBookingSubmit}
                        />
                    )}
                </section>
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
        adults: PropTypes.number.isRequired,
        transmission: PropTypes.string.isRequired,
        engine: PropTypes.string.isRequired,
        details: PropTypes.shape({
            kitchen: PropTypes.number.isRequired,
            beds: PropTypes.number.isRequired,
            airConditioner: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default AdvertCard;
