import icons from '../icons/symbol-defs.svg';

export const renderItem = (advert, item, icon, label, unit = '') => {
    return (
        <li>
        <svg width="20" height="20">
            <use href={`${icons}#${icon}`} width="20" height="20"></use>
        </svg>
        {advert.details[item] === 1 ? `${label}` : `No ${label}`}
        {unit &&
            advert.details[item] !== 1 &&
            advert.details[item] > 0 &&
            `${advert.details[item]} ${unit}`}
        </li>
    );
};

export const renderItemQuantity = (advert, item, icon, label) => {
    const value =
        advert[item] !== undefined ? advert[item] : advert.details[item];
    return (
        <li key={item}>
        <svg width="20" height="20">
            <use href={`${icons}#${icon}`} width="20" height="20"></use>
        </svg>
        {value > 0 ? `${value} ${label}` : `No ${label}`}
        </li>
    );
};

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const renderItemValue = (advert, item, icon) => {
    const value =
        advert[item] !== 'undefined' ? advert[item] : advert.details[item];
    return (
        <li key={item}>
        <svg width="20" height="20">
            <use href={`${icons}#${icon}`} width="20" height="20"></use>
        </svg>
        {capitalizeFirstLetter(`${value}`)}
        </li>
    );
};
