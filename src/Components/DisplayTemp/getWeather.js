import axios from 'axios';

const API_KEY = "7532286a4944b9a45ad0a00e99144080";
const baseUrl = `http://api.openweathermap.org/data/2.5/weather?`;
    

    export const getWeather = async (query) => {
        const {data} = await axios.get(baseUrl, {
            params: {
                q: query,
                unites: 'metric',
                APPID: API_KEY,
            }
        })

        return data;
        };
       
        