import axios from 'axios'



export const getDataFromAPI = async (city) => {
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=543c1ad263070896cac0d08ed8f50bfe`
    const response = await axios({
        url: base,
        method: "GET"
    })
    if (response.status === 200) {
        return response
    }
    return {}
}