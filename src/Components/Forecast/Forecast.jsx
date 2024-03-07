import React, { useState, useEffect } from "react";
import './Forecast.css';
import calendar from "../../assets/icons/calendar.png";
import weatherIcon from "/01d.png";
import locationIcon from "../../assets/icons/location.png";
import API_KEY from '../../api/apiKey.js';
import {formatDate} from '../../api/data.js';

const Forecast = ({ searchQuery }) => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            alert("Error: " + error);
        }
    };

    useEffect(() => {
        if (searchQuery) {
            fetchData();
        }
    }, [searchQuery]);

   
    const renderForecastContent = () => {
        if (!weatherData) {
            return (
                <div className="forecast-container">
                <h2>Now</h2>
                <div className="temperature-weather">
                    <h1>5&deg;c</h1>
                    <img src={weatherIcon} alt="weather" />
                </div>
                <div className="weather-type">
                    <p>Sunny</p>
                </div>
                <hr />
                <div className="details">
                    <div className="day">
                        <img src={calendar} alt="calendar" />
                        <p className="date">Wednesday 1, Mar</p>
                    </div>
                    <br />
                    <div className="location">
                        <img src={locationIcon} alt="location" />
                        <p className="location">London,GB</p>
                    </div>
                </div>
            </div>
            );
        }

        return (
            <div className="forecast-container">
                <h2>Now</h2>
                <div className="temperature-weather">
                    <h1>{Math.floor(weatherData.main.temp)}&deg;c</h1>
                    <img src={`/${weatherData.weather[0].icon}.png`} alt="weather" />
                </div>
                <div className="weather-type">
                    <p>{weatherData.weather[0].description}</p>
                </div>
                <hr />
                <div className="details">
                    <div className="day">
                        <img src={calendar} alt="calendar" />
                        <p className="date">{formatDate(weatherData.dt)}</p>
                    </div>
                    <br />
                    <div className="location">
                        <img src={locationIcon} alt="location" />
                        <p className="location">{weatherData.name},{weatherData.sys.country}</p>
                    </div>
                </div>
            </div>
        );
    };

    return <>{renderForecastContent()}</>;
};

export default Forecast;
