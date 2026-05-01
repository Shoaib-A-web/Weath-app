import React, { useEffect } from 'react';
import './weather.css';

const WeatherApp = () => {
  // This replaces the <script src="data.js">
  useEffect(() => {
    // Paste the logic from your data.js here
    // Example: document.querySelector('form').addEventListener(...)
    const apiKey = "7cb73e83029f0b06c3f0f183662e19eb";
    const waetherDataEle = document.querySelector(".weather-data");

    const cityname = document.querySelector("#city-name");
    const form = document.querySelector("form");
    const imgIcon = document.querySelector(".icon");


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // console.log(cityname.value);
        const cityvalue= cityname.value;
        getWeatherData(cityvalue)
        
        
    })

    function getWeatherData(cityvalue){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=${apiKey}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const icon= data.weather[0].icon;
            let Temperature= Math.floor(data.main.temp);
            let weat= data.weather[0].description;
            let feel= Math.floor(data.main.feels_like);
            let humi= data.main.humidity;
            let wsp= data.wind.speed;
            imgIcon.innerHTML= `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="opps">`;

            document.querySelector(".temp").textContent= `${Temperature} °C `;
            document.querySelector(".desc").textContent= `${weat}`;
            document.querySelector(".details div:nth-child(1)").textContent= `Feels like: ${feel} °C`;
            document.querySelector(".details div:nth-child(2)").textContent= `Humidity: ${humi} %`;
            document.querySelector(".details div:nth-child(3)").textContent= `Wind speed: ${wsp} m/s`;

            }).catch(error => console.error("error:", error));
        
    }
  }, []);

  return (
    <div className="container">
      <h1>Weather App</h1>
      <form action="#">
        <input id="city-name" type="text" placeholder=" Enter your city name" />
        <input type="submit" value=" Get weather " />
      </form>
      <div className="weather-data">
        <div className="icon"></div>
        <div className="temp">0°C</div>
        <div className="desc">heze</div>
      </div>
      <div className="details">
        <div>Feels like: 0°C</div>
        <div>Humidity: 0%</div>
        <div>wind speed: 0 m/s</div>
      </div>
    </div>
  );
};

export default WeatherApp;
