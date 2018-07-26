import React, { Component } from 'react';
import './Weather.css';
import { service, serviceURLs } from '../../utilities/_index';
import { timeoutHour } from "../../utilities/constants";

class Weather extends Component {
    constructor () {
        super();

        this.state = {
            today: {},
            tomorrow: {},
            weather: null,
            timeing: timeoutHour
        };

        this.apiCall = this.apiCall.bind(this);
    }

    componentDidMount () {
        setTimeout(this.apiCall, this.state.timeing);
        this.apiCall();
    }

    apiCall() {
        service(serviceURLs.weather)
            .then(response => {
                const forecast = response.forecast.simpleforecast.forecastday;

                this.setState(prevState => ({
                    ...prevState,
                    weather: [forecast[0], forecast[1]]
                }))
            })
            .catch(error => {
                //TODO: actual error handling
            });
    }

    setDir(dir) {
        const map = {
            NW: 'North West',
            NNW: 'North North West',
            N: 'North',
            NNE: 'North North East',
            NE: 'North East',
            ENE: 'East North East',
            E: 'East',
            ESE: 'East South East',
            SE: 'South East',
            SSE: 'South South East',
            S: 'South',
            SSW: 'South South West',
            SW: 'South West',
            WSW: 'West South West',
            W: 'West',
            WNW: 'West North West'
        };

        return map[dir.toUpperCase()] || '';
    }

    render() {
        const {
            weather
        } = this.state;

        return weather &&
                <div className="weather clearfix">
                    {
                        weather.map((day, k) => (
                            <section key={k}>
                                <div className="date">
                                    {day.date.weekday} {day.date.monthname} {day.date.day}
                                </div>
                                <div className="labels clearfix">
                                    <label>High</label>
                                    <label>Low</label>
                                </div>
                                <div className="temps clearfix">
                                    <div className="highTemp">
                                        {day.high.fahrenheit}
                                    </div>
                                    <div className="lowTemp">
                                        {day.low.fahrenheit}
                                    </div>
                                    <div className="condition">
                                        <img src={day.icon_url} alt="" />
                                        {day.conditions}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label>Winds: </label>
                                        {this.setDir(day.maxwind.dir)} at {day.maxwind.mph}mph
                                    </div>
                                </div>
                            </section>
                        ))
                    }
                </div>;
    };
}

export default Weather;