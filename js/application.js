class Weather{

  		getUserLatLon(){

	  		if (navigator.geolocation) {
			    	navigator.geolocation.getCurrentPosition(function(position) {
			        var latitude = position.coords.latitude;
			        var longitude = position.coords.longitude;

			     	fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=27d375664ee8c6ca5fc7c31a39233732`)
					.then((response)=>{
						return response.json();
					})
					.then((data)=>{
						console.log(data);
					})

			    },
			    function(){alert("we can't find you")},
			    {enableHighAccuracy : true});

			}
  }

}

const Myweather = new Weather;
Myweather.getUserLatLon()



