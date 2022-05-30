import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";
export default function Weather (props){
    
    const [weatherData, setWeatherData]= useState({ready: false});
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready:true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.main.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt*1000),
            description:response.data.weather[0].description,
            iconURL:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        });
        
    }
    if (weatherData.ready){
        return (<div className="Weather">
        <form>
            <div className="row">
            <div className="col-9">
            <input type="search" 
            placeholder="Enter a city.." 
            className="form-control"
            autoFocus="on"/>
           
            </div>
            <div className="col-3">
                 <input type="submit" placeholder="Search" className="btn btn-primary" />

            </div>
            </div>
        </form>
        <h1>
            {weatherData.city}
            </h1>
            <ul className="Weather">
                <li>
                    <FormattedDate />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img 
                    src={weatherData.iconURL} 
                    alt={weatherData.description} 
                    className="float-left"/>
                    <div className="float-left">
                        <span className="temperature"> {Math.round(weatherData.temperature)}</span>
                        <span className="unit">°C</span>
                    </div>
                    </div>
                    
                </div>
                <div className="col-6">
                    <ul className="Weather">
                        <li>Precipitation: 15%</li>
                        <li>Humidity: {weatherData.humidity}</li>
                        <li>Wind: {weatherData.wind} </li>
                    </ul>
                </div>
            </div>
            
            Hello from Weather</div>);

    } 
    else {

    
    const apiKey = "1a818352d138428def49a8bbe9fafa1c";
    
    let apiUrl=
    `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
    }

}