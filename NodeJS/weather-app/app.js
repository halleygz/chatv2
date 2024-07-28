import getWeatherByAddress from "./utils/geocoding.js";
import getWeather from "./utils/getWeather.js";


if (process.argv[2]) {
    const p=process.argv.slice(2).toString().replace(/,/g ," ")

  getWeatherByAddress(p, (addressErr, data) => {
    if (addressErr) {
      console.log("error", addressErr);
    } else {
      const { lat, lon, location } = data;
      console.log("Getting weather data for", location);
      getWeather(lat, lon, (weatherErr, data) => {
        if (weatherErr) {
          console.log("error", weatherErr);
        } else {
          console.log(data);
        }
      });
    }
  });
} else {
    console.log('please enter a location');
}
