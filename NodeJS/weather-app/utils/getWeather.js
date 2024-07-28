import request from "postman-request";

const getWeather = (lat, lon, callback) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=89eea97d65264d27a3972008242507&q=${lat},${lon}`;
    request({ url, json: true }, (error, response) => {
      // console.log(response.body)
      if (error) {
        callback("Unable to connect with weather service!",undefined);
      } else if (response.body.error) {
        callback(`couldn't get weather for specified location. Try another location.`, undefined);
      } else {
        const { temp_c, precip_mm, condition } = response.body.current;
        callback(undefined,
          `It is ${condition.text} and ${temp_c} deg in ${response.body.location.name} and there is a ${precip_mm}% chance of rain today.`
        );
      }
    });
}

export default getWeather