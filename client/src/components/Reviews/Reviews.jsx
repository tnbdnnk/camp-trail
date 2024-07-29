import PropTypes from 'prop-types';
import icons from '../../icons/symbol-defs.svg';

import css from './Reviews.module.css';

const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++){
        stars.push(
            <svg key={i} width='14' height='14'>
                <use href={icons + (i <= rating ? '#icon-star' : '#icon-star-empty')} width='14' height='14'></use>
            </svg>
        )
    }
    return stars;
}

const Reviews = ({ reviews }) => {
    return (
        <div className={css.reviews}>
            {reviews.map((review, index) => (
                <div key={index} className={css.review}>
                    <div className={css.reviewHeader}>
                        <div className={css.avatar}>
                            {review.reviewer_image ? (
                                <img src={review.reviewer_image} alt={review.reviewer_name} />
                            ) : (
                                <span className={css.initial}>
                                    {review.reviewer_name.charAt(0).toUpperCase()}
                                </span>
                            )} 
                        </div>
                        <div>
                            <h4 className={css.reviewerName}>{review.reviewer_name}</h4>
                            <div className={css.reviewerRating}>
                                {renderStars(review.reviewer_rating)}
                            </div>
                        </div>
                    </div>

                    <div className={css.reviewFooter}>
                        <p>{review.comment}</p>
                    </div>
                </div>
            ))}
        </div>
        
    )
}

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            reviewer_name: PropTypes.string.isRequired,
            reviewer_rating: PropTypes.number.isRequired,
            comment: PropTypes.string.isRequired,
            reviewer_image: PropTypes.string,
        })
    ).isRequired,
}

export default Reviews;