const axios =  require("axios");

    const weatherstackApi = 'http://api.weatherstack.com/current?access_key=125eba9badf202016ee32daf77565b73&query=37.8267,-122.4233&units=f';
    const mapboxApi = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGVjaG5lci1uaXJhbmphbiIsImEiOiJjbDVrbDd3NDEwYXp5M2JwamplNXVubmhhIn0.z0v8NeQxf20ttnkL7uZw2w&limit=1';

     axios
    .get(weatherstackApi)
    .then((response) => {
        // console.log(response.data.current)
        let {temperature , feelslike, weather_descriptions } = response.data.current
        console.log(`${weather_descriptions[0]} and it is currently ${temperature} degree out . and feel like ${feelslike} degree`);
     })
    .catch((err)=>{
        console.log(err);
    });
    axios
    .get(mapboxApi)
    .then((response) => {
        const[latitude , longitude] = response.data.features[0].center;
        console.log(` latitude is ${latitude} and longitude is ${longitude}`);
     })
    .catch((err)=>{
        console.log(err);
    });
    













