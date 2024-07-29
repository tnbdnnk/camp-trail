import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import BookingForm from '../BookingForm/BookingForm';
import Reviews from '../Reviews/Reviews';
import { formatPrice, handleLocationClick } from '../../hooks/hooks';
import { renderItem, renderItemQuantity, renderItemValue } from '../../hooks/renderItems';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import icons from '../../icons/symbol-defs.svg';

import css from './AdvertModal.module.css';

const AdvertModal = ({ advert, onClose, onBookingSubmit }) => {
    const [activeSection, setActiveSection] = useState('features');
    const [fadeIn, setFadeIn] = useState(false);
    const reviewsRef = useRef(null);

    useEffect(() => {
        setFadeIn(true);
    }, [activeSection]);

    if (!advert) return null;

    const handleSectionChange = (section) => {
        setFadeIn(false);
        setTimeout(() => {
            setActiveSection(section);
            setFadeIn(true);
        }, 200);
    }

    const scrollToReviews = () => {
        setActiveSection('reviews');
        reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const convertCamelCaseToReadable = (text) => {
        return text
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase());
    }

    return (
        <div className={css.modalOverlay}>
            <div className={css.modalContent}>
                <div className={css.modalHeader}>
                    <h3 className={css.name}>{advert.name}</h3>
                    <button onClick={onClose} className={css.closeButton}>
                        <svg>
                            <use href={icons + '#icon-close'} width="18" height="18"></use>
                        </svg>
                    </button>
                </div>

                <div className={css.modalBody}>
                    <div className={css.ratingAndLocation}>
                        <p className={css.rating}>
                            <span className={css.ratingLink} onClick={scrollToReviews}>
                                <svg width="16" height="16">
                                    <use href={icons + '#icon-star'} width="16" height="16"></use>
                                </svg>
                                {advert.rating}({advert.reviews.length} reviews)
                            </span>
                        </p>
                        <p className={css.location}>
                            <span className={css.locationLink} onClick={() => handleLocationClick(advert.location)}>
                                <svg width="16" height="16">
                                    <use href={icons + '#icon-map-pin'} width="16" height="16" fill="none" stroke="#000"></use>
                                </svg>
                                {advert.location}
                            </span>
                        </p>
                    </div>

                    <p className={css.price}>{formatPrice(advert.price)}</p>
                    
                    <div className={css.carouselContainer}>
                        <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
                            {advert.gallery.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Image ${index + 1} of ${advert.name}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <p className={css.description}>{advert.description}</p>

                    <div className={css.sections}>
                        <button
                            className={`${css.sectionsButton} ${activeSection === 'features' ? css.active : ''}`}
                            onClick={() => handleSectionChange('features')}
                        >
                            Features
                        </button>
                        <button
                            className={`${css.sectionsButton} ${activeSection === 'reviews' ? css.active : ''}`}
                            onClick={() => handleSectionChange('reviews')}
                        >
                            Reviews
                        </button>
                    </div>
                    <hr className={css.horizontalLine} />

                    <div className={css.sectionsAndBooking}>
                        <div className={`${css.sectionContent} ${fadeIn ? css.active : ''}`}>
                            {activeSection === 'features' && (
                                <div className={css.features}>
                                    <ul className={css.featuresList}>
                                        {renderItemQuantity(advert, 'adults', 'icon-adults', 'Adults')}
                                        {renderItemQuantity(advert, 'children', 'icon-adults', 'Kids')}
                                        {renderItemValue(advert, 'transmission', 'icon-transmission')}
                                        {renderItemValue(advert, 'engine', 'icon-fuel')}
                                        {renderItemQuantity(advert, 'beds', 'icon-beds', 'Beds')}
                                        {renderItem(advert, 'airConditioner', 'icon-wind', 'AC', 'AC')}
                                        {renderItem(advert, 'kitchen', 'icon-kitchen', 'Kitchen')}
                                        {renderItem(advert, 'toilet', 'icon-toilet', 'Toilet')}
                                        {renderItem(advert, 'cd', 'icon-cd', 'CD')}
                                        {renderItem(advert, 'tv', 'icon-tv', 'TV')}
                                        {renderItem(advert, 'radio', 'icon-radio', 'Radio')}
                                        {renderItemQuantity(advert, 'hob', 'icon-hob', 'Hob')}
                                    </ul>
                                    <div className={css.detailsContainer}>
                                        <h2 className={css.detailsTitle}>Vehicle details</h2>
                                        <hr className={css.horizontalLine2} />
                                        <ul className={css.detailsList}>
                                            <li>Form: <span>{convertCamelCaseToReadable(advert.form)}</span></li>
                                            <li>Length: <span>{advert.length}</span></li>
                                            <li>Width: <span>{advert.width}</span></li>
                                            <li>Height: <span>{advert.height}</span></li>
                                            <li>Tank: <span>{advert.tank}</span></li>
                                            <li>Consumption: <span>{advert.consumption}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {activeSection === 'reviews' && (
                                <div ref={reviewsRef}>
                                    <Reviews reviews={advert.reviews}/>
                                </div>
                            )}
                        </div>

                        <BookingForm
                            advertId={advert._id}
                            advertName={advert.name}
                            onBookingSubmit={onBookingSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

AdvertModal.propTypes = {
    advert: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
        form: PropTypes.string.isRequired,
        length: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        tank: PropTypes.string.isRequired,
        consumption: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
        reviews: PropTypes.arrayOf(PropTypes.shape({
            reviewer_name: PropTypes.string.isRequired,
            reviewer_rating: PropTypes.number.isRequired,
            comment: PropTypes.string.isRequired,
            reviewer_image: PropTypes.string,
        })).isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onBookingSubmit: PropTypes.func.isRequired,
};

export default AdvertModal;
