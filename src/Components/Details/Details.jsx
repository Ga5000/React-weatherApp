import React, { useState,useEffect } from "react";
import './Details.css';
import humidity from "../../assets/icons/humidity.png";
import pressure from "../../assets/icons/water-waves.png";
import visibility from "../../assets/icons/visibility.png";
import feelsLike from "../../assets/icons/thermometer.png";
import API_KEY from "../../api/apiKey";

const Details = ({searchQuery}) => {

    const [detailsData,setDetailsData] = useState(null);

        const fetchDetails = async () => {
            try{
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}&units=metric`;
                const response = await fetch(url);
                const data = await response.json();
               setDetailsData(data);
            }catch(error){
                alert("Error: "+error);
            }
        };
        useEffect(() => {
            if (searchQuery) {
               fetchDetails();
            }
        }, [searchQuery]);

        if (!detailsData) {
            return (
                <div className="details-container">
                <div className="card-info">
                    <p className="info-type">Humidity</p>
                    <div className="info-data">
                        <img src={humidity} alt="" />
                        <p className="info-text">82%</p>
                    </div>
                </div>
                <div className="card-info">
                    <p className="info-type">Pressure</p>
                    <div className="info-data">
                        <img src={pressure} alt="" />
                        <p className="info-text">1025 hPa</p>
                    </div>
                </div>
                <div className="card-info">
                    <p className="info-type">Visibility</p>
                    <div className="info-data">
                        <img src={visibility} alt="" />
                        <p className="info-text">10km</p>
                    </div>
                </div>
                <div className="card-info">
                    <p className="info-type">Feels Like</p>
                    <div className="info-data">
                        <img src={feelsLike} alt="" />
                        <p className="info-text">2°c</p>
                    </div>
                </div>
            </div>
            );
        }
    return(
        <>
            <div className="details-container">
                <div className="card-info">
                    <p className="info-type">Humidity</p>
                    <div className="info-data">
                        <img src={humidity} alt="" />
                        <p className="info-text">{Math.floor(detailsData.main.humidity)}%</p>
                    </div>
                </div>
                <div className="card-info">
                    <p className="info-type">Pressure</p>
                    <div className="info-data">
                        <img src={pressure} alt="" />
                        <p className="info-text">{detailsData.main.pressure}hPa</p>
                    </div>
                </div>
                <div className="card-info">
                    <p className="info-type">Visibility</p>
                    <div className="info-data">
                        <img src={visibility} alt="" />
                        <p className="info-text">{(detailsData.visibility)/1000}km</p>
                    </div>
                </div>
                <div className="card-info">
                    <p className="info-type">Feels Like</p>
                    <div className="info-data">
                        <img src={feelsLike} alt="" />
                        <p className="info-text">{Math.floor(detailsData.main.feels_like)}°c</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details