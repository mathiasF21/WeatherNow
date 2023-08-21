import React, { useState } from "react";
import './styles.css';
import Forecast from "./Forecast";

function Home() {
  const [data, setData] = useState({
    temp: 0,
    city: 'loading...',
    humidity: 0,
    speed: 0,
    feels_like: 0,
    description: 'loading...',
    image_icon: ''
  });
  const [cityInput, setCityInput] = useState('');
  const [showForecast, setShowForecast] = useState(false);
  const API_KEY = "82f396db6021e1881e967d4310ca9fcb"; 

  const fetchData = async (city) => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
      const response = await fetch(URL);
      const jsonData = await response.json();

      if (jsonData.cod === 200) {
        setData({
          ...jsonData,
          temp: jsonData.main.temp,
          humidity: jsonData.main.humidity,
          speed: jsonData.wind.speed,
          city: jsonData.name,
          feels_like: jsonData.main.feels_like,
          description: jsonData.weather[0].description,
          image_icon: jsonData.weather[0].icon
        });
        console.log(jsonData);
      } else {
        console.log("Error fetching data:", jsonData.message);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    fetchData(cityInput);
    setShowForecast(true);
  };

  return (
    <>
      <div className="card-container">
        <div className="weather">
          <div className="search">
            <input type="text" placeholder="Enter City Name" onChange={e => setCityInput(e.target.value)}></input>
            <button><img src="/images/search.svg" alt="search symbol" onClick={handleSearch}/></button>
          </div>
          <div className="info">
            <img src={`https://openweathermap.org/img/wn/${data.image_icon}.png`} alt="loading..."/>
            <div className="main-numbers">
              <h1>{data.temp}°C</h1>
              <h2>{data.city}</h2>
            </div>
          </div>
          <div className="details">
            <div className="col">
                <img src="/images/humidity.svg" alt="humidity"/>
                <div>
                  <p>{data.humidity}%</p>
                  <p>Humidity</p>
                </div>
            </div>
            <div className="col">
                <img src="/images/wind.svg" alt="wind speed"/>
                <div>
                  <p>{data.speed} meter/sec</p>
                  <p>Wind Speed</p> 
                </div>
            </div>
          </div>
          <div className="details">
            <div className="col">
                <img src="/images/feels_like.svg" alt="humidity"/>
                <div>
                  <p>{data.feels_like}°C</p>
                  <p>Feels like</p>
                </div>
            </div>
            <div className="col">
                <img src="/images/home.svg" alt="wind speed"/>
                <div>
                  <p>{data.description}</p>
                  <p>Description</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      {showForecast && <Forecast city={cityInput} />}
    </>
  );
}

export default Home;
