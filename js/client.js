"use strict";
async function getData(city) {
    let cities = await getCityArray(city);
    let cityId = cities[0].id;
    let current = await getCityCurrentInfo(cityId);
    document.getElementById('currTime').innerHTML = `&nbsp;${current.time}`;
    //TODO change symbol if cond change
    document.getElementById('currCondition').innerHTML = `&nbsp;${current.symbolPhrase}`;
    //TODO changes symbol if cold, warm etc.
    if (current.temperature <= 0) {
        document.getElementById('tempSymbol').innerHTML = 'ac_unit';
    }
    document.getElementById('currTemp').innerHTML = `&nbsp;${current.temperature} °C `;
    document.getElementById('currFeelTemp').innerHTML = `&nbsp;${current.feelsLikeTemp} °C`;
    document.getElementById('relHum').innerHTML = `&nbsp;${current.relHumidity} %`;
    document.getElementById('dewPoint').innerHTML = `&nbsp;${current.dewPoint} °C`;
    document.getElementById('windSpeed').innerHTML = `&nbsp;${current.windSpeed} m/s`;
    document.getElementById('windDir').innerHTML = `&nbsp;${current.windDirString}`;
    //TODO change symbol for cloudiness
    document.getElementById('cloudiness').innerHTML = `&nbsp;${current.cloudiness}`;
    //TODO change symbol for thunder prob
    document.getElementById('thunderProb').innerHTML = `&nbsp;${current.thunderProb} %`;
    //TODO change color
    document.getElementById('uvIndex').innerHTML = `&nbsp;${current.uvIndex}`;
    document.getElementById('pressure').innerHTML = `&nbsp;${current.pressure} hPa`;
    document.getElementById('visibility').innerHTML = `&nbsp;${current.visibility}`;
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
        .catch(err => {
        return null;
    });
    return data;
}
async function getCityCurrentInfo(cityId) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '400b663645msh7f1cba8d4738e39p1cdf3fjsn2222398c9f0e',
            'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
        }
    };
    let data = await fetch(`https://foreca-weather.p.rapidapi.com/current/${cityId}?tempunit=C&windunit=MS&tz=Europe%2FVienna&lang=en`, options)
        .then(response => response.json())
        .then(response => {
        return response.current;
    })
        //TODO change error behavior
        .catch(err => {
        return null;
    });
    return data;
}
