var text = '{ "name":"Name: Franklin", "motto":"Where you will grow!", "yearFounded":"Year Founded: 1788", "currentPopulation":"Population: 30485", "averageRainfall":"Average Rainfall: 21", "events":"Events:<br>March 4: March to the Drum of Donuts<br>September 5-11: Founder days<br>December 1-26: Christmas in the Heart"}';
var obj = JSON.parse(text);


document.getElementById("franklininfo").innerHTML = obj.name + ",<br> " + obj.motto + ",<br>" + obj.yearFounded + ",<br>" + obj.currentPopulation
+",<br>" + obj.averageRainfall + ",<br>" + obj.events; 

// </script>
//     {
//       "name": "Franklin",
//       "motto": "Where you will grow!",
//       "yearFounded": 1788,
//       "currentPopulation": 30458,
//       "averageRainfall": 21,
//       "events" : [
//         "March 4: March to the Drum of Donuts",
//         "September 5 - 11: Founder Days",
//         "December 1 - 26: Christmas in the Heart"
//     },
