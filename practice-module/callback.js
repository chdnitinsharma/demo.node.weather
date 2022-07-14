// const { response } = require("express");
// const axios = requir('axios')

//     const weatherstackApi = 'http://api.weatherstack.com/current?access_key=125eba9badf202016ee32daf77565b73&query=37.8267,-122.4233&units=m';
//     const geocodeApi = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGVjaG5lci1uaXJhbmphbiIsImEiOiJjbDVrbDd3NDEwYXp5M2JwamplNXVubmhhIn0.z0v8NeQxf20ttnkL7uZw2w&limit=1';

//      axios
//     .get(weatherstackApi)
//     .then((response) => {
//         let {temperature , feelslike, weather_descriptions } = response.data.current
//         console.log(`${weather_descriptions[0]} and it is currently ${temperature} degree out . and feel like ${feelslike} degree`);
//      })
//     .catch((error)=>{
//             console.log(error);
//     });

//     axios
//     .get(geocodeApi)
//     .then((response) => {
//         const [latitude , longitude] = response.data.features[0].center;
//         console.log(` latitude is ${longitude} and longitude is ${latitude}`);
//      })
//     .catch((err)=>{
//             console.log('unable to print');
//     });



// const geocode = ( address , callback ) => {
//     setTimeout(() => {
//         const data = {
//             latitude : '5',
//             longitute : '10'
//         }
//         callback(data);
//     }, 2000);
// }

// geocode('mohali' , (callBackData) => {
//     console.log(callBackData);
// });

const add = (x ,y , callback) => {
    // setTimeout(()=> {
        c =  x+ y
        callback(c)
    // },2000)
}

add(5 ,10 , (sum) => {
    console.log(sum)
})