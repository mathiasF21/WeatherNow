import React, { useEffect, useState } from "react";
import './styles.css';

function Home() {
  const [data, setData] = useState({
    temp: 10,
    city: 'London',
    humidity: 10,
    speed: 2,
    feels_like: 0,
    country: 'England' 
  });
  const [cityInput, setCityInput] = useState('');
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
          country: jsonData.sys.country
        });
        console.log(jsonData);
      } else {
        console.log("Error fetching data:", jsonData.message);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(data.city);
  }, [data.city]); 

  const handleCityChange = () => {
    fetchData(cityInput);
  };

  return (
    <div className="card-container">
      <div className="weather">
        <div className="search">
          <input type="text" placeholder="Enter City Name" onChange={e => e.target.value}></input>
          <button><img src="/images/search.svg" alt="search symbol" onClick={handleCityChange}/></button>
        </div>
        <div className="info">
          <h1>{data.temp}</h1>
          <h2>{data.city}</h2>
        </div>
        <div className="details">
          <div className="col">
              <img src="/images/humidity.svg" alt="humidity"/>
              <div>
                <p>{data.humidity}</p>
                <p>Humidity</p>
              </div>
          </div>
          <div className="col">
              <img src="/images/wind.svg" alt="wind speed"/>
              <div>
                <p>{data.speed}</p>
                <p>Wind Speed</p>
              </div>
          </div>
        </div>
        <div className="details">
          <div className="col">
              <img src="/images/feels_like.svg" alt="humidity"/>
              <div>
                <p>{data.feels_like}</p>
                <p>Feels like</p>
              </div>
          </div>
          <div className="col">
              <img src="/images/home.svg" alt="wind speed"/>
              <div>
                <p>{data.country}</p>
                <p>Country</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
