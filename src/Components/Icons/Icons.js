import React, { Component } from 'react';
// import { WeatherIcon } from 'weather-react-icons';
import classes from './Icons.css';
import DisplayTemp from '../DisplayTemp/DisplayTemp';



class Icons extends Component {
    render() {
        return (
            <div>
                <div class="icon sunny">
                    <div class="sun">
                <div class="rays"></div>
                </div>
            </div>
        </div>
        );
    }
};

export default Icons;