const countryName = document.getElementById('currentLocation');
const weatherDesc = document.getElementById('weather-desc');
const windSpeed = document.getElementById('wind-speed');
const weatherTemp = document.getElementById('weather-temp');
const weatherHum = document.getElementById('weather-hum');
const weatherPressure = document.getElementById('weather-pressure');
const currentCity = document.getElementById('currentcity');


class Weather{

  		getUserLatLon(){
  			
	  		if (navigator.geolocation) {
			    	navigator.geolocation.getCurrentPosition(function(position) {
			        var latitude = position.coords.latitude;
			        var longitude = position.coords.longitude;

			     	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=27d375664ee8c6ca5fc7c31a39233732&units=metric`)
					.then((response)=>{
						return response.json();
					})
					.then((data)=>{
						console.log(data);
						countryName.innerHTML = data.sys.country;
						weatherDesc.innerHTML = data.weather[0].description;
						weatherTemp.innerHTML = `<p>${data.main.temp} <sup>o</sup>C</p>`;
						weatherHum.innerHTML = `<p>${data.main.humidity} %</p>`;
						weatherPressure.innerHTML = `<p>${data.main.pressure} Pa</p>`;
						currentCity.innerHTML = data.name;
						windSpeed.innerHTML = `<p>${data.wind.speed} km/h</p>`;
						
					})

			    },
			    function(){alert("we can't find you")},
			    {enableHighAccuracy : true});

			}
			
  }

}





