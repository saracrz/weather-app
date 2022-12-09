export const WeatherCard = ({city, humidity, maxTemp, minTemp, temperature, summary, wind}) => {
  
    return (
     <div className='weather-card'>
      <h3>{city}</h3>
      <div>
        <p className='temperature'>{temperature}°C</p>
        <p className='summary'>{summary}</p>
      </div>
      <div className='footer-container'>
        <div className="footer-text">
            <p>Humidity</p>
            <p>{humidity}%</p>
        </div>
        <div className="footer-text">
            <p>Wind</p>
            <p>{wind}</p>
        </div>
        <div className="footer-text">
            <p>Max</p>
            <p>{maxTemp}°C</p>
        </div>
        <div className="footer-text">
            <p>Min</p>
            <p>{minTemp}°C</p>
        </div>
      </div>
     </div>   
    )
}