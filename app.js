const axios = require("axios");
const geocode = require("./weather-data/geocode");
const weatherstack = require("./weather-data/weatherstack");

const location = process.argv[2]

if( !location ){
  console.log('please provide a location');
}else {
  geocode(location, (error, data) => {
    if(error){
     return console.log(error)
    };
  
    weatherstack( data.latitude , data.longitude, (error, weatherstackData) => {
      if(error){
        return console.log(error);
      };
      console.log(data.location);
      console.log(weatherstackData);
    });
  });
};


