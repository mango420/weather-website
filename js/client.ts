interface city {
    'id': number,
    'name': string,
    'country': string,
    'timezone': string,
    'language': string,
    'adminArea': string,
    'adminArea2': string,
    'adminArea3': string,
    'lon': number,
    'lat': number,
}

interface currentCityInfo {
    'time': string,
    'symbol': string,
    'symbolPhrase': string,
    'temperature': number,
    'feelsLikeTemp': number,
    'relHumidity': number,
    'dewPoint': number,
    'windSpeed': number,
    'windDir': number,
    'windDirString': string,
    'windGust': number,
    'precipProb': number,
    'precipRate': number,
    'cloudiness': number,
    'thunderProb': number,
    'uvIndex': number,
    'pressure': number,
    'visibility': number
}

async function getData(city: string) {
    let cities: any = await getCityArray(city);
    let cityId: number = cities[0].id;


    console.log(cityId);
}

async function getCityArray(city: string) {

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
            return response.locations as city[];
        })
        .catch(err => console.error(err));

    return data;
}

async function getCityCurrentInfo(cityId: number) {

}