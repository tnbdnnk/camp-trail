import { NavLink } from 'react-router-dom';
import icons from '../../icons/symbol-defs.svg';
import css from './HomeAdvertCard.module.css';

const HomeAdvertCard = () => {
    return (
        <div className={css.cardsContainer}>
            <NavLink to='/catalog?type=panelTruck' className={css.card}>
                <svg width='89' height='89'>
                    <use href={icons + '#icon-van'}></use>
                </svg>
                <h3>Panel Truck</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum totam nobis dolorem eaque provident, impedit quis culpa iure esse officia, at rem excepturi magnam modi soluta corrupti quo vitae? In!</p>
            </NavLink>
            <NavLink to='/catalog?type=fullyIntegrated' className={css.card}>
                <svg width='89' height='89'>
                    <use href={icons + '#icon-fully-integrated'}></use>
                </svg>
                <h3>Fully Integrated</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum totam nobis dolorem eaque provident, impedit quis culpa iure esse officia, at rem excepturi magnam modi soluta corrupti quo vitae? In!</p>
            </NavLink>
            <NavLink to='/catalog?type=alcove' className={css.card}>
                <svg width='89' height='89'>
                    <use href={icons + '#icon-alcove'}></use>
                </svg>
                <h3>Alcove</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum totam nobis dolorem eaque provident, impedit quis culpa iure esse officia, at rem excepturi magnam modi soluta corrupti quo vitae? In!</p>
            </NavLink>
        </div>
    )
};

export default HomeAdvertCard;