import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import icons from '../../icons/symbol-defs.svg';

import css from './Filter.module.css';

const Filter = ({ onFilter, resetFilter, filterCriteria }) => {
    const [location, setLocation] = useState(filterCriteria.location);
    const [equipment, setEquipment] = useState(filterCriteria.equipment);
    const [type, setType] = useState(filterCriteria.type);

    useEffect(() => {
        setLocation(filterCriteria.location);
        setEquipment(filterCriteria.equipment);
        setType(filterCriteria.type);
    }, [filterCriteria]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter({ location, equipment, type });
    };

    const handleReset = () => {
        setLocation('');
        setEquipment({});
        setType('');

        const checkboxes = document.querySelectorAll(`.${css.checkboxButton}`);
        checkboxes.forEach(checkbox => {
            checkbox.classList.remove(css.checked);
        });

        const radios = document.querySelectorAll(`.${css.radioButton}`);
        radios.forEach(radio => {
            radio.classList.remove(css.checked);
        })

        resetFilter();
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setEquipment((prevEquipment) => ({
            ...prevEquipment,
            [name]: checked
        }));

        const parentLabel = e.target.closest(`.${css.checkboxButton}`);
        if (checked) {
            parentLabel.classList.add(css.checked);
        } else {
            parentLabel.classList.remove(css.checked);
        }
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);

        const radios = document.querySelectorAll(`.${css.radioButton}`);
        radios.forEach(radio => {
            if (radio.querySelector('input').value === e.target.value) {
                radio.classList.add(css.checked);
            } else {
                radio.classList.remove(css.checked);
            }
        });
    };

    // const handleLocationChange = (e) => {
    //     setLocation(e.target.value);
    // };

    // const handleEquipmentChange = (e) => {
    //     setEquipment({
    //         ...equipment,
    //         [e.target.name]: e.target.checked,
    //     });
    // };

    // const handleTypeChange = (e) => {
    //     setType(e.target.value);
    // };

    // const handleSearch = () => {
    //     onFilter({ location, equipment, type });
    // };

    return (
        <section className={css.filter}>
            {/* <h2>Filter</h2> */}
            <form
                onSubmit={handleSubmit}
                className={css.form}
            >
                <div className={css.location}>
                    <span className={css.locationLabel}>Location</span>
                    <label>
                        <input
                            type="text"
                            placeholder="Kyiv, Ukraine"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className={css.locationInput}
                        />
                    </label>
                </div>

                <h2>Filters</h2>
                <div className={css.checkbox}>
                    <span>Vehicle equipment</span>
                    <hr className={css.horizontalLine} />
                    <div className={css.checkboxGroup}>
                        <label className={css.checkboxButton}>
                            <input
                                type="checkbox"
                                name="kitchen"
                                checked={!!equipment.kitchen}
                                onChange={handleCheckboxChange}
                            />
                            <svg  className={css.checkboxIcon}>
                                <use
                                    href={icons + '#icon-kitchen'}
                                    width='24'
                                    height='24'
                                ></use>
                            </svg>
                            <span className={css.checkboxLabelText}>
                                Kitchen
                            </span>
                        </label>
                        <label className={css.checkboxButton}>
                            <input
                                type="checkbox"
                                name="airConditioner"
                                checked={!!equipment.airConditioner}
                                onChange={handleCheckboxChange}
                            />
                            <svg  className={css.checkboxIcon}>
                                <use
                                    href={icons + '#icon-wind'}
                                    width='24'
                                    height='24'
                                ></use>
                            </svg>
                            <span className={css.checkboxLabelText}>
                                AC
                            </span>
                        </label>
                        <label className={css.checkboxButton}>
                            <input
                                type="checkbox"
                                name="beds"
                                checked={!!equipment.beds}
                                onChange={handleCheckboxChange}
                            />
                            <svg  className={css.checkboxIcon}>
                                <use
                                    href={icons + '#icon-bed'}
                                    width='24'
                                    height='24'
                                ></use>
                            </svg>
                            <span className={css.checkboxLabelText}>
                                Beds
                            </span>
                        </label>
                        <label className={css.checkboxButton}>
                            <input
                                type="checkbox"
                                name="TV"
                                checked={!!equipment.TV}
                                onChange={handleCheckboxChange}
                            />
                            <svg  className={css.checkboxIcon}>
                                <use
                                    href={icons + '#icon-tv'}
                                    width='24'
                                    height='24'
                                ></use>
                            </svg>
                            <span className={css.checkboxLabelText}>
                                TV
                            </span>
                        </label>
                        <label className={css.checkboxButton}>
                            <input
                                type="checkbox"
                                name="shower"
                                checked={!!equipment.shower}
                                onChange={handleCheckboxChange}
                            />
                            <svg  className={css.checkboxIcon}>
                                <use
                                    href={icons + '#icon-shower'}
                                    width='24'
                                    height='24'
                                ></use>
                            </svg>
                            <span className={css.checkboxLabelText}>
                                Shower/WC
                            </span>
                        </label>
                    </div>
                </div>
                
                <div className={css.radio}>
                    <span>Vehicle type</span>
                    <hr className={css.horizontalLine} />
                    <div className={css.radioGroup}>
                        <label className={css.radioButton}>
                            <input
                                type="radio"
                                name="type"
                                value="panelTruck"
                                checked={type === 'panelTruck'}
                                onChange={handleTypeChange}
                            />
                            <svg className={css.radioIcon}>
                                <use
                                    href={icons + '#icon-van'}
                                    width='42'
                                    height='42'
                                ></use>
                            </svg>
                            <span className={css.radioLabelText}>Van</span>
                        </label>
                        <label className={css.radioButton}>
                            <input
                                type="radio"
                                name="type"
                                value="fullyIntegrated"
                                checked={type === 'fullyIntegrated'}
                                onChange={handleTypeChange}
                            />
                            <svg className={css.radioIcon}>
                                <use
                                    href={icons + '#icon-fully-integrated'}
                                    width='42'
                                    height='42'
                                ></use>
                            </svg>
                            <span className={css.radioLabelText}>Fully Integrated</span>
                        </label>
                        <label className={css.radioButton}>
                            <input
                                type="radio"
                                name="type"
                                value="alcove"
                                checked={type === 'alcove'}
                                onChange={handleTypeChange}
                            />
                            <svg className={css.radioIcon}>
                                <use
                                    href={icons + '#icon-alcove'}
                                    width='42'
                                    height='42'
                                ></use>
                            </svg>
                            <span className={css.radioLabelText}>Alcove</span>
                        </label>
                    </div>
                </div>
                
                <div className={css.buttonContainer}>
                    {/* <button
                        type="submit"
                        className={css.searchButton}
                    >
                        Search
                    </button> */}
                    <button
                        type="button"
                        onClick={handleReset}
                        className={css.resetSearchButton}
                    >
                        Reset Search
                    </button>
                    <button
                        type="submit"
                        className={css.searchButton}
                    >
                        Search
                    </button>
                </div>
            </form>
        </section>
    )
}

Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    resetFilter: PropTypes.func.isRequired,
    filterCriteria: PropTypes.object.isRequired
};

export default Filter;