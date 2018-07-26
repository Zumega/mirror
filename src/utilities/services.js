import { apiUtil } from './general';
import { serviceURLs } from './constants';

export {
    apiUtil,
    serviceURLs,
    service
}

/*
* Generic service request
*
* @param { url } string -> Description: URL to be called
* @param { headers } json -> Description: headers changes
* @param { method } string -> Description: default to 'GET'
* @param { body } json -> Description: data to be sent to the api
* @return {promise}
* */
function service (url, headers = {}, method = 'GET', body) {
    headers = new Headers({
        ...headers
    });

    const meta = {
        method,
        headers,
        body
    };

    return fetch(url, meta)
        .then(apiUtil);
}