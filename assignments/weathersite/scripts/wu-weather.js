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

    var tempF = parseFloat(document.getElementById('currentTemp').innerHTML);
    var speed = parseFloat(document.getElementById('currentWindspeed').innerHTML);
    var chill = Math.round(35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (0.4275 * tempF * Math.pow(speed, .16)));

    document.getElementById("windchill").innerHTML = chill;

    var iconurl = weatherInfo.current_observation.icon_url;
    iconurl = iconurl.replace('http', 'https');

    document.getElementById('w_icon').src = iconurl;

    document.getElementById('textForecast0').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('textForecast1').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["1"].fcttext;
    document.getElementById('textForecast2').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["2"].fcttext;

} //end of onload