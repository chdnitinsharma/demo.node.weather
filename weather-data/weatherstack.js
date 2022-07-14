const axios = require('axios');
const { Module } = require('module');

const weatherstack = ( location , callback) => {
    const weatherstackApi = `http://api.weatherstack.com/current?access_key=125eba9badf202016ee32daf77565b73&query=${location}&units=m`;
    axios
    .get(weatherstackApi)
    .then((response) => {
        callback(undefined , {
           temperature : response.data.current.temperature,
           feelslike : response.data.current.feelslike ,
           weather_descriptions :response.data.current.weather_descriptions
        });
    })
    .catch((error) => {
        if(error){
            callback('something went wrong' , undefined);
        }
    })
}

module.exports = weatherstack;