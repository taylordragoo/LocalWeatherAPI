$(document).ready(function(){
  
  $('#btn1').click(function(){
    getLocation();
  });
  
  $('#btn2').click(function(){
    $("span").toggle();
  });
  
  function loadWeather(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let latlon = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon;
    
		$.getJSON(latlon, function(data){
      let cel = data.main.temp;
      let name = data.name;
      let fah = (cel*1.8)+32;
      
      $('#celsius-box').html(`
        <h2 id="temp">${cel}</h2>
				<p id="city">(${name})</p>
      `);
      
      $('#fah-box').html(`
        <h2 id="temp">${fah}</h2>
				<p id="city">(${name})</p>
      `);
      
		});
	};
  
  function getLocation(){
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(loadWeather, showError);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser";
    }
  }
  
  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }
  
});