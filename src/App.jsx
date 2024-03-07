
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Forecast from "./Components/Forecast/Forecast";
import DaysForecast from './Components/5DaysForecast/5DaysForecast';
import Highlights from './Components/Highlights/Highlights';
import TodayAt from './Components/TodayAt/TodayAt';
import './App.css';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchButtonClick = (query) => {
        setSearchQuery(query);
    }

    return (
        <>
            <Navbar onSearchButtonClick={handleSearchButtonClick} />
            <div className="container">
                <div className="main-content">
                    <Forecast searchQuery={searchQuery} />
                   
                </div>
                <div className="side-content">
                    <Highlights searchQuery={searchQuery} />
                </div>
            </div>
        </>
    );
};

export default App;
