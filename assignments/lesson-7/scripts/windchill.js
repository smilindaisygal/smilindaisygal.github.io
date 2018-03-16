
// var high = parseFloat(document.getElementById('high').innerHTML);
// var low = parseFloat(document.getElementById('low').innerHTML);
// var tempF = (high+low) / 2;
var tempF = parseFloat(document.getElementById('currentTemp').innerHTML);
var speed = parseFloat(document.getElementById('currentWindspeed').innerHTML);
var chill = Math.round(35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (0.4275 * tempF * Math.pow(speed, .16)));

document.getElementById("windchill").innerHTML = chill;