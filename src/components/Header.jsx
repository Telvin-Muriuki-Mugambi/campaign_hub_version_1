import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import "../styling/Navigation.css"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="campaign-container">
            <nav className="navbar">

                <div className="nav-logo">
                    <h2>Sandra Mbuvi 2027</h2>
                </div>

                <div id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
                    <a href="#agendas" onClick={() => setMenuOpen(false)}>Agendas</a>
                    <a href="#youth-registry" onClick={() => setMenuOpen(false)}>Youth Registry</a>
                    <a href="#volunteer" onClick={() => setMenuOpen(false)}>Volunteer</a>
                </div>

                <div className="nav-actions">
                    <a href="#donate" className="btn-donate-nav">Donate</a>
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