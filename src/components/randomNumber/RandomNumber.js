import React, { Component } from 'react';
import './RandomNumber.css';

class RandomNumber extends Component {
    // TODO: add a refresh every X min/hour/day?

    setRandom() {
        const i = Math.round(Math.random() * 5);
        const a = Math.random() * 1e5;
        const b = Math.random() * 1e5;
        let value = 0;

        switch (i) {
            case 1:
                value = a - b;
                break;
            case 2:
                value = (b === 0) ? 0 : a / b;
                break;
            case 3:
                value = a * b;
                break;
            case 4:
                value = Math.max(a, b);
                break;
            case 5:
                value = Math.min(a, b);
                break;
            default:
                value = a + b;
                break;
        }


        return Math.round(Math.abs(value));
    }

    render() {
        return <div style={{position: 'absolute', top: '50%'}}>{this.setRandom()}</div>;
    };
}

export default RandomNumber;