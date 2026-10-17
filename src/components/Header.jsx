import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Link, NavLink } from 'react-router-dom';
import "../styling/Header.css"

export default function Header({ onDonate }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleDonate = () => {
        setMenuOpen(false);
        onDonate();
    };

    return (
        <header className="campaign-container">
            <nav className="navbar">

                <div className="nav-logo">
                    <Link to="/" aria-label="Sandra Mbuvi 2027 home"><h2>Sandra Mbuvi 2027</h2></Link>
                </div>

                <div id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
                    <NavLink to="/agendas" onClick={() => setMenuOpen(false)}>Agendas</NavLink>
                    <NavLink to="/youth-registry" onClick={() => setMenuOpen(false)}>Youth Registry</NavLink>
                    <NavLink to="/volunteer" onClick={() => setMenuOpen(false)}>Volunteer</NavLink>
                </div>

                <div className="nav-actions">
                    <button type="button" className="btn-donate-nav" onClick={handleDonate}>Donate</button>
                    <IconButton
                        className="nav-menu-toggle"
                        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={menuOpen}
                        aria-controls="primary-navigation"
                        onClick={() => setMenuOpen((isOpen) => !isOpen)}
                    >
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </div>
            </nav>
        </header>
  );
}