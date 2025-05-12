import { useState } from 'react';
import InfoBox from './infoBox';
import SearchBox from './SearchBox';
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"",
        feelsLike:"",
        temp:"",
        tempMin:"",
        tempMax:"",
        humidity:"",
        weather:"",
    })
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App By Malatesh</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}