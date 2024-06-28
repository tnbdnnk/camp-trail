import { useForm } from 'react-hook-form';

const BookingForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('name', { required: true })}
                placeholder='Name'
            />
            {errors.name && <span>This field is required.</span>}
            <input
                {...register('email', { required: true })}
                placeholder='Email'
            />
            {errors.email && <span>This field is required.</span>}
            <input
                {...register('bookingDate', { required: true })}
                placeholder='Booking Date'
            />
            {errors.bookingDate && <span>This field is required.</span>}
            <textarea 
                {...register('comment')}
                placeholder='Comment'
            />
            <button type='submit'>Book</button>
        </form>
    )
}

export default BookingForm;

// import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';

// const BookingForm = ({ advert }) => {
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const onSubmit = (data) => {
//         console.log(data);
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input
//                 {...register('name', { required: true })}
//                 placeholder='Name'
//             />
//             {errors.name && <span>This field is required.</span>}
//             <input
//                 {...register('email', { required: true })}
//                 placeholder='Email'
//             />
//             {errors.email && <span>This field is required.</span>}
//             <input
//                 {...register('bookingDate', { required: true })}
//                 placeholder='Booking Date'
//             />
//             {errors.bookingDate && <span>This field is required.</span>}
//             <textarea 
//                 {...register('comment')}
//                 placeholder='Comment'
//             />
//             <button type='submit'>Book</button>

//             {advert && (
//                 <div>
//                     <h4>Booking for: {advert.name}</h4>
//                 </div>
//             )}
//         </form>
//     )
// }

// BookingForm.propTypes = {
//     advert: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//     }).isRequired,
// };

// export default BookingForm;