import React, { Component } from 'react';
import classes from '../DisplayTemp/DisplayTemp.css';



class DisplayTemp extends Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            temperature: undefined,
        }
        // this.getWeather();
    }

    render() {
        return (
            <body className={classes.body} >
                <div className="location">
                    {/* <h1 className="location-timezone">Bucharest</h1> */}
                </div>
                <div className="temperature">
                    {/* <h2 className="temperature-value">24&deg;C</h2> */}
                    <h3 className="temp-description" >Min: 25&deg;C || Max: 28&deg;C || Humidity</h3>
                    {/* <div className="temperature-description">It's Freaking Cold</div> */}
                </div >
            </body >
        )
    };
};

export default DisplayTemp;
