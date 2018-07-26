import React, { Component } from 'react';
import './Quote.css';
import { service, serviceURLs } from '../../utilities/_index';
import { timeoutDay } from "../../utilities/constants";

class Quote extends Component {
    constructor () {
        super();

        this.state = {
            quote: '',
            author: '',
            timeing: timeoutDay
        };

        this.apiCall = this.apiCall.bind(this);
    }

    componentDidMount () {
        setTimeout(this.apiCall, this.state.timeing);
        this.apiCall();
    }

    apiCall() {
        service(serviceURLs.quote)
            .then(response => {
                const quote = response.contents.quotes[0].quote;
                const author = response.contents.quotes[0].author;

                this.setState(prevState => ({
                    ...prevState,
                    quote,
                    author
                }))
            })
            .catch(error => {
                //TODO: actual error handling
            });
    }

    render() {
        const {
            quote,
            author
        } = this.state;

        return quote &&
                <div style={{float: 'left', width: '20%'}}>
                    <p>
                        {quote}
                    </p>
                    <span style={{float: 'right'}}>-- {author}</span>
                </div>;
    };
}

export default Quote;