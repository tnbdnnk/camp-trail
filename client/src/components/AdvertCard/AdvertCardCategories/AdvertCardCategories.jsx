import PropTypes from 'prop-types';
import icons from '../../../icons/symbol-defs.svg';

import css from './AdvertCardCategories.module.css';

const AdvertCardCategories = ({ advert }) => {
    const renderItem = (item, icon, label, unit = '') => {
        return (
            <li>
                <svg
                    width='20'
                    height='20'
                >
                    <use
                        href={`${icons}#${icon}`}
                        width='20'
                        height='20'
                    ></use>
                </svg>
                {advert.details[item] === 1 ? `${label}` : `No ${label}`}
                {unit && advert.details[item] !== 1 && advert.details[item] > 0 && `${advert.details[item]} ${unit}`}
            </li>
        )
    }

    const renderItemQuantity = (item, icon, label) => {
        const value = advert[item] !== undefined ? advert[item] : advert.details[item];
        return (
            <li key={item}>
                <svg
                    width='20'
                    height='20'
                >
                    <use
                        href={`${icons}#${icon}`}
                        width='20'
                        height='20'
                    ></use>
                </svg>
                {value > 0 ? `${value} ${label}` : `No ${label}`}
            </li>
        );
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const renderItemValue = (item, icon) => {
        const value = advert[item] !== 'undefined' ? advert[item] : advert.details[item];
        return (
            <li key={item}>
                <svg 
                    width='20'
                    height='20'
                >
                    <use
                        href={`${icons}#${icon}`}
                        width='20'
                        height='20'
                    ></use>
                </svg>
                {capitalizeFirstLetter(`${value}`)}
            </li>
        )
    }

    return (
        <section className={css.categories}>
            <ul className={css.categoriesList}>
                {renderItemQuantity('adults', 'icon-adults', 'Adults')}
                <li>
                    <svg width="20" height="20">
                        <use
                            href={icons + '#icon-transmission'}
                            width="20"
                            height="20"
                        ></use>
                    </svg>
                    {advert.transmission}
                </li>
                <li>
                    <svg width="20" height="20">
                        <use
                            href={icons + '#icon-fuel'}
                            width="20"
                            height="20"
                        ></use>
                    </svg>
                    {capitalizeFirstLetter(advert.engine)}
                </li>
                {renderItemValue('engine', 'icon-fuel')}
                {renderItem('kitchen', 'icon-spoon-knife', 'Kitchen')}
                {renderItemQuantity('beds', 'icon-bed', 'Beds')}
                {renderItem('airConditioner', 'icon-ac', 'AC', 'AC')}
            </ul>
        </section>
    );
}

AdvertCardCategories.propTypes = {
    advert: PropTypes.shape({
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

export default AdvertCardCategories;