const axios = require("axios");
const geocode = require("./weather-data/geocode");
const weatherstack = require("./weather-data/weatherstack");

geocode("mohali", (error, data) => {
  console.log("error", error);
  console.log("data", data);

  weatherstack( data.latitude , data.longitude, (error, data) => {
    console.log("error", error);
    console.log("data", data);
  });
  
});

