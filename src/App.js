import './App.css';
import { WeatherCard, Search } from './components'
import axios from 'axios';
import { useEffect, useState } from 'react'


const api_key = process.env.API_KEY;


const App =() => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lat={lat}&lon={lon}&units=metric&appid=${api_key}`;

  const getData = (e) => {
    if(e.key === 'Enter') {
      axios.get(url)
      .then((response) => {
        setData(response.data)
        console.log(response.data);
      })
      setLocation('')
    }
  };

  const weatherProps = {
  city: data.name,
  // humidity: data ?  data.main.humidity : null,
  // temperature: data ?  Math.floor(data.main.temp) : null,
  //summary: data ? data.weather[0].description : null,
  };

    
  return (
    <div className="App">
      <header className="App-header">
        <Search value={location} onChange={(e) => setLocation(e.target.value)} onKeyPress={getData} type='text'/>
        <WeatherCard {...weatherProps}/>
      </header>
    </div>
  );
}

export default App;
