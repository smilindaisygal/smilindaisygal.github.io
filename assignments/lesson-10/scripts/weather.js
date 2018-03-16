var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'http://api.wunderground.com/api/0697ddd4839663a3/conditions/q/CA/San_Francisco.json', true );

weatherObject.send();

weatherObject.load = function(){
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
}  // end onload
