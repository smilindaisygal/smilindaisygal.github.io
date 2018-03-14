
var requestURL = 'http://api.wunderground.com/api/0697ddd4839663a3/forecast/conditions/q/MN/Franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function(){
    var franklinWeather = JSON.parse(request.responseText);
    document.getElementById('desc').innerHTML = franklinWeather.current_observation.weather;
}