import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather (){
    const [ready, setReady]= useState(false);
    const [temperature, setTemperature]= useState(null);
    function handleResponse(response){
        console.log(response.data);
        setTemperature(response.data.main.temp);
        setReady(true);
    }
    if (ready){
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
            New York
            </h1>
            <ul className="Weather">
                <li>Wednesday 7:00</li>
                <li>Partly Cloudly</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly cloudy image" className="float-left"/></div>
                    6°C
                </div>
                <div className="col-6">
                    <ul className="Weather">
                        <li>Precipitation: 15%</li>
                        <li>Humidity: 72%</li>
                        <li>Wind: 13km/h </li>
                    </ul>
                </div>
            </div>
            
            Hello from Weather</div>);

    } 
    else {

    
    const apiKey = "1a818352d138428def49a8bbe9fafa1c";
    let city="New York";
    let apiUrl=
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
    }

}