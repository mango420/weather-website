"use strict";
async function getData(city) {
    let cities = await getCityArray(city);
    let cityId = cities[0].id;
    console.log(cityId);
}
async function getCityArray(city) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '400b663645msh7f1cba8d4738e39p1cdf3fjsn2222398c9f0e',
            'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
        }
    };
    let data = await fetch(`https://foreca-weather.p.rapidapi.com/location/search/${city}?lang=en`, options)
        .then(response => response.json())
        .then(response => {
        return response.locations;
    })
        .catch(err => console.error(err));
    return data;
}
async function getCityCurrentInfo(cityId) {
}
