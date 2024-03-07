import React, { useState,useEffect } from "react";
import API_KEY from "../../api/apiKey";
import './SunriseSunset.css';
import sun from '../../assets/icons/sunny.png';
import moon from '../../assets/icons/moon.png';
import dayNight from '../../assets/icons/day-and-night.png';
import { formatTime } from "../../api/data";
const SunriseSunset = ({searchQuery}) => {

    const [sunData,setsunData] = useState(null);

    const fetchsunsetSunriseData = async () => {
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            setsunData(data);
        }catch(error){
            alert("Error: "+error);
        }
    };
    useEffect(() => {
        if (searchQuery) {
           fetchsunsetSunriseData();
        }
    }, [searchQuery]);

        if (!sunData) {
            return (
                <div className="sun-container">
                <div className="text">
                    <h4>Sunrise & Sunset</h4>
                    <img src={dayNight} alt="" />
                </div>
                <div className="sun-moon-container">
                <div className="sunrise">
                    <img src={sun} alt="sun" />
                    <div className="sunrise-text">
                        <h4>Sunrise</h4>
                        <p className="sunrise-time">6:46AM</p>
                    </div>
                </div>
                <div className="sunset">
                    <img src={moon} alt="moon" />
                    <div className="sunset-text">
                        <h4>Sunset</h4>
                        <p className="sunset-time">5:39PM</p>
                    </div>
                </div>
                </div>
            </div>
            );
        }
    return(
        <>
            <div className="sun-container">
                <div className="text">
                    <h4>Sunrise & Sunset</h4>
                    <img src={dayNight} alt="" />
                </div>
                <div className="sun-moon-container">
                <div className="sunrise">
                    <img src={sun} alt="sun" />
                    <div className="sunrise-text">
                        <h4>Sunrise</h4>
                        <p className="sunrise-time">{sunData ? formatTime(sunData.sys.sunrise) : ""}</p>
                    </div>
                </div>
                <div className="sunset">
                    <img src={moon} alt="moon" />
                    <div className="sunset-text">
                        <h4>Sunset</h4>
                        <p className="sunset-time">{sunData ? formatTime(sunData.sys.sunset) : ""}</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};
export default SunriseSunset