import PropTypes from 'prop-types';
import {
    // formatPrice,
    truncateText
} from '../../hooks/hooks';

import css from './HomeAdvertCard.module.css';

const HomeAdvertCard = ({ advert }) => {
    return (
        <div className={css.card}>
            <img
                src={advert.gallery[0]}
                alt={advert.name}
                className={css.image}
            />
            <div className={css.details}>
                <h2 className={css.name}>{advert.form}</h2>
                <p>{truncateText(advert.description, 120)}</p>
                <div className={css.footer}>
                    {/* <span className={css.price}>{formatPrice(advert.price)}</span> */}
                    <span className={css.rate}>{advert.rating}({advert.reviews.length} rewievs)</span>
                </div>
            </div>
        </div>
    )
};

HomeAdvertCard.propTypes = {
    advert: PropTypes.shape({
        gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        form: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
}

export default HomeAdvertCard;