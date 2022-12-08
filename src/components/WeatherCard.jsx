export const WeatherCard = ({city, humidity, temperature, summary}) => {
  
    return (
     <div className='weather-card'>
      <h2>{city}</h2>
      <p className='temperature'>{temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p className='summary'>{summary}</p>
     </div>   
    )
}