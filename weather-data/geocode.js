 const axios = require('axios')

    const geocode = (address , callback) => {
        const geocodeApi = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidGVjaG5lci1uaXJhbmphbiIsImEiOiJjbDVrbDd3NDEwYXp5M2JwamplNXVubmhhIn0.z0v8NeQxf20ttnkL7uZw2w&limit=1`;
        axios
            .get(geocodeApi)
            .then((response) => {
                callback(undefined , {
                    latitude :response.data.features[0].center[1] ,
                    longitude : response.data.features[0].center[0],
                    location : response.data.features[0].place_name
                });
             })
            .catch((error)=>{
                    if(error){
                        callback('unable to print data' , undefined)
                    }else if(response.data.features.length === 0){
                        callback('not find location' , undefined)
                    }
            });
    }

    module.exports = geocode