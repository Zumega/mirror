import { errorMessages } from './constants';

export {
    apiUtil,
    errorMessage,
    utils
};

/*
* @description Convert response to JSON or throw an error
* @param { response } object -> Description: fetch api response object
* @return { JSON || ERROR }
* */
function apiUtil (response) {
    let data;
    let errorCode;

    if (!response) {
        throw new Error('No response');
    }

    if (response.ok) {
        data = response.json();

        return data.then(d => {
            d.utils = new utils(d);
            return d;
        });
    }

    switch (response.status) {
        case 404:
            errorCode = 'NOT_FOUND.PAGE';
            break;
        case 409:
            errorCode = 'NOT_FOUND.CONTENT';
            break;
        case 500:
            errorCode = 'NOT_FOUND.SITE';
            break;
        default:
            errorCode = 0;
    }

    throw new Error(errorMessage(errorCode));
}

/*
* @description Error code to human readable message
* @param { errorCode } string
* @return { string }
* */
function errorMessage (errorCode) {
    // TODO set up human readable messages
    const err = errorCode.split('.');

    function bits (obj) {
        if (typeof obj === 'string' || typeof obj === 'number') {
            return obj;
        }

        return bits(obj[err.shift()]);
    }

    return bits(errorMessages);
}

/*
* @description General utility function setup
* @param { content } any -> Description: takes in any data to be used for any of the provided functions
* @return { this }
* */
function utils (content) {
    // TODO: other utils
    this.isArray = (data = content) => {
        return (data && Array.isArray(data));
    };
    // this.isProperty = (obj = content, path, isValue) => {
    //     // TODO: either inject LODASH or make recursive logic
    //     return _.get(obj, path) === isValue;
    // };

    return this;
}