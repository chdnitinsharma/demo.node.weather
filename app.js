const axios = require("axios");
const geocode = require("./weather-data/geocode");
const weatherstack = require("./weather-data/weatherstack");

geocode("faridabad", (error, data) => {
  console.log("error", error);
  console.log("data", data);
});

weatherstack("30.695527,76.717623", (error, data) => {
  console.log("error", error);
  console.log("data", data);
});
