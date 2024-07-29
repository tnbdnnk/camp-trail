import { useState, useRef } from "react";
import PropTypes from 'prop-types';

import css from './BookingForm.module.css';

const BookingForm = ({ advertId, advertName, onBookingSubmit }) => {
    const initialBookingData = {
        name: '',
        email: '',
        phone: '',
        date: '',
        comment: ''
    }

    const [bookingData, setBookingData] = useState(initialBookingData);
    const formRef = useRef(null);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setBookingData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleBookingSubmit = e => {
        e.preventDefault();
        const bookingDataAdvert = { ...bookingData, advertId, advertName };
        onBookingSubmit(bookingDataAdvert);
        setBookingData(initialBookingData);
    }

    const handleBookingButtonClick = () => {
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        }
    }

    return (
        <div className={css.booking}>
            <div className={css.bookingContainer}>
                <h2 className={css.bookingTitle}>Book your camper van now</h2>
                <p>Stay connected! We are always ready to help you.</p>
                <form ref={formRef} onSubmit={handleBookingSubmit}>
                    <label htmlFor="name">
                        <input
                            type="text"
                            id='name'
                            name='name'
                            placeholder='Name'
                            value={bookingData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </label>

                    <label htmlFor="email">
                        <input
                            type="email"
                            id='email'
                            name='email'
                            placeholder='Email'
                            value={bookingData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </label>

                    <label htmlFor="phone">
                        <input
                            type="tel"
                            id='phone'
                            name='phone'
                            placeholder='Phone'
                            value={bookingData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </label>

                    <label htmlFor="date">
                        <input
                            type="date"
                            id='date'
                            name='date'
                            placeholder='Booking Date'
                            value={bookingData.date}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                                    
                    <label htmlFor="comment">
                        <textarea
                            type="text"
                            id='comment'
                            name='comment'
                            placeholder='Comment'
                            value={bookingData.comment}
                            onChange={handleInputChange}
                            required
                            className={css.comment}
                            />
                    </label>

                    {/* <button className={css.bookingButton} type='submit'>Book Now</button> */}
                                    
                    {/* <div className={css.bookingButtonSection}>
                        <button className={css.bookingButton} type='submit'>Book Now</button>
                    </div> */}
                </form>
            </div>
            <div className={css.bookingButtonContainer}>
                <button onClick={handleBookingButtonClick}>
                    Send
                </button>
            </div>    
        </div>
    )
}

BookingForm.propTypes = {
    advertId: PropTypes.string.isRequired,
    advertName: PropTypes.string.isRequired,
    onBookingSubmit: PropTypes.func.isRequired
}

export default BookingForm;