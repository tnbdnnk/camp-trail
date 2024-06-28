import PropTypes from 'prop-types';

const AdvertModal = ({ advert, onClose }) => {
    if (!advert) return null;

    return (
        <div>
            <div>
                <button onClick={onClose}>Close</button>
                <h3>{advert.name}</h3>
                <p>{advert.description}</p>
            </div>
        </div>
    )
};

AdvertModal.propTypes = {
    advert: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        
    }),
    onClose: PropTypes.func.isRequired,
};

export default AdvertModal;