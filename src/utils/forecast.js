const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=38397442e3f05b46d8e15b1df0a29752&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, response.body.current)
        }
    })
}

module.exports = forecast
