import React from 'react';
import axios from 'axios';
import FiveDay from './FiveDay';
import { useState } from 'react';


const GetWeather = (props) => {

    const date = new Date();
    const dateDisplay = date.toLocaleDateString();

    const [weather, setWeather] = useState(
        { 
            city: '',
            temp: '',
            conditions: '',
            feelsLike: ''
    }
    );


    const [cityInput, setCityInput] = useState('');

    const handleSearch = () => {
    
        const API = process.env.REACT_APP_API_KEY;

        const getWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=imperial&appid=${API}`);
      
                const city = response.data.city.name;
                const temp = Math.round(response.data.list[0].main.temp);
                const feelsLike = Math.round(response.data.list[0].main.feels_like);
                const conditions = response.data.list[0].weather[0].main;
                //day 1
                const temp1 = Math.round(response.data.list[4].main.temp);
                const condition1 = response.data.list[4].weather[0].main;
                //day 2
                const temp2 = Math.round(response.data.list[12].main.temp_max);
                const condition2 = response.data.list[12].weather[0].main;
                //day 3
                const temp3 = Math.round(response.data.list[20].main.temp_max);
                const condition3 = response.data.list[20].weather[0].main;
                //day 4
                const temp4 = Math.round(response.data.list[28].main.temp_max);
                const condition4 = response.data.list[28].weather[0].main;
                //day 5
                const temp5 = Math.round(response.data.list[36].main.temp_max);
                const condition5 = response.data.list[36].weather[0].main;


                function changeBackground() {
                    let background = document.getElementById('page');
                    
                    background.classList.remove(...background.classList);
                    background.classList.add("container")
                   
                    switch(conditions){
                      case "Snow": 
                        background.classList.add("snow");
                        break;
                      case "Clear":
                          background.classList.add("sun");
                          break;
                      case "Rain":
                          background.classList.add("rain");
                          break;
                      case "Clouds":
                          background.classList.add("clouds");
                          break;
                      case "Extreme":
                          background.classList.add("thunderstorm");
                          break;
                      case "Fog":
                          background.classList.add("fog");
                          break;
                      default:
                          background.classList.add("start");
                    }
                    
                  }
          
                changeBackground();

    
              setWeather({
                  city: city,
                  temp: temp,
                  conditions: conditions,
                  feelsLike: feelsLike,
                  temp1: temp1,
                  condition1: condition1,
                  temp2: temp2,
                  condition2: condition2,
                  temp3: temp3,
                  condition3: condition3,
                  temp4: temp4,
                  condition4: condition4,
                  temp5: temp5,
                  condition5: condition5,
              })

              const showWeather = () => {
                const display = document.getElementById('results');
                display.classList.remove("hide")
                display.classList.add("show")
              }

              showWeather();

              const showHeading = () => {
                const heading = document.getElementById('react-title');
                heading.classList.remove("show")
                heading.classList.add("hide")
              }

              showHeading();

    
            } catch (error) {
                alert('No City Found');
                console.error(error);
            }
            }

            getWeather();

            setCityInput('');


    }

    return(
        <div id="page" className="container start">
            <div id="content">
                <div id="main-display">
                    <h2 id="react-title" className="show">React Weather App</h2>
                    <p>{ dateDisplay }</p>
                    <input 
                        type="text" 
                        id="weatherSearch"
                        placeholder="Enter a City"
                        value={cityInput}
                        onChange={(e) => setCityInput(e.target.value)}
                    />
                <button id="weatherBtn" onClick={handleSearch}><i className="fas fa-search"></i></button>
                </div>
                <div id="results" className="hide">
                    <h1 id="city">{ weather.city }</h1>
                    <h3 id="temp">{ weather.temp }&deg;F</h3>
                    <h4 id="weather">{ weather.conditions }</h4>
                    <p>Feels like: { weather.feelsLike }&deg;F</p>
                    
                    <FiveDay 
                        temp1={ weather.temp1 } 
                        condition1={ weather.condition1 }  
                        temp2={ weather.temp2 } 
                        condition2={ weather.condition2 }  
                        temp3={ weather.temp3 } 
                        condition3={ weather.condition3 } 
                        temp4={ weather.temp4 } 
                        condition4={ weather.condition4 } 
                        temp5={ weather.temp5 } 
                        condition5={ weather.condition5 } 
                    />
                </div>
            </div>
        </div>
    )
}
    
export default GetWeather;