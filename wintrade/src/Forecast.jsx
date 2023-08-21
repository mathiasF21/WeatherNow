import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Forecast(props) {

  const API_KEY = "82f396db6021e1881e967d4310ca9fcb"; 
  const [dayForecast, setDayForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      let URL = `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${API_KEY}&units=metric`;
      try {
        const response = await fetch(URL);
        const jsonData = await response.json();

        if(jsonData.cod === "200") {
          const firstDayForecast = jsonData.list.slice(0, 8);
          setDayForecast(firstDayForecast);
        } else {
          console.log("Error fetching data:", jsonData.message);
        }
      } catch(error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchForecast(); 
  }, []);
    console.log(dayForecast);
    return (
      <div className="day-container">
      {dayForecast.map((forecast, index) => (
        <Card key={index} className="forecast-card" style={{ width: '18rem' }}>
        <Card.Img className="card-image" variant="top" src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}/>
        <Card.Body>
          <Card.Title>{forecast.main.temp}°C</Card.Title>
          <Card.Text>
            Time: {forecast.dt_txt} <br/>
            Humidity: {forecast.main.humidity}% <br/>
            Description: {forecast.weather[0].description} <br/>
          </Card.Text>
        </Card.Body>
      </Card>
      ))}
    </div>
    );
}
  
  export default Forecast;