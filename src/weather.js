const spanWeather = document.querySelector(".span-weather");

const COORDS = "coords";
const API_KEY = "edeac071bfbc9ed26b3bdb25ef285619";

function getWeather(_lat, _lng) 
{
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${_lat}&lon=${_lng}&appid=${API_KEY}&units=metric`
        )
        .then(function(_response)
		{
            return _response.json();
        })
        .then(function(_json)
		{
            const temperature = _json.main.temp;
            const place = _json.name;
            spanWeather.innerText = `${temperature}℃ @ ${place}`;
        });
}

function saveCoords(_coords) 
{
    localStorage.setItem(COORDS, JSON.stringify(_coords));
}

function handleGeoSucces(_coords) 
{
    const latitude = _coords.coords.latitude;
    const longitude = _coords.coords.longitude;
    const coordsObj =
	{
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError()
{
    //console.log("Can't access geo location");
	alert("Can't access geo location");
}

function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function mainProcess()
{
	const defaultCoords = localStorage.getItem(COORDS);
	if ( null === defaultCoords ) 
	{
	    askForCoords();
	}
	else
	{
	    const jsonCoords = JSON.parse(defaultCoords);
	    getWeather(jsonCoords.latitude, jsonCoords.longitude);
	}
}

mainProcess();