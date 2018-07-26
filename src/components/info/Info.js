import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
    render() {
        return (
            <div className="infoContainer">
                Open source APIs provided by:
                <ul>
                    <li>Pokemon: https://pokeapi.co</li>
                    <li>Quote: http://quotes.rest</li>
                    <li>Weather: https://www.wunderground.com/weather/api</li>
                </ul>
            </div>
        );
    }
}

export default Info;