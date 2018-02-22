
var tempF = parsefloat(document.getElementById('Temp').innerHTML);
var speed = parsefloat(document.getElementById('speed').innerHTML);
var chill = windChill(tempF, speed);



function windChill(tempF, speed){
    var wind = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (0.4275 * tempF * Math.pow(speed, .16));
    return wind;}


    document.getElementById("windChill").innerHTML = chill; 