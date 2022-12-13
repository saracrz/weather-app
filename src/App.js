import './App.css';
import { WeatherCard, Search } from './components'
import {useFetch} from './hooks/useFetch'
import {useState } from 'react'
import weather_app from './weather_app.svg'



const api_key = process.env.REACT_APP_API_KEY;

const App = () => {
const [location, setLocation] = useState('');

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lat={lat}&lon={lon}&units=metric&appid=${api_key}`;
const { data, getData } = useFetch(url)



const handleKeyPress = (e) =>{
  if(e.key === 'Enter') {
    getData();
    setLocation('')
  }
}

      
  const weatherProps = {
    city: data?.name,
    humidity: data?.main?.humidity,
    temperature:  Math.floor(data?.main?.temp),
    maxTemp:  Math.floor(data?.main?.temp_max),
    minTemp:  Math.floor(data?.main?.temp_min),
    summary: data?.weather[0]?.description,
    wind:  data?.wind?.speed,
  };

    
  return (
    <div className="App">
      <header className="App-header">
        <img src={weather_app} className='image'/>
        <Search value={location} onChange={(e) => setLocation(e.target.value)} onKeyPress={handleKeyPress} type='text'/>
        {data && 
        <WeatherCard {...weatherProps}/>
        }
      </header>
    </div>
  );
}

export default App;
