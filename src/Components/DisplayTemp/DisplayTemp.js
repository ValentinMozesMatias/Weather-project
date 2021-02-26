import React, { Component } from 'react';
import DateBuilder from '../dateBuilder/DateBuilder'
import classes from '../DisplayTemp/DisplayTemp.css';

class displayTemp extends Component {
    render() {
        return (
            <body className={classes.body}>
                <div className="location">
                    <h1 className="location-timezone">Acuma fac partea de icons</h1>
                </div>
                <div className="temperature">
                    <h2 className="temperature-value">35</h2>
                    <i>icons</i>
                    <div className="temperature-description">It's Freaking Cold</div>
                    <DateBuilder />
                </div >
            </body >
        )
    }
}

export default displayTemp;
