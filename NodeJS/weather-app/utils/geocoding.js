import request from "postman-request";

const getWeatherByAddress = (address, callback) => {
    const geocodingURL = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURI(address)}&limit=1&appid=7890217d278dd6e5ba31fed1007fafb0`;
    request({url: geocodingURL, json: true}, (error, response) => {
        const resbody = response?.body;
        if (error) {
            callback('unable to connect with weather service', undefined)
        } else if(resbody.error) {
            callback(`couldn't find location. Try another place`, undefined)
        } else {
            callback(undefined, {lat: resbody[0].lat, lon: resbody[0].lon, location: `${resbody[0].name}, ${resbody[0].state}, ${resbody[0].country}`})
        }
    });   
}

export default getWeatherByAddress