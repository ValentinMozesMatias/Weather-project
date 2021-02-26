import React, { Component } from 'react';

const DateBuilder = () => {
    const today = new Date()
    const dayName = today.getDay();
    // console.log(today)
    return (
        <div className="dateB">
            <h1>{today.toDateString()}</h1>
        </div>
    )
}

export default DateBuilder;