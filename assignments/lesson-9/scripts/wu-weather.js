// JavaScript Document

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://api.wunderground.com/api/0697ddd4839663a3/conditions/forecast/q/MN/Franklin.json' , true );

weatherObject.send();

weatherObject.onload = function() {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('currentWindspeed').innerHTML = weatherInfo.current_observation.wind_mph;

    var iconurl = weatherInfo.current_observation.icon_url;
    iconurl = iconurl.replace('http', 'https');

    document.getElementById('w_icon').src = iconurl;

    document.getElementById('textForecast0').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('textForecast1').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["1"].fcttext;
    document.getElementById('textForecast2').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["2"].fcttext;

} //end of onload