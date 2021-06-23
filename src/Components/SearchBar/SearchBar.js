import React, { useState } from 'react'
import '../Container.css'
import { getWeather } from '../DisplayTemp/getWeather'
import './SearchBar.css';


export const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState('');
    const search = async(e) => {
        if(e.key == 'Enter') {
            const data = await getWeather(query)
            setWeather(data);
            setQuery('');
        }
    } 
    return (
        <div className="search-box search-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search} />
                {weather.main && (
                    <div className="city">
                        <h2 className="city-name">
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>
                        <div className="city-temp">
                            {Math.round(weather.main.temp - 273.15)}
                            <sup>&deg;C</sup>
                            </div>
                            <div className="Info">
                                <img className="city-icon" src={'http://openweathermap.org/img/wn/10d@2x.png'} alt={weather.weather[0].description}/>
                                <p>{weather.weather[0].description}</p>
                            </div>
                        </div>
                )}
        </div>
    )
}