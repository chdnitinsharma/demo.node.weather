const axios =  require("axios");


    const url = 'http://api.weatherstack.com/current?access_key=125eba9badf202016ee32daf77565b73&query=37.8267,-122.4233&units=f'

     axios
    .get(url)
    .then((response) => {
        // console.log(response.data.current)
        let {temperature , feelslike, weather_descriptions } = response.data.current
        console.log(`${weather_descriptions[0]}     and it is currently ${temperature} degree out . and feel like ${feelslike} degree`)
     })

    .catch((err)=>{
        console.log(err)
    })

   

















// console.log('starting')

// setTimeout(() => {
//     console.log('2 second')
// } , 2000)

// setTimeout(() => {
//     console.log('0 second')
// } , 0)


// console.log('stop')   