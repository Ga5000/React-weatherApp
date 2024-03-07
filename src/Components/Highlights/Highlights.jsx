import React from 'react';
import './Highlights.css'
import AirQuality from '../airQuality/airQuality';
import SunriseSunset from '../SunriseSunset/SunriseSunset';
import openweather from '../../assets/icons/openweather.png';
import Details from '../Details/Details';
const HighLights = ({searchQuery}) => {
    return(
        <>
        <div className="highlights-container">
            <div className="today">
                <h3>Today Highlights</h3>
            </div>
            <div className="components-container">
               <AirQuality searchQuery={searchQuery}/>
               <SunriseSunset searchQuery={searchQuery} />
            </div>
            <Details searchQuery={searchQuery}/>
        </div>
        <p className="powered">Powered By<img src={openweather} alt="" /> </p>
        </>
    );
};

export default HighLights