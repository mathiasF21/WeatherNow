import { useState } from "react";

function Forecast({ city }) {

  const API_KEY = "82f396db6021e1881e967d4310ca9fcb"; 
  const [dayForecast, setDayForecast] = useState([]);

    const fetchForecast = async (city) => {
      let URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
      try {
        const response = await fetch(URL);
        const jsonData = await response.json();

        if(jsonData.cod === "200") {
          const firstDayForecast = jsonData.list.slice(0,7);
          setDayForecast(firstDayForecast);
        } else {
          console.log("Error fetching data:", jsonData.message);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    return (
      <h1>hello</h1>
    );
}
  
  export default Forecast;