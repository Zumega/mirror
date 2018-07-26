const environment = process.env.NODE_ENV;
const serviceURLs = enviro();
const timeoutMin = 1e3 * 60;
const timeoutHour = timeoutMin * 60;
const timeoutDay =  timeoutHour * 24;
const errorMessages = {
    NOT_FOUND: {
        PAGE: 'Page not found.',
        CONTENT: 'User not found.',
        SITE: 'Site not found.'
    }
};

export {
    environment,
    errorMessages,
    serviceURLs,
    timeoutDay,
    timeoutHour,
    timeoutMin
}

function enviro () {
    let data;

    if (environment === 'development') {
        data = {
            weather: './mockWeatherData.json',
            pokemon: './mockPokemonData.json?number=0',
            quote: './mockQuoteData.json'
        };
    } else {
        data = {
            weather: 'http://api.wunderground.com/api/299470ffa5a9dcee/forecast/q/WA/Seattle.json',
            pokemon: 'https://pokeapi.co/api/v2/pokemon/',
            quote: 'http://quotes.rest/qod.json'
        };
    }

    return data;
}