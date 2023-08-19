import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState({
    temp: 10,
    city: 'London',
    humidity: 10,
    speed: 2  
  });
  const API_KEY = "82f396db6021e1881e967d4310ca9fcb"; 

  useEffect(() => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${API_KEY}&units=metric`;

    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const jsonData = await response.json();

        if (jsonData.cod === 200) {
          setData({
            ...jsonData,
            temp: jsonData.main.temp,
            humidity: jsonData.main.humidity,
            speed: jsonData.wind.speed,
            city: jsonData.name
          });
          console.log(jsonData);
        } else {
          console.log("Error fetching data:", jsonData.message);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data.city, API_KEY]); // Include 'data.city' and 'API_KEY' in the dependency array

  return (
    <h1>Hello {data.city}, the temperature is {data.temp}°C, the humidity is {data.humidity}%, and the wind speed is {data.speed} m/s</h1>
  );
}

export default Home;
