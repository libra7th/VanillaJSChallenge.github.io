const spanWeather = document.querySelector(".span-weather");

const COORDS = "coords";
const API_KEY = "edeac071bfbc9ed26b3bdb25ef285619";

function getWeather(lat, lng) 
{
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        )
        .then(function(response)
		{
            return response.json();
        })
        .then(function(json)
		{
            const temperature = json.main.temp;
            const place = json.name;
            spanWeather.innerText = `${temperature}℃ @ ${place}`;
        });
}

function saveCoords(coordsObj) 
{
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) 
{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
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
    console.log("Can't access geo location");
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