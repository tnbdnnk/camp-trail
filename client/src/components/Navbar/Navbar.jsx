import { Link } from "react-router-dom";

import css from './NavBar.module.css';

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    )
}

export default Navbar;