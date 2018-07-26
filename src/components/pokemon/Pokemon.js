import React, { Component } from 'react';
import './Pokemon.css';
import { service, serviceURLs } from '../../utilities/_index';
import { timeoutDay } from "../../utilities/constants";

class Pokemon extends Component {
    constructor () {
        super();

        this.state = {
            name: null,
            sprite: null,
            timeing: timeoutDay
        };

        this.apiCall = this.apiCall.bind(this);
    }

    componentDidMount () {
        setTimeout(this.apiCall, this.state.timeing);
        this.apiCall();
    }

    apiCall() {
        const url = serviceURLs.pokemon;

        service(url)
            .then(response => {
                const count = response.count;
                const random = Math.round(Math.random() * count);

                return service(url + random + '/');
            })
            .then(response => {
                const name = response.name;
                const sprite = response.sprites;

                debugger;

                this.setState(prevState => ({
                    ...prevState,
                    sprite,
                    name
                }))
            })
            .catch(data => {
                //TODO: actual error handling
                console.error('=============\n', data, '\n=============');
            });
    }

    render() {
        const {
            name,
            sprite
        } = this.state;

        return sprite &&
            <div className="spriteContainer">
                <img src={sprite.front_default} title={name} alt={name} />
                <h2>{name.toUpperCase()}</h2>
            </div>;
    };
}

export default Pokemon;