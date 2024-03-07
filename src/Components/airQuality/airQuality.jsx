import React, { useState, useEffect } from "react";
import './airQuality.css';
import wind from "../../assets/icons/wind.png";
import API_KEY from "../../api/apiKey";

const AirQuality = ({ searchQuery }) => {
    const getAirQualityStatus = (aqi) => {
        let statusText = "";
        let statusColor = "";
      
        switch (aqi) {
          case 1:
            statusText = "Good";
            statusColor = "green";
            break;
          case 2:
            statusText = "Fair";
            statusColor = "yellow";
            break;
          case 3:
            statusText = "Moderate";
            statusColor = "orange";
            break;
          case 4:
            statusText = "Poor";
            statusColor = "red";
            break;
          case 5:
            statusText = "Very Poor";
            statusColor = "purple";
            break;
          default:
            statusText = "Unknown";
            statusColor = "black";
        }
        return { text: statusText, color: statusColor };
    };
    const [airData, setAirData] = useState(null);
    const [coordsdata, setCoordsData] = useState(null);

    const fetchCoordsData = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            setCoordsData(data);
        } catch (error) {
            alert("Error: " + error);
        }
    };

    const fetchAirData = async () => {
        try {
            if (coordsdata) {
                const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coordsdata.coord.lat}&lon=${coordsdata.coord.lon}&appid=${API_KEY}`;
                const response = await fetch(url);
                const data = await response.json();
                setAirData(data);
            }
        } catch (error) {
            alert("Error: " + error);
        }
    };

    useEffect(() => {
        if (searchQuery) {
            fetchCoordsData();
        }
    }, [searchQuery]);

    useEffect(() => {
        if (coordsdata) {
            fetchAirData();
        }
    }, [coordsdata]);

    if (!airData && !coordsdata) {
        return (
            <div className="air-quality-index">
                <div className="state">
                    <h4>Air Quality Index <img src={wind} alt="wind" /></h4>
                    <button className="air-quality">Good</button>
                </div>
                <div className="quality-details">
                    <div className="air-quality-data">
                        <div className="data-type">
                            <p>PM2.5</p>
                            <p>SO2</p>
                            <p>NO2</p>
                            <p>O3</p>
                        </div>
                        <div className="data-value">
                            <p>3.90</p>
                            <p>7.75</p>
                            <p>33.6</p>
                            <p>38.6</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    const airQualityStatus = airData ? getAirQualityStatus(airData.list[0].main.aqi) : { text: "Unknown", color: "black" };

    return (
        <div className="air-quality-index">
            <div className="state">
                <h4>Air Quality Index <img src={wind} alt="wind" /></h4>
                <button className="air-quality" style={{ backgroundColor: airQualityStatus.color }}>{airQualityStatus.text}</button>
            </div>
            <div className="quality-details">
                <div className="air-quality-data">
                    <div className="data-type">
                        <p>PM2.5</p>
                        <p>SO2</p>
                        <p>NO2</p>
                        <p>O3</p>
                    </div>
                    <div className="data-value">
                    <p>{airData ? (airData.list[0].components.pm2_5).toFixed(2) : ""}</p>
                    <p>{airData ? (airData.list[0].components.so2).toFixed(2) : ""}</p>
                    <p>{airData ? (airData.list[0].components.no2).toFixed(2) : ""}</p>
                    <p>{airData ? (airData.list[0].components.o3).toFixed(2) : ""}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AirQuality;
