import React, { useEffect } from 'react'
import { getDataFromAPI } from '../Network/clientAPI'
import './Container.css'

//getting data from API

const Container = ({ children, city = '' }) => {
    let response
    useEffect(() => {
        if (city.length > 2) {
            response = getDataFromAPI(city)
            console.log(response)
        }
    }, [city])


    return (
        <div className="container">
            <div className="central-container">
                {children}
            </div>
        </div>
    )
}



//query selector

// const locationElement = document.querySelector('data-location')
// const statusElement = document.querySelector('data-status')
// const temperatureElement = document.querySelector('data-temperature')
// const precipitationElement = document.querySelector('data-precipitation')
// const windElement = document.querySelector('data-wind')

// function setWeatherData(data, place) {
//     locationElement.textContent = place
//     statusElement.textContent = data.sumarry
//     temperatureElement.textContent = data.temperature
//     precipitationElement.textContent = `${data / precipProbability * 100}%`
//     windElement.textContent = data.windSpeed
// }

//longitude and latitude (this is already built in JS)
//EventTarget is a DOM interface implemented by objects that can receive events and 
//may have listeners for them, Element, Document, and Window are the most common 
//event targets, but other objects can be event targets, too. For example 
//XMLHttpRequest, AudioNode, AudioContext, and others.
// Many event targets (including elements, documents, and windows) also support setting 
// event handlers via onevent properties and attributes.


// window.addEventListener('load', () => {
//     let long
//     let lat

//     if (navigator.geolocation) {

//     } else {
//         h1.textContent = "This is not working because...you forgot to pay the bill"
//     }
// })

export default Container;