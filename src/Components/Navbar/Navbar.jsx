
import React, { useState } from "react";
import './Navbar.css';
import logo from "../../assets/icons/logo.png";
import searchIcon from "../../assets/icons/loupe.png";
import currentLocationIcon from "../../assets/icons/crosshair.png";

const Navbar = ({ onSearchButtonClick }) => {
    const [searchQuery, setSearchQuery] = useState('');

    function handleInputChange(e) {
        setSearchQuery(e.target.value);
    }

    function handleSearchButtonClick() {

        if (searchQuery.trim() !== '') {
            onSearchButtonClick(searchQuery);
            setSearchQuery('');
        }
    }

    return (
        <>
            <nav className="navbar">
                <div className="nav-left">
                    <img src={logo} alt="logo" />
                </div>

                <div className="nav-middle">
                    <img src={searchIcon} alt="search-icon" onClick={handleSearchButtonClick}/>
                    <input type="text" placeholder="Search city..." autoComplete="off" value={searchQuery} onChange={handleInputChange} />
                </div>

                <div className="nav-right">
                   
                </div>
            </nav>
        </>
    );
};

export default Navbar;
