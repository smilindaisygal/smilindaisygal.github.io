var text = '{ "name":"Name: Greenville", "motto":"Green is our way of life", "yearFounded":"Year Founded: 1805", "currentPopulation":"Population: 33,458", "averageRainfall":"Average Rainfall: 25", "events":"Events:<br>February 10-12: Greenbration<br>May 8 - 18: Greenville Founder Days<br>June 20: Verde and Valiant Day<br>November 15-16: Greensome Gathering"}';
var obj = JSON.parse(text);


document.getElementById("greenvilleinfo").innerHTML = obj.name + ",<br> " + obj.motto + ",<br>" + obj.yearFounded + ",<br>" + obj.currentPopulation
+",<br>" + obj.averageRainfall + ",<br>" + obj.events; 

// Greenville
// Motto: Green is our way of life.

// Year Founded: 1805

// Current Population: 33458

// Average Rainfall: 25

// Events:

// February 10-12: Greenbration
// May 8 - 18: Greenville Founder Days
// June 20: Verde and Valiant Day
// November 15-16: Greensome Gathering